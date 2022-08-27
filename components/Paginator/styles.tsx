/*=============================================== Paginator styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Input from "../Input"

import { JustifyTypes } from "./types"

const StyledPaginator = styled.div<{ $justify?: JustifyTypes }>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: $justify === "right" ? "flex-end" : "flex-start",
            $gap: "xs",
        })};
`

const StyledInput = styled(Input)`
    width: 48px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const buttonSize = 24

const Button = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:not(:disabled):active {
            background-color: ${Variables.Colors.Primary600};
        }
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`

export { StyledPaginator, StyledInput, Button }
