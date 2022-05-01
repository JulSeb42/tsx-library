import React from "react";
interface inputStyledProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: string;
    validation?: any;
    value?: any;
    colorMode?: string;
    onChange?: any;
    preview?: any;
}
interface inputFunctionProps extends inputStyledProps {
    icon?: string;
    password?: boolean;
    validation?: string;
    disabled?: boolean;
    maxLength?: number;
    type?: string;
    customIconPassed?: string;
    customIconNotPassed?: string;
    iconPassword?: boolean;
}
interface inputProps extends inputFunctionProps {
    label?: string;
    helper?: string;
    helperBottom?: string;
    counter?: boolean;
    validationText?: string;
    id: string;
}
declare const Input: React.FC<inputProps>;
export default Input;
