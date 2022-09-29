/*=============================================== CodeContainer styles ===============================================*/

import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"

import {
    FontFamilies,
    LineHeights,
    FontSizes,
    Spacers,
    ThemeLight,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes } from "../../utils/common-types"

const StyledCodeContainer = styled.div<{
    $backgroundColor?: AllColorsTypes
    $textColor?: AllColorsTypes
}>`
    background-color: ${ThemeLight.Gray800};
    position: relative;
    overflow-x: scroll;
    padding: ${Spacers.M};
    ${Mixins.HideScrollbar};
`

const Code = styled(SyntaxHighlighter)<{
    $textColor?: AllColorsTypes
}>`
    background-color: transparent !important;
    font-family: ${FontFamilies.Code};
    line-height: ${LineHeights.Code};
    font-size: ${FontSizes.Small};
    padding: 0 !important;
    ${Mixins.HideScrollbar};
    color: ${({ $textColor, theme }) =>
        $textColor && theme.AllColors({ $color: $textColor })};
    white-space: pre;
    line-height: ${LineHeights.Code};

    & > code {
        background-color: transparent !important;
        line-height: ${LineHeights.Code};

        color: ${({ theme, $textColor }) =>
            $textColor && theme.AllColors({ $color: $textColor })};
    }
`

setDefaultTheme([StyledCodeContainer, Code])

export { StyledCodeContainer, Code }
