import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number;
    textColor?: string;
    color?: string;
}
interface props extends styleProps {
    icon?: string;
}
declare const Badge: React.FC<props>;
export default Badge;
