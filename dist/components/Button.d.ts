import React from "react";
interface styleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    noPadding?: boolean;
    btnStyle?: string;
    color?: string;
    colorHover?: string;
    colorActive?: string;
    justify?: string;
}
interface props extends styleProps {
    loading?: boolean;
    iconLeft?: string;
    iconRight?: string;
    to?: string;
    disabled?: boolean;
}
declare const Button: React.FC<props>;
export default Button;
