import { Flex, Box, Link, Button } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

export const NavBar: React.FC<unknown> = () => {
  const body = <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
      <Box ml={'auto'}>{body}</Box>
    </Flex>
  );
};
