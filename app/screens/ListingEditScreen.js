import {useEffect, useState} from "react";
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import {AppForm, AppFormField, AppFormPicker, SubmitButton} from '../components/forms';
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
  {label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp'},
  {label: 'Cars', value: 2, backgroundColor: '#fd9644', icon: 'car'},
  {label: 'Cameras', value: 3, backgroundColor: '#fed330', icon: 'camera'},
  {label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards'},
  {label: 'Clothing', value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel'},
  {label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball'},
  {label: 'Movies & Music', value: 7, backgroundColor: '#4b7bec', icon: 'headphones'},
  {label: 'Books', value: 8, backgroundColor: '#a55eea', icon: 'book-open-variant'},
  {label: 'Other', value: 9, backgroundColor: '#778ca3', icon: 'application'},
];

const ListingEditScreen = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const {coords: {longitude, latitude}} = await Location.getCurrentPositionAsync();
      setLocation({longitude, latitude});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={values => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"/>

        <AppFormField name="title" maxLength={255} placeholder="Title"/>

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post"/>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default ListingEditScreen;
