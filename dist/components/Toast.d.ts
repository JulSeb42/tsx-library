import React from "react";
interface props extends React.HTMLAttributes<HTMLDivElement> {
    close?: (event: React.MouseEvent<HTMLElement>) => void;
    icon?: string;
    iconColor?: string;
    customIconClose?: string;
}
declare const Toast: React.FC<props>;
export default Toast;
