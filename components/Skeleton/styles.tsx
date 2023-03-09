/*=============================================== Skeleton styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import { Mixins, stringifyPx } from "../../"
import { AllColorsTypes, RadiusesTypes } from "../../types"
import { SkeletonAnimationTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const Pulse = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`

const StyledSkeleton = styled.div<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    $backgroundColor?: AllColorsTypes
    $borderRadius?: RadiusesTypes
    $animation?: SkeletonAnimationTypes
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    ${Mixins.BorderRadius};
    position: relative;
    overflow: hidden;

    ${({ $animation }) =>
        $animation === "pulse" &&
        css`
            animation: ${Pulse} 500ms infinite alternate;
        `}
`

const ShineLoad = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 106%;
    }
`

const Shine = styled.span<{
    $speed?: number
    $opacity?: number
    $color?: AllColorsTypes
    $width?: number | string
}>`
    position: absolute;
    top: -200px;
    bottom: -200px;
    width: ${({ $width }) => $width && stringifyPx($width)};
    filter: blur(20px);
    transform: skew(-15deg);
    background-color: ${({ theme, $color }) =>
        theme.AllColors({ $color: $color })};
    animation: ${ShineLoad} ${({ $speed }) => $speed}ms infinite;
    opacity: ${({ $opacity }) => $opacity};
`

setDefaultTheme([StyledSkeleton, Shine])

export { StyledSkeleton, Shine }
