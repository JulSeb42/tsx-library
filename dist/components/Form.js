// Packages
import React from "react";
import styled from "@emotion/styled";
// Components
import Variables from "./Variables";
import ButtonsContainer from "./ButtonsContainer";
import Button from "./Button";
// Styles
const Container = styled.form `
    display: grid;
    gap: ${Variables.Spacers.S};
`;
const Form = props => {
    return (React.createElement(Container, Object.assign({}, props),
        props.children,
        (props.btnPrimary || props.btnCancel || props.btnReset) && (React.createElement(ButtonsContainer, null,
            props.btnPrimary && (React.createElement(Button, { btnStyle: "plain", color: props.colorPrimary || "primary", iconLeft: props.iconLeftPrimary, iconRight: props.iconRightPrimary, type: "submit", loading: props.loading, disabled: props.loading }, props.btnPrimary)),
            props.btnCancel && (React.createElement(Button, { btnStyle: "text", color: props.colorCancel || "primary", iconLeft: props.iconLeftCancel, iconRight: props.iconRightCancel, to: props.btnCancel }, props.textBtnCancel || "Cancel")),
            (props.btnReset || props.textBtnReset) && (React.createElement(Button, { btnStyle: "text", color: props.colorReset || "primary", iconLeft: props.iconLeftReset, iconRight: props.iconRightReset, type: "reset", onClick: props.onClickReset }, props.textBtnReset || "Reset"))))));
};
export default Form;
