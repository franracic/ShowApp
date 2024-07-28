import { Progress } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';

export const PickerProgress = () => {
	const { currentStep, showList } = useContext(PickerContext);

	if (!showList) {
		return null;
	}

	const progress = (currentStep / showList.length) * 100;
	return <Progress value={progress} />;
};