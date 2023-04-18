/*=============================================== CodeContainer styles ===============================================*/

import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"

import {
    FontFamilies,
    LineHeights,
    FontSizes,
    Spacers,
    ThemeLight,
    Mixins,
    ButtonIcon,
} from "../../"
import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseCodeContainer = styled.div`
    position: relative;
    overflow-x: scroll;
    padding: ${Spacers.M};
    background-color: ${ThemeLight.Gray800};
    ${Mixins.HideScrollbar}
`

const StyledCodeContainer = styled(BaseCodeContainer)<{
    $color?: AllColorsTypes
}>`
    & > code {
        color: ${({ $color, theme }) => $color && theme.AllColors({ $color })};
    }
`

const BaseCode = styled(SyntaxHighlighter)`
    background-color: transparent !important;
    font-family: ${FontFamilies.Code};
    line-height: ${LineHeights.Code};
    font-size: ${FontSizes.Small};
    padding: 0 !important;
    white-space: pre;
    line-height: ${LineHeights.Code};
    ${Mixins.HideScrollbar}

    & > code {
        background-color: transparent !important;
        line-height: ${LineHeights.Code};
    }
`

const Code = styled(BaseCode)<{
    $color?: AllColorsTypes
}>`
    color: ${({ $color, theme }) => $color && theme.AllColors({ $color })};

    & > code {
        color: ${({ theme, $color }) => $color && theme.AllColors({ $color })};
    }
`

const StyledButtonIcon = styled(ButtonIcon)`
    position: absolute;
    top: ${Spacers.S};
    right: ${Spacers.M};
`

setDefaultTheme([StyledCodeContainer, Code, StyledButtonIcon])

export { StyledCodeContainer, Code, StyledButtonIcon }
