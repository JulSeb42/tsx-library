/*=============================================== Loader styles ===============================================*/

import styled, { keyframes } from "styled-components"

import { Radiuses } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes } from "../../utils/common-types"

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
    $borderSize?: number
    $color?: AllColorsTypes
    $speed?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Radiuses.Circle};
    border: ${({ $borderSize }) => $borderSize}px solid transparent;
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
    $size: number
    $borderSize?: number
    $color?: AllColorsTypes
    $speed?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    display: inline-block;
    border-radius: ${Radiuses.Circle};
    border: ${({ $borderSize }) => $borderSize}px solid
        ${({ theme }) => theme.AllColors};
    border-color: ${({ theme }) => theme.AllColors} transparent
        ${({ theme }) => theme.AllColors} transparent;
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
    $borderSize?: number
    $color?: AllColorsTypes
    $speed?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    display: inline-block;
    position: relative;

    div {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${({ $borderSize }) => $borderSize}px solid
            ${({ theme }) => theme.AllColors};
        border-radius: ${Radiuses.Circle};
        animation: ${SpinLoaderThree} ${({ $speed }) => $speed}ms
            cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${({ theme }) => theme.AllColors} transparent transparent
            transparent;

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
        opacity: 0.3;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
`

const StyledLoaderFour = styled.span<{
    $color?: AllColorsTypes
    $size?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "xs",
    })};

    span {
        aspect-ratio: 1;
        flex-grow: 1;
        background-color: ${({ $color, theme }) =>
            theme.AllColors({ $color: $color })};
        border-radius: ${Radiuses.Circle};
        animation: ${Flash} 0.6s infinite linear alternate;

        &:nth-child(2) {
            animation-delay: 0.3s;
        }

        &:nth-child(3) {
            animation-delay: 0.6s;
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
