import React from "react";
import { props as gridProps } from "./Grid";
interface props extends gridProps {
    id: string;
    label?: string;
    helper?: string;
    helperBottom?: string;
    validationText?: string;
    validation?: string;
    value?: any;
    counter?: boolean;
    maxLength?: number;
}
declare const InputContainer: React.FC<props>;
export default InputContainer;
