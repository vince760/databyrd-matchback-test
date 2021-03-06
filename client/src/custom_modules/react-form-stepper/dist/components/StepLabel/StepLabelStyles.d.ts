import { StepLabelStyleProps } from './StepLabelTypes';
export declare const useStepLabelStyles: (data?: (StepLabelStyleProps & {
    theme?: Jss.Theme | undefined;
}) | undefined) => Record<"LabelContainer" | "Label", string>;
