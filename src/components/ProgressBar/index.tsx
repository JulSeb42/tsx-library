// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const ProgressBar = styled.span<props>`
    width: 100%;
    height: ${props => props.height}px;
    background-color: ${Mixins.Background};
    display: block;
    border-radius: ${Variables.Radiuses.Round};
    position: relative;
    overflow: hidden;
    transition: ${Variables.Transitions.Short};

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.value}%;
        height: 100%;
        background-color: ${Mixins.Color};
        border-radius: ${Variables.Radiuses.Round};
        transition: ${Variables.Transitions.Short};
    }
`

ProgressBar.defaultProps = {
    background: Variables.Colors.Gray100,
    height: 16,
    color: "primary",
}

export default ProgressBar
