import React from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import IconComponent from "./components/IconComponent";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import InitialTransition from "./components/transition";
import GrayBox from "./components/GrayBox";
import SideIcons from "./components/SideCons";
import SideCons from "./components/SideCons";
import RedBox from "./components/RedBox";

const App = () => {
  return (
    <>
      <Center 
      p={10}
      w={'100%'}
      h={'100vh'}
      // bg='green'
      >
        <RedBox />
      </Center>
    </>
  );
};

export default App;
