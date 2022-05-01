import { HTMLAttributes } from "react";
export interface h1Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string;
    display?: boolean;
    color?: string;
    hidden?: boolean;
}
export interface h2Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string;
    display?: boolean;
    color?: string;
}
export interface h3Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string;
    display?: boolean;
    color?: string;
}
export interface h4Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string;
    display?: boolean;
    color?: string;
}
export interface h5Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string;
    display?: boolean;
    color?: string;
}
export interface h6Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string;
    color?: string;
}
export interface pProps extends HTMLAttributes<HTMLParagraphElement> {
    align?: string;
    pre?: boolean;
    color?: string;
}
export interface smallProps extends HTMLAttributes<HTMLElement> {
    align?: string;
    color?: string;
}
export interface strongProps extends HTMLAttributes<HTMLElement> {
    align?: string;
    color?: string;
}
export interface emProps extends HTMLAttributes<HTMLElement> {
    align?: string;
    color?: string;
}
export interface listProps extends HTMLAttributes<HTMLUListElement> {
    gap?: string | number;
    color?: string;
    align?: string;
}
declare const H1: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & h1Props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H2: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & h2Props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H3: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & h3Props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H4: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & h4Props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H5: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & h5Props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H6: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & h6Props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const P: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & pProps, import("react").DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
declare const Small: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & smallProps, import("react").DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Strong: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & strongProps, import("react").DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Em: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & emProps, import("react").DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const List: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & listProps, import("react").DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
export { H1, H2, H3, H4, H5, H6, P, Small, Strong, Em, List };
