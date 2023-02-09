import React, { useState } from "react";
import { useJwt } from "react-jwt";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addImportantTodo,
  addNormalTodo,
  addTodo,
} from "../Redux/TodoReducer/reducer";

const initialState = {
  title: "",
  category: "",
};

const TodoModal = ({ isOpen, onClose, userID }) => {
  const [newTodo, setNewTodo] = useState(initialState);
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = () => {
    if (!newTodo.category || !newTodo.title) {
      alert("Please fill input");
    } else {
      // newTodo.category === "important"
      //   ? dispatch(
      //       addImportantTodo({ ...newTodo, userID: decodedToken?.userID })
      //     )
      //   : dispatch(addNormalTodo({ ...newTodo, userID: decodedToken?.userID }));
      dispatch(addTodo({ ...newTodo, token }));
      // console.log(newTodo);
    }
    onClose();
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={newTodo.title}
                onChange={handleChange}
                ref={initialRef}
                placeholder="Enter Title"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select
                name="category"
                value={newTodo.category}
                onChange={handleChange}
              >
                <option value={""}>Select Todo Catagory</option>
                <option value={"important"}>Important</option>
                <option value={"normal"}>Normal</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoModal;
