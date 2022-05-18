// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled.button<styleProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    position: relative;
    background: none;
    padding: 0;
    border: none;

    span {
        transition: ${Variables.Transitions.Short};
        width: 100%;
        height: ${props => props.border}px;
        background-color: ${Mixins.Color};
        position: absolute;
        left: 0;

        &:first-of-type {
            top: ${({ isOpen }) => (isOpen ? "45%" : 0)};
            transform: ${({ isOpen }) => isOpen && "rotate(45deg)"};
        }

        &:nth-of-type(2) {
            top: calc(50% - ${props => props.border}px / 2);
            width: ${({ isOpen }) => isOpen && 0};
        }

        &:last-of-type {
            bottom: ${({ isOpen }) => (isOpen ? "45%" : 0)};
            transform: ${({ isOpen }) => isOpen && "rotate(-45deg)"};
        }
    }
`

export { Container }
