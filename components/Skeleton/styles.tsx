/*=============================================== Skeleton styles ===============================================*/

import styled, { keyframes } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import {} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes, RadiusesTypes } from "../../utils/common-types"

const Pulse = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`

const StyledSkeleton = styled.div<{
    $width?: number | string
    $height?: number | string
    $aspectRatio?: string
    $backgroundColor?: AllColorsTypes
    $borderRadius?: RadiusesTypes
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    background-color: ${({ $backgroundColor, theme }) =>
        theme.AllColors({ $color: $backgroundColor })};
    ${Mixins.BorderRadius};
    animation: ${Pulse} 500ms infinite alternate;
`

setDefaultTheme([StyledSkeleton])

export { StyledSkeleton }
