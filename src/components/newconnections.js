import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const NewConnections = () => {
  return (
    <Center>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg="#F5F5F5"
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Stack pt={5} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            New Connections
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text color={"gray.600"}>
              A way to get connected with people with similar hobbies
            </Text>
          </Stack>
        </Stack>
        <Center pt={5} justifyContent="space-around">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              direction={"row"}
              align={"center"}
              bg={"black"}
              color={"white"}
              _hover={{ cursor: "pointer", bg: "#f74239" }}
              onClick={()=>window.location.href="https://github.com/ACS-ABC/New-Connections"}
            >
              Github
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              direction={"row"}
              align={"center"}
              bg={"black"}
              color={"white"}
              _hover={{ cursor: "pointer", bg: "#f74239" }}
              // onClick={()=>window.location.href=}
            >
              Live
            </Button>
          </motion.div>
        </Center>
      </Box>
    </Center>
  );
};
export default NewConnections;
