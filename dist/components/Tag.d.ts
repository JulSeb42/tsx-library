import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    justify?: string;
    pill?: boolean;
}
declare const Tag: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & styleProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export default Tag;
