// Packages
import React from "react";
import styled from "@emotion/styled";
// Components
import Variables from "./Variables";
import Image from "./Image";
import Icon from "./Icon";
// Styles
const Container = styled.span `
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: 50%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: calc(${props => `${props.size}px`} * 0.7);
    line-height: 100%;
    background-color: ${props => props.background};
    color: ${props => props.color};
    font-weight: ${Variables.FontWeights.Black};
`;
const Avatar = props => {
    let alt = props.alt;
    return (React.createElement(Container, Object.assign({ size: props.size || 48, background: props.background || Variables.Colors.Primary500, color: props.color || Variables.Colors.White }, props),
        props.children && props.children,
        props.src && (React.createElement(Image, { src: props.src, alt: alt, width: "100%", height: "100%", fit: "cover" })),
        props.icon && (React.createElement(Icon, { name: props.icon, size: props.size ? props.size * 0.7 : 48 * 0.7 }))));
};
export default Avatar;
