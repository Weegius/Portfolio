import React from "react";
import { Flex } from "@chakra-ui/react";
import VirtualCloset from "./virtualcloset";
import NewConnections from "./newconnections";


const Projects = () => {
  return (
    <Flex
    p={3}
    justifyContent={"space-between"}
    flexDir={"column"}
    h="100%"
    w="100%"
    borderColor={"white"}
    borderWidth={1}
    >
      <VirtualCloset />
      <NewConnections/>
    </Flex>
  );
};
export default Projects;

