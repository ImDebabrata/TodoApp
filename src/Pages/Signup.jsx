import React from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const initialField = {
  email: "",
  password: "",
};

const Signup = () => {
  const [fieldInfo, setFieldInfo] = useState(initialField);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFieldInfo({ ...fieldInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fieldInfo:", fieldInfo);
  };
  return (
    <Box
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
      m={"30px auto"}
      w={"350px"}
    >
      <Heading>Signup</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input name="email" onChange={handleInputChange} type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" onChange={handleInputChange} type="password" />
        </FormControl>
        <Button m={"10px 0"} w={"100%"} type="submit" colorScheme="blue">
          SignUp
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
