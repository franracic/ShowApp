import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
    fontWeight: "500",
    fontSize: "14pt",
  },
  variants: {
    solid: {
      bg: "white",
      color: "purpleBase",
    },
    ghost: {
      color: "white",
      py: "8px",
      px: "14px",
      fontWeight: "500",
      alignContent: "left",
      _hover: {
        backgroundColor: "purpleBase",
        fontWeight: "700",
      },
    },
    disabled: {
      bg: "white",
      opacity: "50%",
      color: "purpleBase",
    },
  },
});
