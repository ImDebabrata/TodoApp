import React from "react";
import { Box, Text, Stack, Icon } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ props: { item, type } }) => {
  return (
    <Box m={2} p={1} bgColor={`${type}.500`}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        <Text textAlign={"left"} m={"5px 0"} color={"white"}>
          {item.title}
        </Text>
        <Icon as={MdDelete} boxSize={6} />
      </Stack>
    </Box>
  );
};

export default TodoList;
