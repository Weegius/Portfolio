import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <Flex
          p={3}
          justifyContent={"space-between"}
          flexDir={"column"}
          h="100%"
          w="100%"
          borderColor={"white"}
          borderWidth={1}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex alignSelf={"center"} flexDir="column">
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
                  mt={5}
                  ml={4}
                  w={[130, 165, 250, 270]}
                  h={[230, 250, 350, 400]}
                  display={["flex", "none", "flex", "flex"]}
                />
                {/*------Images------- */}
                <Image
                  src="./images/headshot.jpg"
                  alt="Headshot"
                  pos="relative"
                  alignSelf={"center"}
                  w={[140, 170, 250, 270]}
                  h={[230, 260, 350, 400]}
                  display={["flex", "none", "flex", "flex"]}
                />
              </Flex>

              <Flex
                flexDir={["none", "column", "none", "column"]}
                fontSize={[30, 60, 60, 60]}
                mt={[5, 10, 10, 0]}
              >
                <Text>Front End</Text>
                <Text ml={10} mt={-15}>
                  Web Developer
                </Text>
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
      </AnimatePresence>
    </>
  );
};

export default Home;
