import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export const PickerFooter = () => {
  const { setCurrentStep } = useContext(PickerContext);
  return <Button onClick={() => setCurrentStep(0)}>Reset</Button>;
};
