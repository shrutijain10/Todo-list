import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Text, Button } from "@chakra-ui/react";
import EditModal from "./EditModal";

const Item = ({ item, deleteItem }) => {
  return (
    <Box
      width={{ base: "95%", sm: "80%", md: "60%", lg: "40%" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      key={item.id}
      padding="2"
      paddingLeft="4"
      marginBottom="2"
      background="teal.400"
      borderRadius="10px"
    >
      <Text fontSize="xl" color="black.500">
        {item.todo}
      </Text>
      <Box>
        <EditModal todo={item.todo} id={item.id} />
        <Button onClick={() => deleteItem(item.id)} variant="ghost">
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
