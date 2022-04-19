import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <Flex
          // justifyContent={"space-between"}
          h="100%"
          w="100%"
          borderColor={"white"}
          borderWidth={1}
          justify="center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex alignSelf={"center"} flexDir="column">
              {/* ----------------- NAME -------------------- */}
              <Flex
                display={["flex", "flex", "none", "none"]}
                alignSelf="center"
                flexDir={"column"}
                fontSize={[70, 100, 20, 20, 1]}
                // bg="white"
              >
                <Text>Christian</Text>
                <Text mt={-10}>Thompson</Text>
              </Flex>

              <Flex alignSelf={"center"} mt={[0, 0, 0, 2]}>
                {/* ------------- WHITE BOX AROUND IMAGE -------------------- */}
                <Flex
                  pos="absolute"
                  alignSelf={"center"}
                  borderWidth={1}
                  borderColor={"white"}
                  mt={5}
                  ml={4}
                  w={[145, 165, 250, 270]}
                  h={[230, 250, 350, 400]}
                  display={["flex", "none", "flex", "flex"]}
                />
                {/*--------------------- IMAGE -------------------- */}
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
            </Flex>

            {/* --------------- BOTTOM TEXT ---------------- */}

            <Flex
              flexDir={["column", "row", "column", "row"]}
              fontSize={[45, 60, 60, 60]}
              mt={[5, 10, 10, 10]}
              textAlign="center"
              lineHeight={[10, 0, 0, 0]}
            >
              <Text>Front End</Text>
              <Text ml={[0, 0, 0, 0]} fontWeight={200}>
                Web Developer
              </Text>
            </Flex>
          </motion.div>
        </Flex>
      </AnimatePresence>
    </>
  );
};

export default Home;
