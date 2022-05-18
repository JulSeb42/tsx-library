// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"
import Grid from "../Grid"

import { styleProps } from "./types"

const Container = styled(Grid)<styleProps>`
    background-color: ${Variables.Colors.White};
    box-shadow: ${({ shadow }) =>
        shadow === "xs"
            ? Variables.Shadows.XS
            : shadow === "s"
            ? Variables.Shadows.S
            : shadow === "m"
            ? Variables.Shadows.M
            : shadow === "l"
            ? Variables.Shadows.L
            : shadow === "xl"
            ? Variables.Shadows.XL
            : shadow === "xxl"
            ? Variables.Shadows.XXL
            : shadow};
    ${Mixins.Radius};
    max-width: 300px;
`

const Close = styled.button`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    ${Mixins.Radius({
        radius: "circle",
    })};
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray50};
    }
`

export { Container, Close }
