import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/InputField';
import Layout from '../components/Layout';
import { sendRequest } from '../tools/sendRequest';
import { toErrorMap } from '../utils/toErrorMap';

const Login: React.FC<{}> = () => {
  const router = useRouter();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          try {
            const response = await sendRequest(`http://localhost:4000/auth`, values);
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
            <InputField name="username" placeholder="username" label="Username" />
            <Box mt={4}>
              <InputField name="password" placeholder="password" label="Password" type="password" />
            </Box>
            <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Login;
