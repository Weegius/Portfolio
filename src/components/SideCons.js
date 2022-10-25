import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import IconComponent from "./IconComponent";
import { Flex } from "@chakra-ui/react";

const SideCons = () => {
  return (
    <Flex
      flexDir="column"
      
    >
      <IconComponent icon={AiFillGithub} link="https://github.com/Weegius" />
      <IconComponent
        icon={AiFillLinkedin}
        link="https://www.linkedin.com/in/christian-thompson-6a5366223/"
      />
      <IconComponent
        icon={AiOutlineInstagram}
        link="https://www.instagram.com/christian42.0/"
      />
      <IconComponent
        icon={AiOutlineTwitter}
        link="https://twitter.com/c_hrist_i_an"
      />
    </Flex>
  );
};
export default SideCons;
