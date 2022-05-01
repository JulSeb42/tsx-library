import { HTMLAttributes } from "react";
interface props extends HTMLAttributes<HTMLSpanElement> {
    size?: number;
    border?: number;
    backgroundColor?: string;
    color?: string;
    marginLeft?: string;
    marginRight?: string;
}
declare const Loader: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export default Loader;
