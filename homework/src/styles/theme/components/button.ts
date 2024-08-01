import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    light: {
      borderRadius: "full",
      padding: "20px 50px",
      fontSize: "sm",
      background: "white",
      color: "purpleSecond",
      width: "fit-content",

      _hover: {
        background: "purpleLight",
        color: "white",
      },

      _disabled: {
        background: "purpleLight",
        color: "white",
      },
    },
    dark: {
      borderRadius: "full",
      background: "transparent",
      color: "white",
      _hover: {
        background: "purpleSecond",
      },
      _active: {
        background: "purpleSecond",
      },
    },
    disabled: {
      bg: "white",
      opacity: "50%",
      color: "purpleBase",
    },
  },
});
