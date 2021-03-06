import { StepStyleProps } from './StepTypes';
export declare const stepStyleDefaults: {
    activeBgColor: string;
    activeTextColor: string;
    completedBgColor: string;
    completedTextColor: string;
    inactiveBgColor: string;
    inactiveTextColor: string;
    size: string;
    circleFontSize: string;
    borderRadius: string;
};
export declare const useStepStyles: (data?: (StepStyleProps & {
    theme?: Jss.Theme | undefined;
}) | undefined) => Record<"StepMain" | "StepButton" | "StepButtonContent", string>;
