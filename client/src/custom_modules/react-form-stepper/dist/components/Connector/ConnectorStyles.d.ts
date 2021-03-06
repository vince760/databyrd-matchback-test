import { ConnectorStyleProps } from './ConnectorTypes';
export declare const connectorStyleDefaults: ConnectorStyleProps;
export declare const useConnectorStyles: (data?: (ConnectorStyleProps & {
    theme?: Jss.Theme | undefined;
}) | undefined) => Record<"ConnectorContainer" | "Connector", string>;
