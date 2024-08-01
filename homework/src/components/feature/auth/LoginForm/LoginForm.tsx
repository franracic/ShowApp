"use client";
import { LogoImage } from "@/components/core/Logo/Logo";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import {
  Button,
  Card,
  CardBody,
  chakra,
  FormControl,
  FormErrorMessage,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdPerson } from "react-icons/md";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { mutator } from "../../../../fetchers/mutators";
import { swrKeys } from "../../../../fetchers/swrKeys";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormInputs>();

  const { trigger, error: apiError } = useSWRMutation(swrKeys.login, mutator, {
    onSuccess: () => {
      toast({
        title: "Logged in.",
        description: "Redirecting...",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
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
      <Card p={8} bg={"purpleSecond"}>
        <CardBody>
          <VStack spacing={0}>
            <HStack justifyContent="center" marginBottom={"50px"}>
              <LogoImage width={200} />
            </HStack>
            <chakra.form
              onSubmit={handleSubmit(onLogin)}
              data-testid="login-form"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <VStack spacing={8}>
                <FormControl isRequired isInvalid={!!errors.email}>
                  <InputGroup variant="dark">
                    <InputLeftElement pointerEvents="none">
                      <Icon as={MdPerson} boxSize={6} />
                    </InputLeftElement>
                    <Input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="email"
                      placeholder="Enter email"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.password}>
                  <PasswordInput
                    register={{
                      ...register("password", {
                        required: "Password is required",
                      }),
                    }}
                    disabled={isSubmitting}
                    error={errors.password?.message}
                  />
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
              </VStack>

              <Button
                type="submit"
                isLoading={isSubmitting}
                marginTop="58px"
                variant="light"
                loadingText="Submitting"
                data-testid="login-button"
              >
                LOG IN
              </Button>
            </chakra.form>
            <Text
              marginTop="28px"
              color="white"
              fontSize="sm"
              textAlign="center"
            >
              Don&apos;t have an account?{" "}
              <Link href="/register" fontWeight={600}>
                Register
              </Link>
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};
