/*=============================================== InputCounter styles ===============================================*/

import styled from "styled-components"

import {
    FontFamilies,
    FontSizes,
    FontWeights,
    Mixins,
    Radiuses,
    ThemeDark,
    ThemeLight,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledInputCounter = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};
`

const Input = styled.input`
    width: 32px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    border: none;
    font-family: ${FontFamilies.Body};
    font-size: ${FontSizes.Titles.H6};
    text-align: center;
    font-weight: ${FontWeights.Black};
    color: ${({ theme }) => theme.Font};

    &.is-editable {
        width: 48px;
        background-color: ${({ theme }) => theme.Background};
        border: 1px solid ${({ theme }) => theme.Gray200};
        -moz-appearance: textfield;
        border-radius: ${Radiuses.S};
        outline: none;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:focus {
            border-color: ${({ theme }) => theme.Primary500};
        }

        &:disabled,
        &.disabled {
            background-color: ${({ theme }) => theme.Gray100};
        }
    }

    &:disabled,
    &.disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.Gray500};
    }

    &[data-background="light"].is-editable {
        background-color: ${ThemeLight.Background};
        color: ${ThemeLight.Font};

        &:disabled,
        &.disabled {
            background-color: ${ThemeLight.Gray100};
            color: ${ThemeLight.Gray500};
        }
    }

    &[data-background="dark"].is-editable {
        background-color: ${ThemeDark.Background};
        color: ${ThemeDark.Font};

        &:disabled,
        &.disabled {
            background-color: ${ThemeDark.Gray100};
            color: ${ThemeDark.Gray500};
        }
    }
`

setDefaultTheme([StyledInputCounter, Input])

export { StyledInputCounter, Input }
