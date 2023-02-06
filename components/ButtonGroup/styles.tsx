/*=============================================== ButtonGroup styles ===============================================*/

import styled, { css } from "styled-components"

import { Button, Mixins, ButtonIcon } from "../../"
import { AllColorsTypes, ColorsHoverTypes, RadiusesTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledButtonGroup = styled.div<{
    $borders?: ColorsHoverTypes
    $borderRadius?: RadiusesTypes
    $hasBorders?: boolean
}>`
   ${Mixins.BorderRadius};
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

const ButtonStyles = css`
    border-radius: 0;
    height: 100%;
`

const StyledButton = styled(Button)`
    ${ButtonStyles}
`

const StyledButtonIcon = styled(ButtonIcon)`
    ${ButtonStyles}
`

const Separator = styled.span<{ $color?: AllColorsTypes }>`
    height: 100%;
    background-color: ${({ theme, $color }) =>
        theme.ColorsHoverDefault({ $color: $color })};
    width: 1px;
`

setDefaultTheme([StyledButtonGroup, StyledButton, StyledButtonIcon, Separator])

export { StyledButtonGroup, StyledButton, StyledButtonIcon, Separator }
