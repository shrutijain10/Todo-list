import { Flex, Show, Text, IconButton, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <Flex
      justifyContent="space-between"
      p="20px 50px"
      backgroundColor="gray.200"
      pos="sticky"
      top="0px"
      marginBottom="20px"
      zIndex="200"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        paddingTop={{ base: "5px", md: "0px" }}
      >
        Task Manager
      </Text>
      <Flex flexDirection="column" justifyContent="center" alignItems="end">
        <Show breakpoint="(max-width: 48em)">
          <IconButton
            onClick={() => setShowNav(!showNav)}
            colorScheme="teal"
            aria-label="Call Segun"
            size="md"
            icon={<HamburgerIcon />}
          />
        </Show>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="end"
          paddingLeft="20px"
          display={
            showNav
              ? { base: "flex", md: "block" }
              : { base: "none", md: "block" }
          }
          paddingTop={{ base: "10px", md: "0" }}
        >
          <Button
            variant="link"
            colorScheme="teal"
            fontSize="xl"
            marginRight={{ md: "20px" }}
            onClick={() => setShowNav(false)}
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            variant="link"
            colorScheme="teal"
            fontSize="xl"
            marginRight={{ md: "20px" }}
            marginTop={{ base: "5px", md: "0" }}
            onClick={() => setShowNav(false)}
          >
            <Link to="/about">About</Link>
          </Button>
          <Button
            variant="link"
            colorScheme="teal"
            fontSize="xl"
            marginTop={{ base: "5px", md: "0" }}
            onClick={() => setShowNav(false)}
          >
            <Link to="contact">Contact Us</Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
