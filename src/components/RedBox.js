import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import IconComponent from "./IconComponent";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import InitialTransition from "./transition";
import GrayBox from "./GrayBox";

const RedBox = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{
            scale: [1.5, 0.85],
          }}
          transition={{ duration: 2 }}
        >
          <Flex
            w={["400px", "700px", "800px", "1000px", "1550px", "1800px"]}
            h={"100vh"}
            bg="#f74239"
            justify={"right"}
          >
            {/* <Flex
              display={["flex", "flex", "none", "none"]}
              flexDir="row"
              alignSelf="center"
              pos="relative"
              mr={2}
              mb={[-12, 0, 0, 0]}
              justifyContent="space-between"
            >
              <IconComponent
                icon={AiFillGithub}
                link="https://github.com/Weegius"
              />
              <IconComponent
                icon={AiFillLinkedin}
                link="https://www.linkedin.com/in/christian-thompson-6a5366223/"
              />
              <IconComponent
                icon={AiOutlineInstagram}
                link="https://www.instagram.com/christian42.0/"
              />
              <IconComponent
                icon={AiOutlineTwitter}
                link="https://twitter.com/c_hrist_i_an"
              />
            </Flex>

            <Flex w="100%" minH={"100%"} h="auto" pt={[0, 0, 50, 50]} p={50}>

              <Flex
                p={3}
                w={["100%", "100%", "60%", "60%"]}
                h="100%"
                bg="#f74239"
              >
                <Outlet />
              </Flex>
            </Flex> */}
            <GrayBox />
          </Flex>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RedBox;
