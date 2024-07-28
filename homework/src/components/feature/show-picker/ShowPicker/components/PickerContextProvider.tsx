import { getShows } from "@/fetchers/show";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShow } from "@/typings/show";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import useSWR from "swr";

interface IPickerContext {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  selectedShows: Array<IShow>;
  setSelectedShows: Dispatch<SetStateAction<Array<IShow>>>;
  showList?: Array<IShow>;
}

export const PickerContext = createContext<IPickerContext>(
  {} as IPickerContext
);

export const PickerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);
  const { data } = useSWR(swrKeys.listShows, getShows);
  const showList = data?.shows;

  return (
    <PickerContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedShows,
        setSelectedShows,
        showList,
      }}
    >
      {children}
    </PickerContext.Provider>
  );
};
