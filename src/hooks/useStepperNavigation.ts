import { useEffect, useState } from 'react';

import localforage from 'localforage';

import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';

import { useAppSelector } from 'hooks/useAppSelector';

const useStepperNavigation = (steps: string[], page: string) => {
    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});

    useEffect(() => {
        localforage.setItem(`${page}ActiveTab`, activeStep);
    }, [activeStep]);

    useEffect(() => {
        localforage.getItem(`${page}ActiveTab`).then((res: any) => {
            setActiveStep(res ? res : 0);
        });
        localforage.getItem(`${page}Progress`).then((res: any) => {
            console.log(res);
            if (res) {
                setCompleted(res);
                setProgress((Object.values(res).filter((a) => a === true).length / steps.length) * 100);
            }
        });
    }, [progressBarState]);

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        console.log(newActiveStep, steps.length);
        setActiveStep(newActiveStep + 1 >= steps.length ? steps.length - 1 : newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        console.log(completed);
        setProgress((Object.values(completed).filter((a) => a === true).length / steps.length) * 100);
        localforage.setItem(`${page}Progress`, completed);
        handleNext();
    };

    return {
        activeStep,
        progress,
        completed,
        handleBack,
        handleStep,
        handleComplete
    };
};

export default useStepperNavigation;
