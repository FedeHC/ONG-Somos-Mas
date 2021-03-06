import React from 'react';
import './homeForm.scss';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, Field } from 'formik';
import { Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import { editSlides } from '../../../app/slides/slides';
import { useDispatch, /* useSelector */ } from 'react-redux';
import {
  // errorAlert,
  // questionAlert,
  successAlert,
} from '../../../features/alert/alert';

const SignupSchema = Yup.object().shape({
  description: Yup.string()
    .required('Requerido')
    .min(20, 'Se requieren 20 caracteres como mínimo'),
  imageSlice1: Yup.mixed()
    .required('Requerido')
    .test('type', 'Solo se aceptan formatos jpg y png', file => {
      return file && (file.type === 'image/jpg' || file.type === 'image/png');
    }),
  imageSlice2: Yup.mixed()
    .required('Requerido')
    .test('type', 'Solo se aceptan formatos jpg y png', file => {
      return file && (file.type === 'image/jpg' || file.type === 'image/png');
    }),
  imageSlice3: Yup.mixed()
    .required('Requerido')
    .test('type', 'Solo se aceptan formatos jpg y png', file => {
      return file && (file.type === 'image/jpg' || file.type === 'image/png');
    }),
  textSlice1: Yup.string().required('Requerido'),
  textSlice2: Yup.string().required('Requerido'),
  textSlice3: Yup.string().required('Requerido'),
});

const objeto = {
  description: '<p>texto de prueba 111111</p>',
  imageSlice1: '',
  imageSlice2: '',
  imageSlice3: '',
  textSlice1: 'texto1',
  textSlice2: 'texto2',
  textSlice3: 'texto3',
};
/* let objeto = {};
 */
const isObjEmpty = obj => {
  return Object.keys(obj).length === 0;
};

const HomeForm = () => {
  let dispatch = useDispatch();

  const initialValues = {
    description: '<p>texto de prueba 111111</p>',
    imageSlice1: '',
    imageSlice2: '',
    imageSlice3: '',
    textSlice1: '',
    textSlice2: '',
    textSlice3: '',
  };
  return (
    <Formik
      initialValues={isObjEmpty(objeto) ? initialValues : objeto}
      validationSchema={SignupSchema}
      onSubmit={values => {
        dispatch(editSlides(values));
        successAlert();
      }}
    >
      {({ errors, touched }) => (
        <Form className="homeForm">
          <Heading m={4}>Modificar Home</Heading>

          <Field name="description">
            {({ field, form }) => (
              <FormControl
                id="description"
                name="description"
                isInvalid={form.errors.description && form.touched.description}
              >
                <CKEditor
                  id="description"
                  editor={ClassicEditor}
                  data={initialValues.description}
                  value={initialValues.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    form.setFieldValue('description', data);
                  }}
                />
                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="imageSlice1">
            {({ field, form }) => (
              <FormControl
                m={2}
                id="imageSlice1"
                isInvalid={form.errors.imageSlice1 && form.touched.imageSlice1}
              >
                <FormLabel>Foto de perfil</FormLabel>
                <input
                  id="imageSlice1"
                  name="imageSlice1"
                  type="file"
                  onChange={event => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    form.setFieldValue('imageSlice1', myFiles[0]);
                  }}
                />
                <FormErrorMessage>{form.errors.imageSlice1}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="textSlice1">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.textSlice1 && form.touched.textSlice1}
              >
                <FormLabel htmlFor="textSlice1">Texto de Slice</FormLabel>
                <Input {...field} id="textSlice1" placeholder="ingrese link" />
                <FormErrorMessage>{form.errors.textSlice1}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="imageSlice2">
            {({ field, form }) => (
              <FormControl
                m={2}
                id="imageSlice2"
                isInvalid={form.errors.imageSlice2 && form.touched.imageSlice2}
              >
                <FormLabel>Foto de perfil</FormLabel>
                <input
                  id="imageSlice2"
                  name="imageSlice2"
                  type="file"
                  onChange={event => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    form.setFieldValue('imageSlice2', myFiles[0]);
                  }}
                />
                <FormErrorMessage>{form.errors.imageSlice2}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="textSlice2">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.textSlice2 && form.touched.textSlice2}
              >
                <FormLabel htmlFor="textSlice2">Texto de Slice</FormLabel>
                <Input {...field} id="textSlice2" placeholder="ingrese link" />
                <FormErrorMessage>{form.errors.textSlice2}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="imageSlice3">
            {({ field, form }) => (
              <FormControl
                m={2}
                id="imageSlice3"
                isInvalid={form.errors.imageSlice3 && form.touched.imageSlice3}
              >
                <FormLabel>Foto de perfil</FormLabel>
                <input
                  id="imageSlice3"
                  name="imageSlice3"
                  type="file"
                  onChange={event => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    form.setFieldValue('imageSlice3', myFiles[0]);
                  }}
                />
                <FormErrorMessage>{form.errors.imageSlice3}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="textSlice3">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.textSlice3 && form.touched.textSlice3}
              >
                <FormLabel htmlFor="textSlice3">Texto de Slice</FormLabel>
                <Input {...field} id="textSlice3" placeholder="ingrese link" />
                <FormErrorMessage>{form.errors.textSlice3}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="teal" type="submit">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default HomeForm;
