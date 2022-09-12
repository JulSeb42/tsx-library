/*=============================================== ProgressBar styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import Mixins from "../../Mixins"
import { Radiuses, Transitions } from "../../Variables"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"
import { DirectionTypes } from "./types"

const Progress = ({
    $value,
    $direction,
}: {
    $value: number
    $direction?: DirectionTypes
}) => keyframes`
    0% {
        width: ${$direction === "horizontal" && 0};
        height: ${$direction === "vertical" && 0};
    }

    100% {
        width: ${$direction === "horizontal" && $value}%;
        height: ${$direction === "vertical" && $value}%;
    }
`

const StyledProgressBar = styled.meter<{
    $value: number
    $color?: AllColorsTypes
    $backgroundColor?: AllColorsTypes
    $animated?: boolean
    $direction?: DirectionTypes
    $width?: string | number | SpacersTypes
    $height?: string | number | SpacersTypes
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
        border-radius: ${({ $value }) =>
            $value < 3 ? Radiuses.Circle : Radiuses.Round};
        transition: ${Transitions.Short};
        background-color: ${({ theme }) => theme.AllColors};
        line-height: 100%;

        ${({ $direction, $value }) =>
            $direction === "horizontal"
                ? css`
                      width: ${$value}%;
                      height: 100%;
                      top: 0;
                  `
                : css`
                      width: 100%;
                      height: ${$value}%;
                      bottom: 0;
                  `};

        ${({ $animated, $value, $direction }) =>
            $animated === true &&
            css`
                animation: ${Progress({
                        $value: $value,
                        $direction: $direction,
                    })}
                    calc(${$value} * 50ms) 1;
            `}
    }
`

setDefaultTheme([StyledProgressBar])

export { StyledProgressBar }
