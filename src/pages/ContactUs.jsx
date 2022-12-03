import { EmailIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const ContactUs = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Submitted Successfully",
      description:
        "Thanks for sharing details. We will get back to you shortly",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="20px">
        Contact Us
      </Text>
      <Flex>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<InfoIcon color="teal" />}
                />
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<InfoIcon color="teal" />}
                />
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement children={<EmailIcon color="teal" />} />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>PhoneNumber</FormLabel>
              <InputGroup>
                <PhoneInput
                  inputProps={{
                    required: true,
                  }}
                  country={"in"}
                  name="phone"
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                />
              </InputGroup>
            </FormControl>

            <Button type="submit">Submit</Button>
            <FormControl>
              <FormHelperText>
                We'll never share your email and contact no.
              </FormHelperText>
            </FormControl>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
