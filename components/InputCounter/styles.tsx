/*=============================================== InputCounter styles ===============================================*/

import styled, { css } from "styled-components"

import {
    FontFamilies,
    FontWeights,
    FontSizes,
    Radiuses,
    ThemeLight,
    ThemeDark,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { InputBackgroundTypes } from "../Input/types"

import { ColorsHoverTypes } from "../../utils/common-types"

const StyledInputCounter = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}
`

const Input = styled.input<{
    $isEditable: boolean
    $accentColor?: ColorsHoverTypes
    $disabled?: boolean
    $backgroundColor?: InputBackgroundTypes
}>`
    width: ${({ $isEditable }) => ($isEditable ? 48 : 32)}px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    border: none;
    font-family: ${FontFamilies.Body};
    font-size: ${FontSizes.Titles.H6};
    text-align: center;
    font-weight: ${FontWeights.Black};
    color: ${({ $disabled, theme, $backgroundColor, $isEditable }) =>
        $disabled
            ? theme.Gray500
            : $isEditable
            ? $backgroundColor === "dark"
                ? ThemeDark.Font
                : $backgroundColor === "light"
                ? ThemeLight.Font
                : theme.Font
            : theme.Font};

    ${({ $isEditable, $accentColor, $backgroundColor, theme }) =>
        $isEditable &&
        css`
            border: 1px solid ${theme.Gray200};
            -moz-appearance: textfield;
            border-radius: ${Radiuses.S};
            outline: none;
            background-color: ${$backgroundColor === "dark"
                ? ThemeDark.Background
                : $backgroundColor === "light"
                ? ThemeLight.Background
                : theme.Background};

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &:focus {
                border-color: ${theme.AllColors({ $color: $accentColor })};
            }

            &:disabled {
                cursor: not-allowed;
                background-color: ${theme.Gray50};
                color: ${theme.Gray500};
            }
        `}
`

setDefaultTheme([StyledInputCounter, Input])

export { StyledInputCounter, Input }
