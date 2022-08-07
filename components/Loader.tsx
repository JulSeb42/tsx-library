/*=============================================== Loader ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { keyframes } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { ColorsShortTypes, LibColorsTypes } from "./common-types"

/*==================== Component ====================*/

const Loader = ({ options, ...props }: Props) => (
    <Container
        $size={options?.size || 48}
        $borderSize={options?.borderSize || 8}
        $speed={options?.speed || 1000}
        $color={options?.color || "primary"}
        {...props}
    />
)

export default Loader

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $size?: number
    $borderSize?: number
    $color?: ColorsShortTypes | LibColorsTypes | string
    $speed?: number
}

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    options?: {
        size?: number
        borderSize?: number
        color?: ColorsShortTypes | LibColorsTypes | string
        speed?: number
    }
}

/*==================== Styles ====================*/

const Spin = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg);
    }
`

const Container = styled.span<StyleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: ${({ $borderSize }) => $borderSize}px solid transparent;
    border-bottom-color: ${Mixins.AllColors};
    animation: ${Spin} ${({ $speed }) => $speed}ms linear infinite;
`
