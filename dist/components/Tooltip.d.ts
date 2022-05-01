import React from "react";
interface styleContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: string;
    textStyle?: string;
}
interface props extends styleContainerProps {
    text: string;
}
declare const Tooltip: React.FC<props>;
export default Tooltip;
