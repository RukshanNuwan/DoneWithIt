import {Image, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo}/>

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log('values -> ', values)}
        validationSchema={validationSchema}
      >
        {({handleSubmit}) => (
          <>
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

            <AppButton title="Login" onPress={handleSubmit}/>
          </>
        )}
      </Formik>
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
