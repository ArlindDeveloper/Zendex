import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container
      pt={{ base: "1rem", md: "2rem" }}
      minHeight={{ md: "calc(100vh - 72px)" }}
      bg="brand.100"
      maxW={"1350px"}
      id="home"
      mb="3rem"
    >
      <SimpleGrid
        alignItems={"center"}
        columns={{ base: 1, md: 2 }}
        spacing={10}
      >
        <Box>
          <Text
            mb="1.5rem"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight={900}
            as="h1"
          >
            Do you want to quickly file declarations for your containers? You do
            that with Zendex.
          </Text>
          <SimpleGrid
            width={{ base: "100%", md: "20rem" }}
            alignItems={"center"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: "2rem", md: 0 }}
          >
            <Link href="#about">
              <Button width={{ base: "100%", md: "unset" }} size="lg">
                About us
              </Button>
            </Link>
            <Box>
              <Link href="#contact">
                <Button width={{ base: "100%", md: "unset" }} size="lg">
                  Contact us
                </Button>
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
        <Box
          gridRow={{ base: 1, md: "inherit" }}
          display={"flex"}
          justifyContent="flex-end"
        >
          <Image
            pt={{ md: "2rem" }}
            objectFit="cover"
            height={{ base: "200px", md: "calc(100vh - 200px)" }}
            width="500px"
            src="/images/header.jpeg"
            alt="Dan Abramov"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Header;
