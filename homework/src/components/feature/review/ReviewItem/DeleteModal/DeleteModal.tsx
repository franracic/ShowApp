import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface IDeleteModal {
  review_id: string;
  deleteShowReview: (reviewId: string) => void;
}

export const DeleteModal = ({ review_id, deleteShowReview }: IDeleteModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    deleteShowReview(review_id);
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="red"
        size={"xs"}
        ml="auto"
        w={"100%"}
        name="delete"
      >
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"blue.900"} color={"white"}>
          <ModalHeader data-testid="delete-modal">Delete review?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSubmit}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
