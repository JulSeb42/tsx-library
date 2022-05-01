import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    width?: number;
    height?: number;
    border?: number;
    color?: string;
    open: boolean;
}
interface props extends styleProps {
    ariaLabel?: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    open: boolean;
}
declare const Burger: React.FC<props>;
export default Burger;
