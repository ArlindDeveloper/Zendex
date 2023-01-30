import { extendTheme } from "@chakra-ui/react";
import ButtonStyle from "./buttonTheme";

const theme = extendTheme({
  components: {
    Button: ButtonStyle,
  },

  colors: {
    brand: {
      100: "#333333",
      200: "#2493ba",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "brand.100",
        color: "white",
      },
    },
  },
});

export default theme;
