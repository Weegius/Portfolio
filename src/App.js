import React from "react";
import { Flex, Text, Image, } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdOutlineDoubleArrow } from "react-icons/md";
import IconComponent from "./IconComponent";

function App() {
  return (
    <>
      <Flex h="100vh" w="100%">
        <Flex w="100%" h="100%" p={50}>
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
                  borderColor={"white"}
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
                  w={300}
                  h={450}
                />
              </Flex>
              <Flex flexDir={"column"} fontSize={80}>
                <Text>Front End</Text>
                <Text ml={10}>Web Developer</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            alignSelf="center"
            w="40%"
            h="100%"
            bg="#F5F5F5"
            flexDir={"column"}
            justifyContent="space-between"
          >
            <Flex alignSelf="center" flexDir={"column"} fontSize={120}>
              <Text>Christian</Text>
              <Text mt={-10}>Thompson</Text>
            </Flex>
            <Flex alignItems="center" flexDir="column">
              <MdOutlineDoubleArrow style={{ transform: "rotate(90deg)" }} />
              <Text>Scroll</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          // w="100%"
          flexDir="column"
          alignSelf="center"
          pos="relative"
          ml={-10}
          mr={2}
          mt={250}
          h={200}
          justifyContent="space-between"
        >
          <IconComponent icon={AiFillGithub} />
          <IconComponent icon={AiFillLinkedin} />
          <IconComponent icon={AiOutlineInstagram} />
          <IconComponent icon={AiOutlineTwitter} />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
