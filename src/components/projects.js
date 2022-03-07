import React from "react";
import { Flex } from "@chakra-ui/react";
import VirtualCloset from "./virtualcloset";
import NewConnections from "./newconnections";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Flex
            p={3}
            justifyContent={"space-between"}
            flexDir={"column"}
            h="100%"
            w="100%"
            borderColor={"white"}
            borderWidth={1}
          >
            <Flex>
              <VirtualCloset />
            </Flex>
            <Flex justifyContent={"right"}>
              <NewConnections />
            </Flex>
          </Flex>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default Projects;
