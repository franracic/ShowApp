"use client";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  chakra,
  useToast,
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
    formState: { errors, isSubmitting },
  } = useForm<IRegisterFormInputs>();

  const router = useRouter();

  const toast = useToast();

  const { trigger, error: apiError } = useSWRMutation(
    swrKeys.register,
    mutator,
    {
      onSuccess: () => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
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
      <Card
        gap={3}
        alignItems="center"
        p={4}
        maxW={"700px"}
        w={"100%"}
        h={"fit-content"}
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
              disabled={isSubmitting}
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <PasswordInput
              register={{
                ...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }),
              }}
              disabled={isSubmitting}
              error={errors.password?.message}
            />
            <FormHelperText>Min. 6 characters</FormHelperText>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <PasswordInput
              register={{
                ...register("confirmPassword", {
                  required: "Confirm Password is required",
                }),
              }}
              disabled={isSubmitting}
              error={errors.confirmPassword?.message}
            />
          </FormControl>

          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Sign up
          </Button>
        </chakra.form>
        <Text>
          Already have an account?{" "}
          <Link href="/login" color={"blue.100"} fontWeight={"bold"}>
            Login
          </Link>
        </Text>
      </Card>
    </>
  );
};
