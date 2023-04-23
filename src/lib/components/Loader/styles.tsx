/*=============================================== Loader styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import { Radiuses, Mixins } from "../../"
import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const LoaderSize = css`
    width: var(--loader-size, 48px);
    height: var(--loader-size, 48px);
`

const SpinLoaderOne = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg);
    }
`

const BaseLoaderOne = styled.span`
    ${LoaderSize};
    border-radius: ${Radiuses.Circle};
    border: var(--loader-border-width, 8px) solid transparent;
    animation: ${SpinLoaderOne} 1200ms linear infinite;
`

const StyledLoaderOne = styled(BaseLoaderOne)<{
    $color?: AllColorsTypes
}>`
    border-bottom-color: ${({ theme, $color }) => theme.AllColors({ $color })};
`

const SpinLoaderTwo = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const BaseLoaderTwo = styled.span`
    ${LoaderSize};
    display: inline-block;
    border-radius: ${Radiuses.Circle};
    border: var(--loader-border-width, 8px) solid transparent;
    animation: ${SpinLoaderTwo} 1200ms linear infinite;
`

const StyledLoaderTwo = styled(BaseLoaderTwo)<{
    $color?: AllColorsTypes
}>`
    border-top-color: ${({ theme, $color }) => theme.AllColors({ $color })};
    border-bottom-color: ${({ theme, $color }) => theme.AllColors({ $color })};
`

const SpinLoaderThree = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const BaseLoaderThree = styled.span`
    ${LoaderSize};
    display: inline-block;
    position: relative;

    span {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: var(--loader-border-width, 8px) solid transparent;
        border-radius: ${Radiuses.Circle};
        animation: ${SpinLoaderThree} 1200ms cubic-bezier(0.5, 0, 0.5, 1)
            infinite;

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

const StyledLoaderThree = styled(BaseLoaderThree)<{
    $color?: AllColorsTypes
}>`
    span {
        border-top-color: ${({ theme, $color }) => theme.AllColors({ $color })};
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

const DURATION_LOADER_FOUR = 1000

const BaseLoaderFour = styled.span`
    ${LoaderSize};
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

        &:first-child {
            animation: ${Flash} ${DURATION_LOADER_FOUR}ms infinite alternate;
            animation-delay: 0ms;
        }

        &:nth-child(2) {
            animation: ${Flash} ${DURATION_LOADER_FOUR}ms infinite linear
                alternate;
            animation-delay: 250ms;
        }

        &:last-child {
            animation: ${Flash} ${DURATION_LOADER_FOUR}ms infinite alternate;
            animation-delay: 500ms;
        }
    }
`

const StyledLoaderFour = styled(BaseLoaderFour)<{
    $color?: AllColorsTypes
}>`
    span {
        background-color: ${({ theme, $color }) => theme.AllColors({ $color })};
    }
`

setDefaultTheme([
    StyledLoaderOne,
    StyledLoaderTwo,
    StyledLoaderThree,
    StyledLoaderFour,
])

export { StyledLoaderOne, StyledLoaderTwo, StyledLoaderThree, StyledLoaderFour }
