import {useState} from "react";
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import Screen from "../components/Screen";
import {AppForm, AppFormField, ErrorMessage, SubmitButton} from '../components/forms';
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const {login} = useAuth();

  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);

    login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo}/>

      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password" visible={loginFailed}/>

        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCOrrect={false}
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton title="Login"/>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
