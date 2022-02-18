import React from "react";
import { Flex, Text, Image} from "@chakra-ui/react";

function App() {
  return (
    <Flex>
      <Flex p={50} h="100vh" w="100%">
        <Flex p={3} w="60%" h="100%" bg="#f74239">
          <Flex
            p={3}
            justifyContent={"space-between"}
            flexDir={"column"}
            h="100%"
            w="100%"
            borderColor={"white"}
            borderWidth={1}
          >
            <Flex alignSelf={"center"} w={300} h={450}>
              <Flex
                pos="absolute"
                alignSelf={"center"}
                borderWidth={1}
                borderColor={'white'}
                mt={8}
                ml={4}
                w={300}
                h={450}
              />
              <Image
                src="./images/headshot.jpg"
                alt="Headshot"
                pos="relative"
                alignSelf={"center"}
                // bg="red.900"
                w={300}
                h={450}
                // boxSize='100%'
              />
            </Flex>
            <Flex flexDir={"column"} fontSize={80}>
              <Text>Front End</Text>
              <Text ml={10}>Web Developer</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignSelf={"center"}
          w="40%"
          h="100%"
          bg="#F5F5F5"
          flexDir={"column"}
          fontSize={120}
        >
          <Flex alignSelf="center" flexDir={"column"}>
            <Text>Christian</Text>
            <Text mt={-10}>Thompson</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
