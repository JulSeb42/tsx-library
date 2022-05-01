// Packages
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MDEditor from "@uiw/react-md-editor";
// Components
import Variables from "./Variables";
import InputContainer from "./InputContainer";
import Icon from "./Icon";
// Styles
const Container = styled.div `
    position: relative;
    width: 100%;
`;
const InputStyled = styled.input `
    position: relative;
    z-index: 1;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    outline: none;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    height: 35px;
    width: 100%;

    &:focus {
        border-color: ${Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        color: ${Variables.Colors.Gray800};
        border-color: ${Variables.Colors.Gray200};
        background-color: ${Variables.Colors.Gray50};
    }

    ${props => props.type === "textarea" &&
    css `
            min-height: calc(
                ${Variables.FontSizes.Body} * ${Variables.LineHeight} * 3 +
                    ${Variables.Spacers.XXS} * 2
            );
            resize: vertical;
        `}

    ${props => props.type === "select" &&
    css `
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}

    ${props => props.icon &&
    css `
            padding-left: calc(${Variables.Spacers.XS} + 32px);
        `}
    
    ${props => props.validation &&
    props.validation !== "passed" &&
    props.value.length > 0 &&
    css `
            background-color: ${Variables.Colors.Danger50};

            &:focus {
                border-color: ${Variables.Colors.Danger500};
            }
        `}
`;
const IconContainer = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 32px;
    color: ${props => props.disabled
    ? Variables.Colors.Gray800
    : Variables.Colors.Primary500};

    &:after {
        content: "";
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(100% - 2px);
        width: 1px;
        background-color: ${Variables.Colors.Gray200};
    }
`;
const RightContainer = styled.span `
    position: absolute;
    top: 0;
    right: ${Variables.Spacers.XS};
    height: 100%;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Spacers.XXS};
    }
`;
const ButtonPassword = styled.button `
    border: none;
    padding: 0;
    background: none;
    color: ${Variables.Colors.Primary500};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    transition: ${Variables.Transitions.Short};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }
`;
const SelectContainer = styled.div `
    position: relative;

    &:after {
        content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%231B4568'/%3E%3C/svg%3E");
        color: ${Variables.Colors.Primary500};
        position: absolute;
        z-index: 2;
        top: calc(50% - 18px / 2);
        right: ${Variables.Spacers.XS};

        ${props => props.disabled &&
    css `
                content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%232F2F2F'/%3E%3C/svg%3E");
            `}
    }
`;
const InputFunction = props => {
    const [isVisible, setIsVisible] = useState(false);
    const visible = isVisible ? "text" : "password";
    return props.icon || props.password || props.validation ? (React.createElement(Container, null,
        props.icon && (React.createElement(IconContainer, { disabled: props.disabled },
            React.createElement(Icon, { name: props.icon, size: 16 }))),
        React.createElement(InputStyled, Object.assign({ id: props.id, value: props.value, type: props.password ? visible : props.type || "text", onChange: props.onChange, icon: props.icon, maxLength: props.maxLength }, props)),
        (props.validation || props.password) && (React.createElement(RightContainer, null,
            props.validation &&
                props.value.length > 0 &&
                (props.validation === "passed" ? (props.customIconPassed ? (React.createElement(Icon, { name: props.customIconPassed, color: Variables.Colors.Success500, size: 16 })) : (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M5.13333 7.528L6.666 9.058L10.1953 5.52867L11.138 6.47133L6.66733 10.942L4.192 8.472L5.13333 7.528Z", fill: Variables.Colors.Success500 }),
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.33334 8C1.33334 4.324 4.324 1.33334 8 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8C14.6667 11.676 11.676 14.6667 8 14.6667C4.324 14.6667 1.33334 11.676 1.33334 8ZM2.66667 8C2.66667 10.9407 5.05934 13.3333 8 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8C13.3333 5.05934 10.9407 2.66667 8 2.66667C5.05934 2.66667 2.66667 5.05934 2.66667 8Z", fill: Variables.Colors.Success500 })))) : props.customIconNotPassed ? (React.createElement(Icon, { name: props.customIconNotPassed, color: Variables.Colors.Danger500, size: 16 })) : (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M9.88532 10.828L7.99999 8.94267L6.11466 10.828L5.17199 9.88534L7.05733 8L5.17199 6.11467L6.11466 5.172L7.99999 7.05734L9.88532 5.172L10.828 6.11467L8.94266 8L10.828 9.88534L9.88532 10.828Z", fill: Variables.Colors.Danger500 }),
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6667 8C14.6667 11.676 11.676 14.6667 7.99999 14.6667C4.32399 14.6667 1.33333 11.676 1.33333 8C1.33333 4.324 4.32399 1.33334 7.99999 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8ZM13.3333 8C13.3333 5.05934 10.9407 2.66667 7.99999 2.66667C5.05933 2.66667 2.66666 5.05934 2.66666 8C2.66666 10.9407 5.05933 13.3333 7.99999 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8Z", fill: Variables.Colors.Danger500 })))),
            props.password && (React.createElement(ButtonPassword, { onClick: () => setIsVisible(!isVisible), type: "button" }, props.iconPassword ? (isVisible ? (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M12 10C12 11.095 12.905 12 14 12C14.354 12 14.683 11.897 14.973 11.732C14.9758 11.7675 14.9805 11.8023 14.9853 11.8372C14.9927 11.8907 15 11.9443 15 12C15 13.642 13.641 15 12 15C10.358 15 9 13.642 9 12C9.00524 11.206 9.323 10.4459 9.88447 9.88447C10.4459 9.323 11.206 9.00524 12 9C12.0557 9 12.1093 9.00734 12.1628 9.01468C12.1977 9.01946 12.2325 9.02424 12.268 9.027C12.103 9.317 12 9.646 12 10Z", fill: "currentColor" }),
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.05204 11.684C2.07305 11.617 4.36704 5 12 5C19.633 5 21.927 11.617 21.949 11.684L22.054 12L21.948 12.316C21.927 12.383 19.633 19 12 19C4.36704 19 2.07305 12.383 2.05104 12.316L1.94604 12L2.05204 11.684ZM4.07404 12C4.57604 13.154 6.64904 17 12 17C17.348 17 19.422 13.158 19.926 12C19.424 10.846 17.351 7 12 7C6.65204 7 4.57804 10.842 4.07404 12Z", fill: "currentColor" }))) : (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.64898 17 4.57598 13.154 4.07398 12C4.45093 11.1588 4.96003 10.3833 5.58198 9.70297L4.18398 8.30497C2.64598 9.97197 2.06298 11.651 2.05198 11.684C1.983 11.8893 1.983 12.1116 2.05198 12.317C2.07298 12.383 4.36698 19 12 19ZM12 4.99997C10.163 4.99997 8.65398 5.39597 7.39598 5.98097L3.70698 2.29297L2.29298 3.70697L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1116 22.018 11.8893 21.949 11.684C21.927 11.617 19.633 4.99997 12 4.99997ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 8.99997 12 8.99997C11.541 8.99997 11.112 9.11797 10.723 9.30897L8.91498 7.50097C9.9075 7.16038 10.9507 6.99097 12 6.99997C17.351 6.99997 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z", fill: "currentColor" })))) : isVisible ? ("Hide") : ("Show"))))))) : props.type === "textarea" ? (React.createElement(InputStyled, Object.assign({ as: "textarea" }, props))) : props.type === "select" ? (React.createElement(SelectContainer, { disabled: props.disabled },
        React.createElement(InputStyled, Object.assign({ as: "select", id: props.id }, props), props.children))) : props.type === "markdown" ? (React.createElement("div", { "data-color-mode": props.colorMode || "light" },
        React.createElement(MDEditor, Object.assign({ value: props.value, onChange: props.onChange, preview: props.preview || "edit" }, props)))) : (React.createElement(InputStyled, Object.assign({ id: props.id }, props)));
};
const Input = props => {
    return props.label ? (React.createElement(InputContainer, { id: props.id, label: props.label, helper: props.helper, helperBottom: props.helperBottom, validation: props.validation, validationText: props.validationText, counter: props.counter, maxLength: props.maxLength, value: props.value },
        React.createElement(InputFunction, Object.assign({}, props)))) : (React.createElement(InputFunction, Object.assign({}, props)));
};
export default Input;
