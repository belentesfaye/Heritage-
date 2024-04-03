import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';

function SignIn() {
  const [isSignInVisible, setSignInVisible] = useState(false);
  const toast = useToast();

  const handleSignIn = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Implement your sign in logic here
    toast({
      title: "Sign in attempt",
      description: "We're logging you in...",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Button onClick={() => setSignInVisible(!isSignInVisible)}>Toggle Sign In</Button>
      {isSignInVisible && (
        <Box p="4" borderWidth="1px" borderRadius="lg" overflow="hidden" style={{ position: 'relative', maxWidth: '400px', margin: '20px auto' }}>
          <form onSubmit={handleSignIn}>
            <FormControl id="username" isRequired style={{ marginBottom: '20px' }}>
              <FormLabel style={{ color: '#999898', fontWeight: 'bold' }}>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password" isRequired style={{ marginBottom: '20px' }}>
              <FormLabel style={{ color: '#999898', fontWeight: 'bold' }}>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button type="submit" colorScheme="teal" style={{ display: 'block', width: '100%' }}>
              Sign In
            </Button>
          </form>
        </Box>
      )}
    </div>
  );
}

export default SignIn;