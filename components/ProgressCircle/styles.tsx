/*=============================================== ProgressCircle styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import { AllColorsTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const ProgressCircleContainer = styled.span`
    position: relative;
`

const StyledProgressCircle = styled.svg``

const Circle = styled.circle<{ $color?: AllColorsTypes; $speed?: number }>`
    stroke: ${({ $color, theme }) => theme.AllColors({ $color: $color })};
    transition: all ${({ $speed }) => $speed}ms ease-in-out;
`

const Content = styled.span<{ $size?: number }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    position: absolute;
    top: 0;
    left: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

setDefaultTheme([
    ProgressCircleContainer,
    StyledProgressCircle,
    Circle,
    Content,
])

export { ProgressCircleContainer, StyledProgressCircle, Circle, Content }
