import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

const initialField = {
  email: "",
  password: "",
};

const Login = () => {
  const [fieldInfo, setFieldInfo] = useState(initialField);
  const store = useSelector((store) => console.log(store));

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
      <Heading>Login</Heading>
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
          SignIn
        </Button>
      </form>
    </Box>
  );
};

export default Login;
