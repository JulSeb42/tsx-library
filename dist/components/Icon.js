// Packages
import React from "react";
import styled from "@emotion/styled";
import { ReactSVG } from "react-svg";
// Styles
const Container = styled.span `
    display: inline-flex;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    align-items: center;
    justify-content: center;

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: ${props => props.color};
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${props => props.color};
    }
`;
const Icon = props => {
    return (React.createElement(Container, Object.assign({ color: props.color || "currentColor" }, props),
        React.createElement(ReactSVG, { src: `/icons/${props.name}.svg`, wrapper: "span" })));
};
export default Icon;
