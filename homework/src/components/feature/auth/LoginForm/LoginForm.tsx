"use client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { mutator } from "../../../../fetchers/mutators";
import { swrKeys } from "../../../../fetchers/swrKeys";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();
  const { trigger, error: apiError } = useSWRMutation(swrKeys.login, mutator, {
    onSuccess: () => {
      setLoggedIn(true);
    },
  });

  const onLogin = async (data: ILoginFormInputs) => {
    const response = await trigger(data);
    localStorage.setItem(
      "auth-header",
      JSON.stringify({
        client: response.authHeaders.client,
        token: response.authHeaders.token,
        uid: response.authHeaders.uid,
      })
    );
    mutate(swrKeys.currentUser, response.data, false);
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
        {loggedIn && (
          <Alert status="success" variant={"solid"}>
            You are logged in!
          </Alert>
        )}
        <Heading as="h2">Login</Heading>
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
          onSubmit={handleSubmit(onLogin)}
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
          <Button type="submit" colorScheme="blue">
            Log in
          </Button>
        </chakra.form>
        <Text>
          Don&apos;t have an account?{" "}
          <Link href="/register" color={"blue.100"} fontWeight={"bold"}>
            Register
          </Link>
        </Text>
      </Flex>
    </>
  );
};
