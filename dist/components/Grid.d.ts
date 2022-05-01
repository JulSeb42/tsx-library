import { HTMLAttributes } from "react";
export interface props extends HTMLAttributes<HTMLDivElement> {
    inline?: boolean;
    col?: number;
    gap?: string | number;
    justify?: string;
    align?: string;
    row?: string;
    area?: string;
}
declare const Grid: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & props, import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default Grid;
