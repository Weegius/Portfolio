import React from "react";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import GrayBox from "./GrayBox";

const RedBox = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{
            scale: [1.5, 1],
          }}
          transition={{ duration: 2 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Flex
            w={["100%", "100%", "100%", "100%"]}
            h={"100%"}
            bg="#f74239"
            justify={"right"}
          >
            {/* <Flex w="100%" minH={"100%"} h="auto" pt={[0, 0, 50, 50]} p={50}> */}
            <Flex
              p={3}
              w={["100%", "100%", "36%", "57%"]}
              h="100%"
              bg="#f74239"
            >
              <Outlet />
            </Flex>
            {/* </Flex> */}
            <GrayBox />
          </Flex>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RedBox;
