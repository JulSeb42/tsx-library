// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Font from "../Font"
import Flexbox from "../Flexbox"
import Badge from "../Badge"

import { textStyleProps } from "./types"

const Container = styled(Flexbox)`
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: calc(12px - 2px / 2);
        left: 12px;
        width: calc(100% - 24px);
        height: 2px;
        background-color: ${Variables.Colors.Primary500};
        z-index: 1;
    }
`

const Step = styled(Flexbox)`
    position: relative;
    z-index: 2;
`

const Number = styled(Badge)`
    outline: 4px solid ${Variables.Colors.White};
`

const Text = styled(Font.Small)<textStyleProps>`
    color: ${Variables.Colors.Primary500};
    text-decoration: none;

    ${props =>
        props.to &&
        css`
            font-weight: ${Variables.FontWeights.Bold};
            transition: ${Variables.Transitions.Short};

            &:hover {
                color: ${Variables.Colors.Primary300};
            }

            &:active {
                color: ${Variables.Colors.Primary600};
            }
        `}
`

export { Container, Step, Number, Text }
