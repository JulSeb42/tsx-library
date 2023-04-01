/*=============================================== ProgressBar styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import { Mixins, Radiuses, Transitions, getPercentage } from "../../"
import type { AllColorsTypes, SpacersTypes } from "../../types"
import type { ProgressDirectionType } from "./types"

import { setDefaultTheme } from "../../utils"

const Progress = ({
    value,
    $direction,
}: {
    value: number
    $direction?: ProgressDirectionType
}) => keyframes`
    0% {
        width: ${$direction === "horizontal" && 0};
        height: ${$direction === "vertical" && 0};
    }

    100% {
        width: ${$direction === "horizontal" && value}%;
        height: ${$direction === "vertical" && value}%;
    }
`

const StyledProgressBar = styled.meter<{
    value: number
    $color?: AllColorsTypes
    $backgroundColor?: AllColorsTypes
    $animated?: boolean
    $direction?: ProgressDirectionType
    $width?: string | SpacersTypes
    $height?: string | SpacersTypes
    $speed?: number
    max: number
}>`
    width: ${({ $width, $direction, $height }) =>
        $direction === "vertical"
            ? Mixins.Spacers({ $spacer: $height })
            : Mixins.Spacers({ $spacer: $width })};
    height: ${({ $width, $direction, $height }) =>
        $direction === "vertical"
            ? Mixins.Spacers({ $spacer: $width })
            : Mixins.Spacers({ $spacer: $height })};
    background-color: ${({ $backgroundColor, theme }) =>
        theme.AllColors({ $color: $backgroundColor })};
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
        border-radius: ${({ value }) =>
            value < 3 ? Radiuses.Circle : Radiuses.Round};
        transition: ${Transitions.Short};
        background-color: ${({ theme }) => theme.AllColors};
        line-height: 100%;

        ${({ $direction, value, max }) =>
            $direction === "horizontal"
                ? css`
                      width: ${getPercentage(value, max)}%;
                      height: 100%;
                      top: 0;
                  `
                : css`
                      width: 100%;
                      height: ${getPercentage(value, max)}%;
                      bottom: 0;
                  `};

        ${({ $animated, value, $direction, $speed }) =>
            $animated === true &&
            css`
                animation: ${Progress({
                        value: value,
                        $direction: $direction,
                    })}
                    ${$speed ? `${$speed}ms` : `calc(${value} * 50ms) 1`};
            `}
    }
`

setDefaultTheme([StyledProgressBar])

export { StyledProgressBar }
