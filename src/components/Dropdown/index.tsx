// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const DropdownContainer = styled.div`
    position: relative;
`

const Dropdown = styled.div<props>`
    position: absolute;
    left: ${({ position }) => position === "left" && 0};
    right: ${({ position }) => position === "right" && 0};
    top: 42px;
    background-color: ${Mixins.Background};
    ${Mixins.Shadow};
    min-width: 150px;
    ${Mixins.Grid({
        col: 1,
    })};
    border-radius: ${Variables.Radiuses.M};
    max-height: ${({ isOpen }) => (isOpen ? "800px" : 0)};
    overflow: hidden;
    overflow-y: ${({ isOpen }) => isOpen && "scroll"};
    transition: ${Variables.Transitions.Long};
    z-index: 10;

    & > a,
    & > button {
        padding: ${Variables.Spacers.XS};
        color: ${Mixins.Color};
        text-decoration: none;
        font-weight: ${Variables.FontWeights.Bold};
        transition: ${Variables.Transitions.Short};
        border: none;
        background-color: transparent;
        font-size: ${Variables.FontSizes.Body};

        &:hover {
            background-color: ${Mixins.ColorHover};
            color: ${({ color }) =>
                color === "white"
                    ? Variables.Colors.Primary500
                    : Variables.Colors.White};
        }

        &:active {
            background-color: ${Mixins.ColorActive};
            color: ${({ color }) =>
                color === "white"
                    ? Variables.Colors.Primary500
                    : Variables.Colors.White};
        }
    }
`

Dropdown.defaultProps = {
    position: "left",
    background: "white",
    shadow: "s",
    color: "primary",
}

export { DropdownContainer, Dropdown }
