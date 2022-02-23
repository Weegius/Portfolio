import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
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
      <Flex h="100vh" w="100%" flexDir={["column", "column", "row", "row"]}>
        <Flex
          display={["flex", "flex", "none", "none"]}
          flexDir="row"
          alignSelf="center"
          pos="relative"
          mr={2}
          mb={[-12, 0, 0, 0]}
          justifyContent="space-between"
        >
          <IconComponent icon={AiFillGithub} />
          <IconComponent icon={AiFillLinkedin} />
          <IconComponent icon={AiOutlineInstagram} />
          <IconComponent icon={AiOutlineTwitter} />
        </Flex>

        <Flex w="100%" minH={"100%"} h="auto" pt={[0, 0, 50, 50]} p={50}>
          {/* -------------- Red Flex -------------- */}
          <Flex p={3} w={["100%", "100%", "60%", "60%"]} h="100%" bg="#f74239">
            <Flex
              p={3}
              justifyContent={"space-between"}
              flexDir={"column"}
              h="100%"
              w="100%"
              borderColor={"white"}
              borderWidth={1}
            >
              <Flex
                display={["flex", "flex", "none", "none"]}
                alignSelf="center"
                flexDir={"column"}
                fontSize={[70, 100, 20, 20, 1]}
              >
                <Text>Christian</Text>
                <Text mt={-10}>Thompson</Text>
              </Flex>
              <Flex alignSelf={"center"}>
                <Flex
                  pos="absolute"
                  alignSelf={"center"}
                  borderWidth={1}
                  borderColor={"white"}
                  mt={2}
                  ml={4}
                  w={[130, 165, 250, 250]}
                  h={[230, 250, 350, 350]}
                  display={["flex", "none", "flex", "flex"]}
                />
                {/*------Images------- */}
                <Image
                  src="./images/headshot.jpg"
                  alt="Headshot"
                  pos="relative"
                  alignSelf={"center"}
                  w={[140, 170, 250, 250]}
                  h={[230, 260, 350, 350]}
                  display={["flex", "none", "flex", "flex"]}
                />
              </Flex>

              <Flex flexDir={"column"} fontSize={[40, 40, 60, 60]}>
                <Text>Front End</Text>
                <Text ml={10} mt={-15}>
                  Web Developer
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* GRAY FLEX ------------------------------------ */}
          <Flex
            alignSelf="center"
            w="40%"
            h="100%"
            bg="#F5F5F5"
            flexDir="column"
            justifyContent="space-between"
            display={["none", "none", "flex", "flex"]}
          >
            <Flex
              alignSelf="center"
              flexDir="column"
              whiteSpace={'nowrap'}
              fontSize={[60, 60, 80, 100, 120]}
            >
              <Text>Christian</Text>
              <Text mt={[-20, -30, -50, -50, -20]}>Thompson</Text>
            </Flex>
            
            <Flex alignItems="center" flexDir="column">
              <MdOutlineDoubleArrow style={{ transform: "rotate(90deg)" }} />
              <Text>Scroll</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          alignSelf="center"
          pos="relative"
          ml={-10}
          mr={2}
          mt={250}
          h={200}
          justifyContent="space-between"
          display={["none", "none", "flex", "flex"]}
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
