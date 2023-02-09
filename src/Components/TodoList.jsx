import React from "react";
import { Box, Text, Stack, Icon } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../Redux/TodoReducer/reducer";

const TodoList = ({ props: { item, type, index } }) => {
  const dispatch = useDispatch();
  // const { token } = useSelector((store) => store.auth);
  const handleDelete = () => {
    dispatch(deleteTodo({ ...item, index }));
  };
  return (
    <Draggable key={item._id} draggableId={item._id.toString()} index={index}>
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
            <Icon onClick={handleDelete} as={MdDelete} boxSize={6} />
          </Stack>
        </Box>
      )}
    </Draggable>
  );
};

export default TodoList;
