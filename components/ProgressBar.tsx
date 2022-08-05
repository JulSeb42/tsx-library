/*=============================================== ProgressBar ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { keyframes, css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { ColorsShortTypes, LibColorsTypes } from "./common-types"

/*==================== Component ====================*/

const ProgressBar = ({ value, color = "primary", backgroundColor, animated = true, ...props }: Props) => (
    <Container $value={value} $animated={animated} $color={color} $backgroundColor={backgroundColor} {...props} />
)

export default ProgressBar

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $value: number
    $color?: ColorsShortTypes | LibColorsTypes | string
    $backgroundColor?: ColorsShortTypes | LibColorsTypes | string
    $animated?: boolean
}

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    value: number
    color?: ColorsShortTypes | LibColorsTypes | string
    backgroundColor?: ColorsShortTypes | LibColorsTypes | string
    animated?: boolean
}

/*==================== Styles ====================*/

const Progress = ({ $value }: StyleProps) => keyframes`
    0% {
        width: 0;
    }

    100% {
        width: ${$value}%;
    }
`

const Container = styled.span<StyleProps>`
    width: 100%;
    height: 16px;
    background-color: ${({ $color, $backgroundColor }) =>
        $color === "white"
            ? Variables.Colors.Gray900
            : $backgroundColor
            ? Mixins.AllColors({ $color: $backgroundColor })
            : Variables.Colors.Gray100};
    border-radius: ${Variables.Radiuses.Round};
    position: relative;
    display: block;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        width: ${({ $value }) => $value}%;
        height: 100%;
        border-radius: ${({ $value }) => ($value < 3 ? Variables.Radiuses.Circle : Variables.Radiuses.Round)};
        transition: ${Variables.Transitions.Short};
        background-color: ${Mixins.AllColors};

        ${({ $animated, $value }) =>
            $animated &&
            css`
                animation: ${Progress({ $value: $value })} calc(${$value} * 50ms) 1;
            `}
    }
`