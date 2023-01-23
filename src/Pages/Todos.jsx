import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  modifyImportantTodo,
  modifyNormalTodo,
} from "../Redux/TodoReducer/reducer";
import { Box, Heading, Flex, useDisclosure, Button } from "@chakra-ui/react";
import TodoList from "../Components/TodoList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoModal from "../Components/TodoModal";

const todos = [
  { id: "sou", title: "Dummy1" },
  { id: "df", title: "Dummy2" },
  { id: "sdf", title: "Dummy3" },
  { id: "po", title: "Dummy4" },
  { id: "sdp", title: "Dummy5" },
  { id: "lpo", title: "Dummy6" },
  { id: "poi", title: "Dummy7" },
  { id: "mlk", title: "Dummy8" },
];
const todos1 = [
  { id: "oijh", title: "Dummy9" },
  { id: "kji", title: "Dummy10" },
  { id: "sdfr", title: "Dummy11" },
  { id: "uyhb", title: "Dummy12" },
  { id: "b", title: "Dummy13" },
  { id: "kmn", title: "Dummy14" },
  { id: "qw", title: "Dummy15" },
  { id: "yt", title: "Dummy16" },
];

const Todos = () => {
  // const [importantTodo, setImportnctTodo] = useState(todos);
  // const [normalTodo, setNormalTodo] = useState(todos1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { importantTodo, normalTodo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleOnDragEnd = (res) => {
    const {
      destination: { droppableId: dest, index: destIndx },
      source: { droppableId: src, index: srcIndx },
    } = res;

    const sourceArr = Array.from(
      src === "important" ? importantTodo : normalTodo
    );
    const [reorderItem] = sourceArr.splice(srcIndx, 1);

    if (dest === src) {
      sourceArr.splice(destIndx, 0, reorderItem);
      src === "important"
        ? dispatch(modifyImportantTodo(sourceArr))
        : dispatch(modifyNormalTodo(sourceArr));
    } else {
      const targetArr = Array.from(
        dest === "important" ? importantTodo : normalTodo
      );
      targetArr.splice(destIndx, 0, reorderItem);
      if (src === "important") {
        dispatch(modifyImportantTodo(sourceArr));
        dispatch(modifyNormalTodo(targetArr));
      } else {
        dispatch(modifyImportantTodo(targetArr));
        dispatch(modifyNormalTodo(sourceArr));
      }
    }
    // const sourceArr=Array.from(dest==="important"?importantTodo:normalTodo)
    // const targetArr=Array.from(src==="important"?importantTodo:normalTodo)
    // const items = Array.from(importantTodo);
    // const [reorderItem] = items.splice(res.source.index, 1);
    // items.splice(res.destination.index, 0, reorderItem);
    // setImportnctTodo(items);
  };

  return (
    <Box>
      <Heading m={"20px 0"} size={"lg"}>
        Todo
      </Heading>
      <Button onClick={onOpen}>Add New Todo</Button>
      <TodoModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent={"space-around"}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="important">
            {(provided) => (
              <Box
                w={"40%"}
                border={"1px solid black"}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Heading size={"md"}>Important</Heading>
                {importantTodo.map((item, index) => {
                  return (
                    <TodoList
                      key={item.id}
                      props={{ item, type: "red", index }}
                    />
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
          <Droppable droppableId="normal">
            {(provided) => (
              <Box
                w={"40%"}
                border={"1px solid black"}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Heading size={"md"}>Normal</Heading>
                {normalTodo.map((item, index) => {
                  return (
                    <TodoList
                      key={item.id}
                      props={{ item, type: "green", index }}
                    />
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
        {/* <DragDropContext onDragEnd={handleOnDragEnd1}>
         
        </DragDropContext> */}
      </Flex>
    </Box>
  );
};

export default Todos;
