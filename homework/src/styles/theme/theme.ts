import { extendTheme } from "@chakra-ui/react";
import "typeface-roboto";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Input } from "./components/input";
import { Modal } from "./components/modal";
import { Progress } from "./components/progress";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { radii } from "./foundations/radii";

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "purpleDark",
        color: "white",
        fontFamily: "Roboto, sans-serif",
      },
    },
  },
  fonts,
  colors,
  radii,
  components: {
    Card,
    Button,
    Input,
    Modal,
    Progress,
  },
});
