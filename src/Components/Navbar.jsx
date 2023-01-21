import React from "react";
import { Flex, Spacer, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Flex p={"0 10px"} alignItems={"center"} h={"50px"} bg={"blue.500"}>
        <Heading size={"md"} color={"white"}>
          My Todo
        </Heading>
        <Spacer />
        <NavLink to={"/"}>
          <Text color={"white"} m={"5px"}>
            Login
          </Text>
        </NavLink>
        <NavLink to={"/signup"}>
          <Text color={"white"} m={"5px"}>
            Signup
          </Text>
        </NavLink>
        <NavLink to={"/todos"}>
          <Text color={"white"} m={"5px"}>
            Todo List
          </Text>
        </NavLink>
      </Flex>
    </nav>
  );
};

export default Navbar;
