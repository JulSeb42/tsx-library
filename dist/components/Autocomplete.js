// Packages
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// Components
import * as Font from "./Font";
import Variables from "./Variables";
import Grid from "./Grid";
import Icon from "./Icon";
// Styles
const Label = styled.label `
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`;
const Helper = styled(Font.P) `
    position: relative;
    z-index: 0;
`;
const InputContainer = styled.div `
    position: relative;
    z-index: 10;
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
const Input = styled.input `
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

    ${props => props.icon &&
    css `
            padding-left: calc(${Variables.Spacers.XS} + 32px);
        `}
`;
const List = styled.ul `
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    z-index: 0;
    background-color: ${Variables.Colors.White};
    width: 100%;
    top: 0;
    border-radius: ${Variables.Radiuses.S};
    border: 1px solid ${Variables.Colors.Primary500};
    max-height: 0;
    transition: ${Variables.Transitions.Long};
    overflow: hidden;
    padding-top: 0;
    opacity: 0;
    overflow-y: scroll;

    ${props => props.open &&
    css `
            padding-top: 28px;
            max-height: 200px;
            opacity: 1;
        `}

    li {
        padding: ${Variables.Spacers.XS};
        transition: ${Variables.Transitions.Short};
        &:hover {
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};
            cursor: pointer;
        }
    }
`;
const Autocomplete = props => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setTimeout(() => setIsOpen(false), 500);
    return props.helper || props.helperBottom || props.label ? (React.createElement(Grid, { gap: Variables.Spacers.XXS },
        props.label && React.createElement(Label, { htmlFor: props.id }, props.label),
        props.helper && React.createElement(Helper, null, props.helper),
        React.createElement(InputContainer, null,
            props.icon && (React.createElement(IconContainer, { disabled: props.disabled },
                React.createElement(Icon, { name: props.icon, size: 16 }))),
            React.createElement(Input, Object.assign({ id: props.id, onFocus: handleOpen, onBlur: handleClose, value: props.value }, props)),
            React.createElement(List, { open: isOpen }, props.items.slice(0, 20).map((item, i) => (React.createElement("li", { onMouseDown: props.onMouseDown, key: i }, item))))),
        props.helperBottom && (React.createElement(Helper, { as: Font.Small }, props.helperBottom)))) : (React.createElement(InputContainer, null,
        React.createElement(Input, Object.assign({ id: props.id, onFocus: handleOpen, onBlur: handleClose, value: props.value }, props)),
        React.createElement(List, { open: isOpen }, props.items.slice(0, 20).map((item, i) => (React.createElement("li", { onMouseDown: props.onMouseDown, key: i }, item))))));
};
export default Autocomplete;
