import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/InputField';
import Layout from '../components/Layout';
import { sendRequest } from '../tools/sendRequest';
import { toErrorMap } from '../utils/toErrorMap';

export const Register: React.FC<unknown> = () => {
  const router = useRouter();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          try {
            const response = await sendRequest(`http://localhost:4000/register`, values);
            if (response.errors) {
              setErrors(toErrorMap(response.errors));
            } else {
              router.push('/');
            }
          } catch (err) {}
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="username" placeholder="Username" label="Username" />
            <Box mt={4}>
              <InputField name="password" placeholder="password" label="Password" type="password" />
            </Box>
            <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Register;
