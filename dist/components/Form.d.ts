import React from "react";
interface props extends React.HTMLAttributes<HTMLFormElement> {
    btnPrimary?: string;
    btnCancel?: string;
    btnReset?: string;
    colorPrimary?: string;
    iconLeftPrimary?: string;
    iconRightPrimary?: string;
    loading?: boolean;
    colorCancel?: string;
    iconLeftCancel?: string;
    iconRightCancel?: string;
    textBtnCancel?: string;
    textBtnReset?: string;
    colorReset?: string;
    iconLeftReset?: string;
    iconRightReset?: string;
    onClickReset?: (event: React.MouseEvent<HTMLElement>) => void;
}
declare const Form: React.FC<props>;
export default Form;
