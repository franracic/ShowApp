import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { PickerContextProvider } from "./components/PickerContextProvider";
import { PickerFooter } from "./components/PickerFooter";
import { PickerProgress } from "./components/PickerProgress";
import { PickerStep } from "./components/PickerStep";

export const ShowPicker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <PickerContextProvider>
      <Button onClick={onOpen} variant={"ghost"}>
        Show finder
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"100%"}>
          <ModalHeader>Pick a show</ModalHeader>
          <ModalBody>
            <PickerStep />
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={3}>
              <PickerFooter />
              <PickerProgress />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </PickerContextProvider>
  );
};
