import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Text,
  Textarea,
  Input,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box pt="5rem" id="contact">
      <Container maxW={"1350px"}>
        <SimpleGrid
          width="100%"
          height={{ md: "500px" }}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          pb={{ md: "2rem" }}
        >
          <Box
            pr={{ md: "2rem" }}
            borderRight={{ md: "5px solid" }}
            borderRightColor="white"
          >
            <Text
              width={{ md: "35rem" }}
              mb="1.5rem"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight={900}
              as="h2"
            >
              Contact us
            </Text>
            <form>
              <SimpleGrid
                mb="2rem"
                width="100%"
                alignItems={"center"}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 7, md: 10 }}
              >
                <Input
                  required
                  size={{ base: "lg", md: "md" }}
                  placeholder="Name"
                />
                <Input
                  type="email"
                  required
                  size={{ base: "lg", md: "md" }}
                  placeholder="Email"
                />
              </SimpleGrid>
              <Textarea required rows={7} placeholder="Message" />

              <Button
                type="submit"
                width={{ base: "100%", md: "unset" }}
                mt="2rem"
                size="lg"
              >
                Submit
              </Button>
            </form>
          </Box>
          <Box>
            <Text
              width={{ md: "35rem" }}
              mb="1.5rem"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight={900}
              as="h2"
            >
              Connect with us
            </Text>

            <SimpleGrid
              columns={{ base: 1, md: 4 }}
              spacing={{ base: 7, md: 10 }}
            >
              <Link target="_blank" href="tel:+0643223915">
                <Flex
                  alignItems={"center"}
                  justifyContent="center"
                  bg="brand.200"
                  width={{ base: "100%", md: "100px" }}
                  height="75px"
                >
                  <PhoneIcon w={7} h={7} />
                </Flex>
              </Link>
              <Link target="_blank" href="mailto:arlindM@live.nl">
                <Flex
                  alignItems={"center"}
                  justifyContent="center"
                  bg="brand.200"
                  width={{ base: "100%", md: "100px" }}
                  height="75px"
                >
                  <EmailIcon w={7} h={7} />
                </Flex>
              </Link>
              <Link
                target="_blank"
                href="https://www.google.nl/maps/place/Stellendamhof+6,+3086+ZB+Rotterdam/@51.8737458,4.4709289,17z/data=!3m1!4b1!4m6!3m5!1s0x47c4338b4f93a07b:0xd3a08d686712f59b!8m2!3d51.8737426!4d4.4754082!16s%2Fg%2F11c22slkj7"
              >
                <Flex
                  alignItems={"center"}
                  justifyContent="center"
                  bg="brand.200"
                  width={{ base: "100%", md: "100px" }}
                  height="75px"
                >
                  <Icon
                    height="1.75rem"
                    width="1.75rem"
                    color="white"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                  </Icon>
                </Flex>
              </Link>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
