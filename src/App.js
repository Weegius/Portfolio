import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function App() {
  return (
    <Flex>
      <Flex p={30} h="100vh" w="100%">
        <Flex p={3} w="60%" h="100%" bg="#FE5850">
          <Flex
            p={3}
            justifyContent={"space-between"}
            flexDir={"column"}
            h="100%"
            w="100%"
            borderColor={"white"}
            borderWidth={1}
          >
            <Flex alignSelf={"center"} bg={"red"} w={300} h={450} />

            <Flex flexDir={"column"} fontSize="6xl">
              <Text>Front End</Text>
              <Text ml={10}>Web Developer</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignSelf={"center"}
          w="40%"
          h="100%"
          bg="gray.100"
          flexDir={"column"}
          fontSize={80}
        >
          <Flex alignSelf='center' flexDir={'column'}>
            <Text>Christian</Text>
            <Text mt={-10}>Thompson</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
