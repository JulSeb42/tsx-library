/*=============================================== CodeContainer styles ===============================================*/

import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

const StyledCodeContainer = styled.div`
    background-color: ${Variables.Colors.Gray800};
    position: relative;
    overflow-x: scroll;
    padding: ${Variables.Spacers.M};
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Code = styled(SyntaxHighlighter)`
    background-color: transparent !important;
    font-family: ${Variables.FontFamilies.Code};
    line-height: ${Variables.LineHeights.Code};
    font-size: ${Variables.FontSizes.Small};
    padding: 0 !important;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > code {
        background-color: transparent !important;
    }
`

const buttonSize = 32

const Button = styled.button<{ $hasCopied: boolean }>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: absolute;
    right: ${Variables.Spacers.M};
    top: 12px;
    background-color: ${({ $hasCopied }) =>
        $hasCopied ? Variables.Colors.Success500 : Variables.Colors.White};
    color: ${({ $hasCopied }) =>
        $hasCopied ? Variables.Colors.White : Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $hasCopied }) =>
                $hasCopied
                    ? Variables.Colors.Success300
                    : Variables.Colors.Gray300};
        }

        &:active {
            background-color: ${({ $hasCopied }) =>
                $hasCopied
                    ? Variables.Colors.Success600
                    : Variables.Colors.Gray100};
        }
    }
`

export { StyledCodeContainer, Code, Button }
