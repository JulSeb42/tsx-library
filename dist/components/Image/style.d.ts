/// <reference types="react" />
import * as Font from "../Font";
interface propsFallback extends React.HTMLAttributes<HTMLDivElement> {
    width: number | string;
    height: number | string;
}
interface propsContainer extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
}
export interface propsImg extends React.HTMLAttributes<HTMLImageElement> {
    width?: string | number;
    height?: string | number;
    fit?: string;
}
declare const Fallback: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & propsFallback, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Container: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & propsContainer, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Caption: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Font.pProps & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export { Fallback, Container, Caption };
