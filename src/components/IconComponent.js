import React from "react";
import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion"

const IconComponent = ({icon}) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Icon 
        as={icon} 
        w={45} 
        h={45} 
        _hover={{ cursor: "pointer", color: "#f74239" }} 
      /> 
    </motion.div>

  )
};
export default IconComponent;
