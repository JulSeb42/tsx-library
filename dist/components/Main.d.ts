import { HTMLAttributes } from "react";
interface props extends HTMLAttributes<HTMLElement> {
    gap?: string;
    template?: string;
    justify?: string;
    align?: string;
}
declare const Main: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export default Main;
