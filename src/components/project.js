import React from "react";
import { Box, Center, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Project = ({ title, description, github_url, live_url }) => {
  return (
    <Center mt={5}>
      <Box
        role={"group"}
        p={6}
        w={"330px"}
        bg="#F5F5F5"
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Stack pt={5} align={"center"}>
          <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text color={"gray.600"}>{description}</Text>
          </Stack>
        </Stack>
        <Center pt={5} justifyContent="space-around">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              direction={"row"}
              align={"center"}
              bg={"black"}
              color={"white"} 
              _hover={{ cursor: "pointer", bg: "#f74239" }}
              onClick={() => (window.location.href = github_url)}
            >
              Github
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              direction={"row"}
              align={"center"}
              bg={"black"}
              color={"white"}
              _hover={{ cursor: "pointer", bg: "#f74239" }}
              onClick={() => (window.location.href = live_url)}
            >
              Live
            </Button>
          </motion.div>
        </Center>
      </Box>
    </Center>
  );
};
export default Project;
