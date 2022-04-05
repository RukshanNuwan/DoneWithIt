import {useFormikContext} from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({name, width, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
};

export default AppFormField;
