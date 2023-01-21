import React from "react";
import { Box, Text, Stack, Icon } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdDelete } from "react-icons/md";

const TodoList = ({ props: { item, type, index } }) => {
  return (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <Box
          m={2}
          p={1}
          bgColor={`${type}.500`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          props={{ item, type: "red" }}
        >
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
      )}
    </Draggable>
  );
};

export default TodoList;
