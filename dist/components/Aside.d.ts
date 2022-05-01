import React from "react";
interface props extends React.HTMLAttributes<HTMLElement> {
    gap?: string;
    template?: string;
    last?: boolean;
    justify?: string;
    align?: string;
}
declare const Aside: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & props, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export default Aside;
