import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Project from "../components/project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.bettrdash.eliaswambugu.com/v1/api/projects?key=5124dcf0-032f-11ed-8d7c-0fdc20fad355"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);
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
            overflowY="auto"
            flexDir={"column"}
            h="100%"
            w="100%"
            borderColor={"white"}
            borderWidth={1}
          >
            {projects.map((project, index) => (
              <Flex justifyContent={index % 2 === 0 ? "left" : "right"}>
                <Project
                  key={index}
                  title={project.name}
                  description={project.description}
                  live_url={project.live_url}
                  github_url={project.github_url}
                />
              </Flex>
            ))}
          </Flex>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default Projects;
