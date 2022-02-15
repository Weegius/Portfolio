import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./navbar";
import Home from "./home";


function App() {
  return (
    <Flex>
      <Flex  h="100vh" w="100%">
        <Home />
      </Flex>
      <Navbar />
    </Flex>
  );
}

export default App;
