import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number;
    background?: string;
    color?: string;
}
interface props extends styleProps {
    children?: string;
    src?: string;
    alt?: string;
    icon?: string;
}
declare const Avatar: React.FC<props>;
export default Avatar;
