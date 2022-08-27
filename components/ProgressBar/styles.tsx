/*=============================================== ProgressBar styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

const Progress = ({ $value }: { $value: number }) => keyframes`
    0% {
        width: 0;
    }

    100% {
        width: ${$value}%;
    }
`

const StyledProgressBar = styled.span<{
    $value: number
    $color?: ColorsShortTypes | LibColorsTypes | string
    $backgroundColor?: ColorsShortTypes | LibColorsTypes | string
    $animated?: boolean
}>`
    width: 100%;
    height: 16px;
    background-color: ${({ $color, $backgroundColor }) =>
        $color === "white"
            ? Variables.Colors.Gray900
            : Mixins.AllColors({ $color: $backgroundColor })};
    border-radius: ${Variables.Radiuses.Round};
    position: relative;
    display: block;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        width: ${({ $value }) => $value}%;
        height: 100%;
        border-radius: ${({ $value }) =>
            $value < 3 ? Variables.Radiuses.Circle : Variables.Radiuses.Round};
        transition: ${Variables.Transitions.Short};
        background-color: ${Mixins.AllColors};

        ${({ $animated, $value }) =>
            $animated === false
                ? css``
                : css`
                      animation: ${Progress({ $value: $value })}
                          calc(${$value} * 50ms) 1;
                  `}
    }
`

export { StyledProgressBar }
