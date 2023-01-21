import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import TodoList from "../Components/TodoList";

const todos = [
  { id: 1, title: "Dummy1" },
  { id: 2, title: "Dummy2" },
  { id: 3, title: "Dummy3" },
  { id: 4, title: "Dummy4" },
  { id: 5, title: "Dummy5" },
  { id: 6, title: "Dummy6" },
  { id: 7, title: "Dummy7" },
  { id: 8, title: "Dummy8" },
];

const Todos = () => {
  return (
    <Box>
      <Heading m={"20px 0"} size={"lg"}>
        Todo
      </Heading>
      <Flex justifyContent={"space-around"}>
        <Box w={"40%"} border={"1px solid black"}>
          <Heading size={"md"}>Important</Heading>
          {todos.map((item) => {
            return <TodoList key={item.id} props={{ item, type: "red" }} />;
          })}
        </Box>
        <Box w={"40%"} border={"1px solid black"}>
          <Heading size={"md"}>Low</Heading>
          {todos.map((item) => {
            return <TodoList key={item.id} props={{ item, type: "green" }} />;
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Todos;
