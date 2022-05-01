import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    size: number;
    color?: string;
}
interface props extends styleProps {
    name: string;
}
declare const Icon: React.FC<props>;
export default Icon;
