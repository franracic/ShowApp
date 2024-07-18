"use client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { mutator } from "../../../../fetchers/mutators";
import { swrKeys } from "../../../../fetchers/swrKeys";

interface IRegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterFormInputs>();

  const router = useRouter();

  const { trigger, error: apiError } = useSWRMutation(
    swrKeys.register,
    mutator,
    {
      onSuccess: () => {
        router.push("/login");
      },
    }
  );

  const onRegister = async (data: IRegisterFormInputs) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    await trigger(data);
  };

  return (
    <>
      <Flex
        direction="column"
        gap={3}
        alignItems="center"
        color={"white"}
        p={4}
        border={"1px solid black"}
        borderRadius={"2xl"}
        boxShadow={"md"}
        bg={"whiteAlpha.100"}
        maxW={"700px"}
        w={"100%"}
      >
        <Heading as="h2">Register</Heading>
        {apiError && (
          <Alert status="error" colorScheme="red" variant="solid">
            <AlertIcon />
            <AlertTitle>{apiError.message}</AlertTitle>
            <AlertDescription>Try again!</AlertDescription>
          </Alert>
        )}
        <chakra.form
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={3}
          onSubmit={handleSubmit(onRegister)}
        >
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
            />
            {errors.password && (
              <Text color="red.500">{errors.password.message}</Text>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              type="password"
            />
            {errors.confirmPassword && (
              <Text color="red.500">{errors.confirmPassword.message}</Text>
            )}
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Sign up
          </Button>
        </chakra.form>
        <Text>
          Already have an account?{" "}
          <Link href="/login" color={"blue.100"} fontWeight={"bold"}>
            Login
          </Link>
        </Text>
      </Flex>
    </>
  );
};
