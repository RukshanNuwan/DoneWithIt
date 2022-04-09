import {useFormikContext} from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({name, width, ...otherProps}) => {
  const {setFieldTouched, setFieldValue, values, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
};

export default AppFormField;
