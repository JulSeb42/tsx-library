/*=============================================== MarkdownEditor styles ===============================================*/

import styled from "styled-components"
import MDEditor from "@uiw/react-md-editor"

import { Transitions, Radiuses, Spacers, FontFamilies } from "../../Variables"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ValidationTypes, ColorsHoverTypes } from "../../utils/common-types"

const StyledContainer = styled.div<{ $accentColor?: ColorsHoverTypes }>`
    .wmde-markdown-var {
        --color-accent-fg: ${({ $accentColor, theme }) =>
            theme.AllColors({ $color: $accentColor })};
    }
`

const Editor = styled(MDEditor)<{
    $validation?: ValidationTypes
    $isFocus?: boolean
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: "light" | "dark"
}>`
    box-shadow: none;
    border: 1px solid
        ${({ $isFocus, $accentColor, $validation, theme }) =>
            $isFocus
                ? $validation === "not-passed"
                    ? theme.Danger500
                    : theme.AllColors({ $color: $accentColor })
                : theme.Gray200};
    transition: ${Transitions.Short};
    border-radius: ${Radiuses.S};
    overflow: hidden;
    background-color: ${({ theme }) => theme.Background};

    .w-md-editor-toolbar {
        background-color: ${({ theme }) => theme.Gray50};
        border-bottom-color: ${({ theme }) => theme.Gray200};
    }

    & * {
        border-radius: 0;
    }

    .w-md-editor-toolbar {
        border-radius: 0;

        li > button {
            color: ${({ $accentColor, theme }) =>
                theme.ColorsHoverDefault({ $color: $accentColor })};

            &:hover {
                color: ${({ $accentColor, theme }) =>
                    theme.ColorsHoverHover({ $color: $accentColor })};
            }

            &:active {
                color: ${({ $accentColor, theme }) =>
                    theme.ColorsHoverActive({ $color: $accentColor })};
            }
        }
    }

    .w-md-editor-content,
    .w-md-editor-aree {
        border-radius: 0 !important;
        overflow-y: scroll;
    }

    .wmde-markdown-color pre {
        display: none;
    }

    textarea {
        background-color: ${({ $validation, theme }) =>
            $validation === "not-passed" && theme.Danger50};
        padding: ${Spacers.XS};
        font-family: ${FontFamilies.Body} !important;
        color: ${({ $backgroundColor, theme }) =>
            $backgroundColor === "dark" ? theme.White : theme.Black};
        -webkit-text-fill-color: ${({ $backgroundColor, theme }) =>
            $backgroundColor === "dark" ? theme.White : theme.Black};
        overflow-y: scroll;
    }

    .w-md-editor-bar {
        margin-top: 0;
        bottom: ${Spacers.XS};
        right: ${Spacers.XS};
    }
`

setDefaultTheme([StyledContainer, Editor])

export { StyledContainer, Editor }
