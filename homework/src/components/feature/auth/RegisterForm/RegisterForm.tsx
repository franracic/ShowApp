"use client";
import { LogoImage } from "@/components/core/Logo/Logo";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  VStack,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdPerson } from "react-icons/md";
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
      <Card p={8} bg={"purpleSecond"}>
        <CardBody>
          <VStack spacing={0}>
            <HStack justifyContent="center" marginBottom={"50px"}>
              <LogoImage width={200} />
            </HStack>
            <chakra.form
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              onSubmit={handleSubmit(onRegister)}
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

                <FormControl isRequired isInvalid={!!errors.password}>
                  <PasswordInput
                    register={{
                      ...register("confirmPassword", {
                        required: "Confirm Password is required",
                      }),
                    }}
                    disabled={isSubmitting}
                    error={errors.confirmPassword?.message}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword?.message}
                  </FormErrorMessage>
                </FormControl>
              </VStack>

              <Button
                type="submit"
                isLoading={isSubmitting}
                marginTop="58px"
                variant="light"
                loadingText="Submitting"
              >
                Sign up
              </Button>
            </chakra.form>
            <Text
              marginTop="28px"
              color="white"
              fontSize="sm"
              textAlign="center"
            >
              Already have an account?{" "}
              <Link href="/login" fontWeight={600}>
                Login
              </Link>
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};
