import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/actions";
import { ChakraProvider, Box, Input, Text, Button } from "@chakra-ui/react";
import Item from "../components/Item";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [type, setType] = useState("");
  const onClickHandler = () => {
    if (type === "") {
      return;
    }
    const addtodo = {
      id: new Date().getTime(),
      todo: type,
    };
    dispatch(addItem(addtodo));
    setType("");
  };
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          marginTop="100px"
          marginBottom="30px"
          alignItems="center"
          justifyContent="space-between"
          height="150px"
          width="300px"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Add item in list
          </Text>
          <Input
            type="text"
            value={type}
            errorBorderColor="red.300"
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter here"
          />
          <Button
            disabled={type === ""}
            onClick={onClickHandler}
            marginTop="3"
            colorScheme="teal"
            size="lg"
          >
            Add Items
          </Button>
        </Box>
        {items.map((item) => (
          <Item key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default Home;
