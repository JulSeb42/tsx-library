import { HTMLAttributes } from "react";
interface props extends HTMLAttributes<HTMLHRElement> {
    color?: string;
    height?: number;
}
declare const Hr: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>, {}>;
export default Hr;
