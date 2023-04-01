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
} from "../../"
import type { AllColorsTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledCodeContainer = styled.div<{
    $backgroundColor?: AllColorsTypes
    $textColor?: AllColorsTypes
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        $backgroundColor
            ? theme.AllColors({ $color: $backgroundColor })
            : ThemeLight.Gray800};
    position: relative;
    overflow-x: scroll;
    padding: ${Spacers.M};
    ${Mixins.HideScrollbar};

    & > code {
        color: ${({ $textColor, theme }) =>
            theme.AllColors({ $color: $textColor })};
    }
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
