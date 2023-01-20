import { Box, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReachLink } from "react-router-dom";

const AnimatedLink = ({ word, to }) => {
  const degrees = [23, -30, 18, -25, 38, -20, 45];
  const [hover, setHover] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      w={"100%"}
      // bg={"red"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={1}
        _hover={{
          cursor: "pointer",
          letterSpacing: "10px",
          color: "red",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        w={"auto"}
        h={"auto"}
      >
        {[...word].map((letter, index) => (
          <Link
            to={to}
            key={index}
            as={ReachLink}
            lineHeight="1em"
            style={{
              transform: hover ? `rotate(${degrees[index]}deg)` : "rotate(0deg",
              textDecoration: "none",
              WebkitTapHighlightColor: "transparent",
            }}
            transition="all 0.3s ease-out"
            textAlign="center"
          >
            {letter}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default AnimatedLink;
