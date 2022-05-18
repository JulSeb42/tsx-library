// Imports
import styled, { keyframes } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import * as Mixins from "../Mixins"

import { props } from "./types"

const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    };

    100% {
        transform: rotate(360deg);
    };
`

const Loader = styled.span<props>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: ${({ border }) => border}px solid ${Mixins.Background};
    border-bottom-color: ${Mixins.Color};
    border-radius: 50%;
    display: inline-block;
    animation: ${Rotation} ${({ speed }) => speed}ms linear infinite;
    margin-left: ${({ marginLeft }) =>
        marginLeft ? stringifyPx(marginLeft) : ""};
    margin-right: ${({ marginRight }) =>
        marginRight ? stringifyPx(marginRight) : ""};
`

Loader.defaultProps = {
    size: 48,
    border: 2,
    background: "white",
    color: "primary",
    speed: 1000,
}

export default Loader
