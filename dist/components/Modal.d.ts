import React from "react";
interface props {
    open: boolean;
    close?: (event: React.MouseEvent<HTMLElement>) => void;
    icon?: string;
    children: any;
}
declare const Modal: React.FC<props>;
export default Modal;
