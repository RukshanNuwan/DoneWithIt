import {Image, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

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
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
            />

            <ErrorMessage error={errors.email} visible={touched.email}/>

            <AppTextInput
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCOrrect={false}
              textContentType="password"
              secureTextEntry
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
            />

            <ErrorMessage error={errors.password} visible={touched.password}/>

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