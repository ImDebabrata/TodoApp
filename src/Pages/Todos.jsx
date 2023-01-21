import React, { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import TodoList from "../Components/TodoList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const todos = [
  { id: "sou", title: "Dummy1" },
  { id: 2, title: "Dummy2" },
  { id: 3, title: "Dummy3" },
  { id: 4, title: "Dummy4" },
  { id: 5, title: "Dummy5" },
  { id: 6, title: "Dummy6" },
  { id: 7, title: "Dummy7" },
  { id: 8, title: "Dummy8" },
];

const Todos = () => {
  const [characters, updateCharacters] = useState(todos);

  const handleOnDragEnd = (res) => {
    const items = Array.from(characters);
    const [reorderItem] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reorderItem);
    updateCharacters(items);
    // console.log("reorderItem:", reorderItem);
  };
  return (
    <Box>
      <Heading m={"20px 0"} size={"lg"}>
        Todo
      </Heading>
      <Flex justifyContent={"space-around"}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <Box
                w={"40%"}
                border={"1px solid black"}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Heading size={"md"}>Important</Heading>
                {characters.map((item, index) => {
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
        </DragDropContext>

        <Box w={"40%"} border={"1px solid black"}>
          <Heading size={"md"}>Low</Heading>
          {/* {todos.map((item) => {
            return <TodoList key={item.id} props={{ item, type: "green" }} />;
          })} */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Todos;
