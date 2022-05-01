/// <reference types="react" />
import { props as gridProps } from "./Grid";
interface props extends gridProps {
    color?: string;
    borderColor?: string;
}
declare const Alert: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & gridProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & props, {}, {}>;
export default Alert;
