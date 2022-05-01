import { HTMLAttributes } from "react";
interface props extends HTMLAttributes<HTMLDivElement> {
    gap?: string;
    template?: string;
}
declare const Wrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default Wrapper;
