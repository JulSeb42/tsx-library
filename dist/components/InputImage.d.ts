import React from "react";
interface props extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    helper?: string;
    validation?: string;
    src: string;
    alt: string;
    iconEmpty?: string;
    iconHover?: string;
    width?: string;
    height?: string;
    id: string;
}
declare const InputImage: React.FC<props>;
export default InputImage;
