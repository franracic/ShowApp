import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);

const baseStyle = {
  container: {
    borderRadius: "containerRadius",
  },
};

const variants = {
  primary: {
    container: {
      backgroundColor: "purpleBase",
      color: "white",
    },
  },
  secondary: {
    container: {
      backgroundColor: "white",
      color: "purpleBase",
    },
  },
  dark: {
    container: {
      backgroundColor: "purpleDark",
      color: "purpleBase",
    },
  },
};

const defaultProps = {
  variant: "primary" as const,
};

export const Card = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps,
});
