import React from "react";
import { Flex, Text, Link, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";

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
            <Flex flexDir="column" fontSize={[60, 80, 100, 120]}>
              <TypeWriterEffect
                startDelay={5000}
                cursorColor="#3F3D56"
                text="Christian Thompson"
                hideCursorAfterText={true}
                textStyle={{
                  lineHeight: "1",
                  marginTop: "50px",
                  marginLeft: "100px",
                }}
              />
            </Flex>
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
