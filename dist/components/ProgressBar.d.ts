import React from "react";
interface props extends React.HTMLAttributes<HTMLSpanElement> {
    value: number;
    height?: number;
    color?: string;
}
declare const ProgressBar: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & props, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export default ProgressBar;
