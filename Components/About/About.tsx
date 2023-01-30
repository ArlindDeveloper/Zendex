import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const About = () => {
  return (
    <Box
      py={{ base: "5rem" }}
      minHeight={{ md: "100vh" }}
      bg="white"
      color="brand.100"
      // mt="5rem"
      id="about"
    >
      <Container maxW={"1350px"}>
        <SimpleGrid
          width="100%"
          alignItems={"center"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <Box
            gridRow={{ base: 2, md: "inherit" }}
            display={"flex"}
            justifyContent="flex-start"
          >
            <Image
              objectFit="cover"
              height={{ base: "250px", md: "calc(100vh - 300px)" }}
              width="500px"
              src="/images/port.png"
              alt="Dan Abramov"
            />
          </Box>
          <Box>
            <Text
              // textDecoration={"underline"}
              // textDecorationColor="brand.200"
              mb="1.5rem"
              fontSize="5xl"
              fontWeight={900}
              as="h2"
              color="brand.200"
            >
              About us
            </Text>
            <Text mb="2rem" fontWeight={300} as="p">
              Adipisicing enim in aliqua est fugiat enim ullamco commodo sit et
              sunt. Consequat minim magna elit aute consequat ut consequat
              irure. Duis eu enim enim consectetur nisi consectetur aliquip
              nulla mollit culpa labore. In ut voluptate tempor duis deserunt
              magna enim excepteur ad reprehenderit deserunt reprehenderit.
            </Text>

            <Text fontWeight={300} as="p">
              Adipisicing enim in aliqua est fugiat enim ullamco commodo sit et
              sunt. Consequat minim magna elit aute consequat ut consequat
              irure. Duis eu enim enim consectetur nisi consectetur aliquip
              nulla mollit culpa labore. In ut voluptate tempor duis deserunt
              magna enim excepteur ad reprehenderit deserunt reprehenderit.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;
