/*=============================================== Skeleton styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import { Mixins, stringifyPx } from "../../"
import { AllColorsTypes, RadiusesTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const Pulse = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`

const Load = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 106%;
    }
`

const StyledSkeleton = styled.div<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    $backgroundColor?: AllColorsTypes
    $borderRadius?: RadiusesTypes
    $animation?: boolean
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    ${Mixins.BorderRadius};

    ${({ $animation }) =>
        $animation &&
        css`
            animation: ${Pulse} 500ms infinite alternate;
        `}
`

const Shine = styled.span<{ $speed?: number }>`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    filter: blur(20px);
    transform: skew(-15deg);
    background-color: ${({ theme }) => theme.Background};
    animation: ${Load} ${({ $speed }) => $speed}ms infinite;
    opacity: 0.7;
`

setDefaultTheme([StyledSkeleton, Shine])

export { StyledSkeleton, Shine }
