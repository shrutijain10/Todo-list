import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { editItem } from "../redux/actions";

const EditModal = ({ todo, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editValue, setEditValue] = useState(todo);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(editItem({ id: id, todo: editValue }));
    onClose();
  };

  const handleClose = () => {
    setEditValue(todo);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        <EditIcon />
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Type here to edit</FormLabel>
              <Input
                // ref={initialRef}
                placeholder="Edit"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
