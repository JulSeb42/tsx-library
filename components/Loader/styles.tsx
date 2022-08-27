/*=============================================== Loader styles ===============================================*/

import styled, { keyframes } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

const Spin = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg);
    }
`

const StyledLoader = styled.span<{
    $size?: number
    $borderSize?: number
    $color?: ColorsShortTypes | LibColorsTypes | string
    $speed?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: ${({ $borderSize }) => $borderSize}px solid transparent;
    border-bottom-color: ${Mixins.AllColors};
    animation: ${Spin} ${({ $speed }) => $speed}ms linear infinite;
`

export { StyledLoader }
