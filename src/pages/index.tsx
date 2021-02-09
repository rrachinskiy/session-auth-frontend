import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { sendRequest } from '../tools/sendRequest';

const Index = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      sendRequest('http://localhost:4000/me', null, 'GET').then(user => {
        setUser(user);
      });
    } catch (err) {
      setUser(null);
    }
  }, []);
  return (
    <Layout>
      <Text fontSize="25px">
        {!user ? 'Welcome to our site' : `Welcome, ${user.username}! Nice to meet you!`}
      </Text>
    </Layout>
  );
};
export default Index;
