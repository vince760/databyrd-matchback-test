import React from 'react';
import { ConnectorStyleProps } from '../Connector/ConnectorTypes';
interface IStepperContext {
    activeStep: number;
    hideConnectors: boolean | 'inactive';
    nonLinear: boolean;
    connectorStateColors: boolean;
    connectorStyleConfig?: ConnectorStyleProps;
}
declare const StepperContext: React.Context<IStepperContext>;
export default StepperContext;
