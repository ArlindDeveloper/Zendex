import { Box } from "@chakra-ui/react";
import About from "Components/About/About";
import Contact from "Components/Contact/Contact";
import Header from "Components/Header/Header";
import Mobile from "Components/Mobile/Mobile";
import Nav from "Components/Nav/Nav";

export default function Home() {
  return (
    <Box>
      <Nav />
      <Header />
      <About />
      <Contact />
      {/* <Mobile/> */}
    </Box>
  );
}
