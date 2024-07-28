import { ShowCard } from "@/components/feature/shows/ShowCard/ShowCard";
import { IShow } from "@/typings/show";
import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export const PickerStep = () => {
  const {
    currentStep,
    showList,
    setCurrentStep,
    selectedShows,
    setSelectedShows,
  } = useContext(PickerContext);

  const pickShow = (show: IShow) => {
    setSelectedShows([...selectedShows, show]);
    setCurrentStep(currentStep + 2);
  };

  if (!showList) {
    return null;
  }

  return (
    <Flex gap={3}>
      <Button
        onClick={() => pickShow(showList[currentStep])}
        display={"box"}
        h={"100%"}
        p={0}
      >
        <ShowCard {...showList[currentStep]} />
      </Button>
      <Button
        onClick={() => pickShow(showList[currentStep + 1])}
        display={"box"}
        h={"100%"}
        p={0}
      >
        <ShowCard {...showList[currentStep + 1]} />
      </Button>
    </Flex>
  );
};
