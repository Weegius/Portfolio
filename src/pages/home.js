import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
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
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Flex alignSelf={"center"} flexDir="column" justify={"center"}>
                {/*--------------------- IMAGE -------------------- */}

                {/* <Flex alignSelf={"center"} mt={[0, 0, 0, 2]}>
                  <Image
                    src="./images/headshot.jpg"
                    alt="Headshot"
                    pos="relative"
                    alignSelf={"center"}
                    w={[140, 170, 250, 230]}
                    h={[230, 260, 350, 340]}
                    display={["flex", "none", "flex", "flex"]}
                  />
                </Flex> */}
              </Flex>

              {/* --------------- BOTTOM TEXT ---------------- */}

              {/* <Box
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
              </Box> */}
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
