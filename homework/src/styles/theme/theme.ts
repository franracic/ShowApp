import { extendTheme } from "@chakra-ui/react";
import "typeface-roboto";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { radii } from "./foundations/radii";

export default extendTheme({
  styles: {
    global: {
      body: {
        bg: "purpleDark",
      },
    },
  },
  fonts,
  colors,
  radii,
  components: {
    Card,
    Button,
  },
});
