/*=============================================== ProgressBar styles ===============================================*/

import styled, { keyframes } from "styled-components"

import { Radiuses, Transitions } from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const Progress = keyframes`
    0% {
        width: 0;
    }

    100% {
        width: var(--progress-value);
    }
`

const BaseProgressBar = styled.meter`
    width: 100%;
    height: 16px;
    background-color: ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.Round};
    position: relative;
    display: block;
    overflow: hidden;
    border: none;
    appearance: none;
    flex-grow: 1;

    &:before {
        content: "";
        position: absolute;
        transition: ${Transitions.Short};
        line-height: 100%;
        height: 100%;
        top: 0;
        width: var(--progress-value);
    }

    &.is-animated:before {
        animation: ${Progress} calc(var(--progress-speed) * 50ms) 1;
    }
`

const ProgressColor = styled(BaseProgressBar)<{ $color?: ColorsHoverTypes }>`
    &:before {
        background-color: ${({ theme, $color }) => theme.AllColors({ $color })};
    }
`

const StyledProgressBar = styled(ProgressColor)<{
    value: number
    max: number
}>`
    &:before {
        border-radius: ${({ value }) =>
            value < 3 ? Radiuses.Circle : Radiuses.Round};
    }
`

setDefaultTheme([StyledProgressBar])

export { StyledProgressBar }
