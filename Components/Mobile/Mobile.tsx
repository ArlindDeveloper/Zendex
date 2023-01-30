import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Mobile = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      position={"fixed"}
      bg="brand.200"
      right={0}
      bottom={0}
      width="50px"
      height="50px"
    >
      <ArrowDownIcon w={7} height={7} />
    </Flex>
  );
};

export default Mobile;
