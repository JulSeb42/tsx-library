import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    size?: number;
    btnStyle?: string;
    color?: string;
    colorHover?: string;
    colorActive?: string;
    hoverBackground?: boolean;
}
interface props extends styleProps {
    to?: string;
    icon: string;
}
declare const ButtonIcon: React.FC<props>;
export default ButtonIcon;
