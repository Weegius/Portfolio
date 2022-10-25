import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const GrayBox = () => {
  return (
    <>
      <motion.div
        style={{ overflow: "hidden", width: "100%" }}
        initial={{ width: 0, opacity: 1 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        <Flex
          overflow={"hidden"}
          w="600px"
          display={["none", "none", "flex", "flex"]}
          h={"100.06%"}
          bg="#F5F5F5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            {/* <Flex flexDir="column" fontSize={[60, 80, 100, 120]} w="100%">
              <Text>Christian</Text>
              <Text mt={[-20, -30, -50, -50, -20]}>Thompson</Text>
            </Flex> */}
          </motion.div>

          {/* <Flex justifyContent="space-around" flexDir="row" fontSize={20}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/">Home</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                _hover={{ cursor: "pointer", color: "#f74239" }}
              >
                <Link to="projects">Projects</Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <a
                  href="mailto: ChristianThompson1@hotmail.com"
                  _hover={{ cursor: "pointer", color: "#f74239" }}
                >
                  Connect
                </a>
              </motion.div>
            </Flex> */}
        </Flex>
      </motion.div>
    </>
  );
};
export default GrayBox;
