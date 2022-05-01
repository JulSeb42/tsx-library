import React from "react";
export interface props extends React.HTMLAttributes<HTMLDivElement> {
    align?: string;
    justify?: string;
    direction?: string;
    wrap?: string;
    gap?: string | number;
}
declare const Flexbox: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & props, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default Flexbox;
