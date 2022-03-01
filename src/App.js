import React from "react";
import { Flex, Text} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import IconComponent from "./components/IconComponent";
import { motion } from "framer-motion"
import { Link, Outlet } from "react-router-dom";


const App = () => {
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
          <IconComponent icon={AiFillGithub} link="https://github.com/Weegius"/>
          <IconComponent icon={AiFillLinkedin} link="https://www.linkedin.com/in/christian-thompson-6a5366223/"/>
          <IconComponent icon={AiOutlineInstagram} link='https://www.instagram.com/christian42.0/'/>
          <IconComponent icon={AiOutlineTwitter} link="https://twitter.com/c_hrist_i_an"/>
        </Flex>

        <Flex w="100%" minH={"100%"} h="auto" pt={[0, 0, 50, 50]} p={50}>
          {/* -------------- Red Flex -------------- */}

          <Flex p={3} w={["100%", "100%", "60%", "60%"]} h="100%" bg="#f74239">
          <Outlet />
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
              whiteSpace={"nowrap"}
              fontSize={[60, 60, 80, 100, 120]}
            >
              <Text>Christian</Text>
              <Text mt={[-20, -30, -50, -50, -20]}>Thompson</Text>
            </Flex>

            <Flex
              justifyContent="space-around"
              flexDir="row"
              fontSize={20}
            >
              <motion.div whileHover={{ scale: 1.1 }} _hover={{ cursor: "pointer", color: "#f74239" }}>
                <Link to="projects">Projects</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/">Home</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <a href = "mailto: ChristianThompson1@hotmail.com" _hover={{ cursor: "pointer", color: "#f74239" }}>Connect</a>
              </motion.div>
              
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
          <IconComponent icon={AiFillGithub} link="https://github.com/Weegius"/>
          <IconComponent icon={AiFillLinkedin} link="https://www.linkedin.com/in/christian-thompson-6a5366223/"/>
          <IconComponent icon={AiOutlineInstagram} link='https://www.instagram.com/christian42.0/'/>
          <IconComponent icon={AiOutlineTwitter} link="https://twitter.com/c_hrist_i_an" />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
