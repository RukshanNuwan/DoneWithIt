import React, {useState} from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";

import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import {AppForm, AppFormField, SubmitButton} from "../components/forms";
import usersApi from '../api/users';
import authApi from '../api/auth';
import AppText from "../components/AppText";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState();
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError('An unexpected error occurred');
        console.log(result);
      }
    }

    const {data: authToken} = await authApi.login(userInfo.email, userInfo.password);
    await auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{name: "", email: "", password: ""}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {error && (
          <AppText style={styles.error}>{error}</AppText>
        )}

        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register"/>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  error: {
    color: colors.danger,
  },
});

export default RegisterScreen;
