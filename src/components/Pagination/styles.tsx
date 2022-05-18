// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Pagination = styled.div`
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
        gap: "xs",
    })};
`

const Button = styled.button<styleProps>`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    font-size: ${Variables.FontSizes.Body};
    line-height: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    font-weight: ${Variables.FontWeights.Bold};
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    background: ${({ active }) =>
        active ? Variables.Colors.Primary500 : "none"};
    color: ${({ active }) =>
        active ? Variables.Colors.White : Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};
    cursor: ${({ more }) => (more ? "default" : "pointer")};

    &:hover {
        background-color: ${({ more }) =>
            more ? "transparent" : Variables.Colors.Primary300};
        color: ${({ more }) =>
            more ? Variables.Colors.Primary500 : Variables.Colors.White};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
        color: ${Variables.Colors.White};
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
        background-color: transparent;
    }
`

export { Pagination, Button }
