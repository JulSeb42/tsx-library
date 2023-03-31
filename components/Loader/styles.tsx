/*=============================================== Loader styles ===============================================*/

import styled, { keyframes } from "styled-components"

import { Radiuses, Mixins } from "../../"
import type { AllColorsTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const SpinLoaderOne = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg);
    }
`

const StyledLoaderOne = styled.span<{
    $size?: number
    $color?: AllColorsTypes
    $speed?: number
    $borderWidth?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Radiuses.Circle};
    border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
    border-bottom-color: ${({ theme }) => theme.AllColors};
    animation: ${SpinLoaderOne} ${({ $speed }) => $speed}ms linear infinite;
`

const SpinLoaderTwo = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const StyledLoaderTwo = styled.span<{
    $size?: number
    $color?: AllColorsTypes
    $speed?: number
    $borderWidth?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    display: inline-block;
    border-radius: ${Radiuses.Circle};
    border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
    border-top-color: ${({ theme }) => theme.AllColors};
    border-bottom-color: ${({ theme }) => theme.AllColors};
    animation: ${SpinLoaderTwo} ${({ $speed }) => $speed}ms linear infinite;
`

const SpinLoaderThree = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const StyledLoaderThree = styled.span<{
    $size?: number
    $color?: AllColorsTypes
    $speed?: number
    $borderWidth?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    display: inline-block;
    position: relative;

    span {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
        border-radius: ${Radiuses.Circle};
        animation: ${SpinLoaderThree} ${({ $speed }) => $speed}ms
            cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-top-color: ${({ theme }) => theme.AllColors};

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`

const Flash = keyframes`
    0% {
        opacity: 1;
    }

    50%, 100% {
        opacity: 0.5;
    }
`

const durationLoaderFour = 1000

const StyledLoaderFour = styled.span<{
    $size: number
    $color?: AllColorsTypes
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xxs",
    })}
    position: relative;

    span {
        aspect-ratio: 1;
        flex-grow: 1;
        display: inline-block;
        border-radius: ${Radiuses.Circle};
        background-color: ${({ $color, theme }) => theme.AllColors({ $color })};

        &:first-child {
            animation: ${Flash} ${durationLoaderFour}ms infinite alternate;
            animation-delay: 0ms;
        }

        &:nth-child(2) {
            animation: ${Flash} ${durationLoaderFour}ms infinite linear
                alternate;
            animation-delay: 250ms;
        }

        &:last-child {
            animation: ${Flash} ${durationLoaderFour}ms infinite alternate;
            animation-delay: 500ms;
        }
    }
`

setDefaultTheme([
    StyledLoaderOne,
    StyledLoaderTwo,
    StyledLoaderThree,
    StyledLoaderFour,
])

export { StyledLoaderOne, StyledLoaderTwo, StyledLoaderThree, StyledLoaderFour }
