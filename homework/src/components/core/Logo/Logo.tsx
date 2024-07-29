import { ComponentProps } from "react";

import Logo from "@/assets/logo.svg";
import { Image } from "@chakra-ui/next-js";

interface LogoImageProps
  extends Omit<ComponentProps<typeof Image>, "src" | "alt"> {}

export const LogoImage = (props: LogoImageProps) => {
  return <Image src={Logo} alt="Logo" {...props} />;
};
