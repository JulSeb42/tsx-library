/*=============================================== ButtonGroup styles ===============================================*/

import styled, { css } from "styled-components"

import { Radiuses } from "../../Variables"
import Mixins from "../../Mixins"
import Button from "../Button/component"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"

const StyledButtonGroup = styled.div<{
    $borders?: ColorsHoverTypes
    $hasBorders?: boolean
}>`
    border-radius: ${Radiuses.M};
    overflow: hidden;
    width: fit-content;
    ${Mixins.Flexbox({
        $inline: true,
        $gap: 0,
        $alignItems: "flex-start",
    })};
    height: 42px;

    ${({ $hasBorders, $borders, theme }) =>
        $hasBorders &&
        css`
            border: 1px solid ${theme.ColorsHoverDefault({ $color: $borders })};
        `}
`

const StyledButton = styled(Button)`
    border-radius: 0;
    height: 100%;
`

const Separator = styled.span<{ $color?: AllColorsTypes }>`
    height: 100%;
    background-color: ${({ theme, $color }) =>
        theme.ColorsHoverDefault({ $color: $color })};
    width: 1px;
`

setDefaultTheme([StyledButtonGroup, StyledButton, Separator])

export { StyledButtonGroup, StyledButton, Separator }
