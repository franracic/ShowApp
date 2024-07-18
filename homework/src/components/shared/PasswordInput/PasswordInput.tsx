import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface IPasswordInputProps {
  disabled?: boolean;
  error?: string;
  register?: any;
}

export const PasswordInput = ({
  disabled,
  error,
  register,
}: IPasswordInputProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Password"
          disabled={disabled}
          {...register}
        />

        <InputRightElement width="4.5rem">
          <Button size="sm" onClick={handleClick} disabled={disabled}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && <Text color="red.500">{error}</Text>}
    </>
  );
};
