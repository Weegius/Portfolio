import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import AnimatedLink from "./Links";

const GrayBox = () => {
  return (
    <>
      {/* NAME ---------------------------------- */}
      <motion.div
        style={{ overflow: "hidden", width: "100%" }}
        initial={{ width: 0, opacity: 1 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        <Flex
          overflow={"hidden"}
          w="615px"
          display={["none", "none", "flex", "flex"]}
          h={"100.06%"}
          bg="#F5F5F5"
          flexDir={"column"}
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

          <Spacer />

          {/* BUTTONS TO OTHER PAGES ------------------------- */}
          <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: .5, delay: 8 }}
          >
            <Flex
              flexDir="row"
              fontSize={25}
              justify={"center"}
              justifyContent="space-evenly"
            >
              <AnimatedLink word={"Home"} to={"/"} />
              <AnimatedLink word={"Projects"} to={"projects"} />
              <AnimatedLink word={"Connect"} to={"connect"} />
            </Flex>
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
};
export default GrayBox;
