import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1.05, 1] }}
          transition={{ duration: 1.5, delay: 3 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Box
            h="100%"
            w="100%"
            borderColor={"white"}
            borderWidth={1}
            // justify="center"
            // marginRight={15}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Flex alignSelf={"center"} flexDir="column">
                {/* ----------------- NAME -------------------- */}
                {/* <Flex
                display={["flex", "flex", "none", "none"]}
                alignSelf="center"
                flexDir={"column"}
                fontSize={[70, 100, 20, 20, 1]}
                // bg="white"
              >
                <Text>Christian</Text>
                <Text mt={-10}>Thompson</Text>
              </Flex> */}

                <Flex alignSelf={"center"} mt={[0, 0, 0, 2]}>
                  {/* ------------- WHITE BOX AROUND IMAGE -------------------- */}
                  {/* <Flex
                  pos="absolute"
                  alignSelf={"center"}
                  borderWidth={1}
                  borderColor={"white"}
                  mt={5}
                  ml={4}
                  w={[145, 165, 250, 230]}
                  h={[230, 250, 350, 340]}
                  display={["flex", "none", "flex", "flex"]}
                /> */}
                  {/*--------------------- IMAGE -------------------- */}
                  {/* <Image
                  src="./images/headshot.jpg"
                  alt="Headshot"
                  pos="relative"
                  alignSelf={"center"}
                  w={[140, 170, 250, 230]}
                  h={[230, 260, 350, 340]}
                  display={["flex", "none", "flex", "flex"]}
                /> */}
                </Flex>
              </Flex>

              {/* --------------- BOTTOM TEXT ---------------- */}

              {/* <Flex
              // flexDir={["column", "row", "column", "row"]}
              fontSize={[45, 60, 60, 60]}
              mt={[5, 10, 10, 20]} 
              lineHeight={[10, 0, 0, 0]}
              // alignItems={"flex-end"}
              
              
            >
              <Text alignSelf="center">Front End</Text>
              <Flex
                w={25}
                h={25}
                rounded={50}
                border="2px"
                color={"white"}
                ml={3}
                mr={3}
                display={["none", "none", "none", "flex"]}
              />
              <Text alignSelf="center" ml={[0, 0, 0, 0]} fontWeight={200}>
                Web Developer
              </Text>

            </Flex> */}
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
