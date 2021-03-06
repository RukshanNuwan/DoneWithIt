import {useFormikContext} from 'formik';

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({items, name, width, placeholder, PickerItemComponent, numberOfColumns}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        onSelectItem={item => setFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
};

export default AppFormPicker;
