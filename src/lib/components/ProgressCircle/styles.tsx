/*=============================================== ProgressCircle styles ===============================================*/

import styled from "styled-components"

import { Mixins, Text } from "../../"
import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

export const PROGRESS_CIRCLE_SIZE = 64

const ProgressCircleContainer = styled.span`
    position: relative;
`

const StyledProgressCircle = styled.svg``

const BaseCircle = styled.circle`
    &.animated {
        transition: all 1000ms ease-in-out;
    }
`

const Circle = styled(BaseCircle)<{ $color?: AllColorsTypes }>`
    stroke: ${({ $color, theme }) => theme.AllColors({ $color })};
`

const Content = styled.span`
    width: ${PROGRESS_CIRCLE_SIZE}px;
    height: ${PROGRESS_CIRCLE_SIZE}px;
    position: absolute;
    top: 0;
    left: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const Value = styled(Text).attrs({ tag: "small" })`
    color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([
    ProgressCircleContainer,
    StyledProgressCircle,
    Circle,
    Content,
    Value,
])

export { ProgressCircleContainer, StyledProgressCircle, Circle, Content, Value }
