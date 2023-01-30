import { Box, Container, Flex } from "@chakra-ui/react";
import Logo from "Components/Logo/Logo";
import { Link } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      boxShadow={"0 .5rem 1rem rgba(0,0,0,.5)"}
      position="sticky"
      top="0"
      bg="brand.100"
      zIndex={10}
    >
      <Container maxW={"1350px"}>
        <Flex fontWeight={600} alignItems="center" gap="5rem">
          <Link href="#home">
            <Logo />
          </Link>
          <Box display={{ md: "none" }} onClick={() => setOpen(!open)}>
            <HamburgerIcon w={8} h={8} />
          </Box>
          <Box
            color={{ base: "brand.100", md: "white" }}
            boxShadow={{ base: "0 .5rem 1rem rgba(0,0,0,.15)", md: "unset" }}
            transition="all 0.25s ease-in-out"
            transform={`translateX(${open ? "0px" : "200px"})`}
            right={{ base: 0, md: "unset" }}
            top={{ base: 0, md: "unset" }}
            height={{ base: "100vh", md: "unset" }}
            width={{ base: "200px", md: "unset" }}
            bg={{ base: "white", md: "unset" }}
            position={{ base: "fixed", md: "relative" }}
            display={{ base: "block", md: "flex" }}
            gap={{ md: "25px" }}
          >
            <Flex
              display={{ md: "none" }}
              justifyContent={"flex-end"}
              alignItems="center"
              p="1rem 1.25rem"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </Flex>
            <Box
              onClick={() => setOpen(false)}
              p={{ base: "1.25rem", md: "unset" }}
            >
              <Link href="#home">Home</Link>
            </Box>
            <Box
              onClick={() => setOpen(false)}
              p={{ base: "1.25rem", md: "unset" }}
            >
              <Link href="#about">About us</Link>
            </Box>
            <Box
              onClick={() => setOpen(false)}
              p={{ base: "1.25rem", md: "unset" }}
            >
              <Link href="#contact">Contact us</Link>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
