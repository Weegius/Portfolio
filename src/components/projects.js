import React from "react";
import { Flex } from "@chakra-ui/react";
import ProjectCard from "./projectcard";


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
      <ProjectCard />
      <ProjectCard />
    </Flex>
  );
};
export default Projects;

