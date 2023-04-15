/*=============================================== ButtonGroup styles ===============================================*/

import styled, { css } from "styled-components"

import { Button, ButtonIcon, Mixins, Radiuses } from "../../"
import type { AllColorsTypes, ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseButtonGroup = styled.div`
    border-radius: ${Radiuses.M};
    overflow: hidden;
    width: fit-content;
    ${Mixins.Flexbox({
        $inline: true,
        $gap: 0,
        $alignItems: "flex-start",
    })};
`

const StyledButtonGroup = styled(BaseButtonGroup)<{
    $color?: ColorsHoverTypes
    $hasBorders?: boolean
}>`
    ${({ $hasBorders, theme }) =>
        $hasBorders &&
        css`
            border: 1px solid ${theme.ColorsHoverDefault};
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
    ${ButtonStyles};
`

const BaseSeparator = styled.span`
    height: 100%;
    width: 1px;
`

const Separator = styled(BaseSeparator)<{ $color?: AllColorsTypes }>`
    background-color: ${({ theme }) => theme.ColorsHoverDefault};
`

setDefaultTheme([StyledButtonGroup, StyledButton, StyledButtonIcon, Separator])

export { StyledButtonGroup, StyledButton, StyledButtonIcon, Separator }
