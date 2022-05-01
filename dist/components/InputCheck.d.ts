import React from "react";
interface props extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    selector?: boolean;
    toggle?: boolean;
    label: string;
    justify?: string;
    type?: string;
    icon?: string;
    name?: string;
}
declare const InputCheck: React.FC<props>;
export default InputCheck;
