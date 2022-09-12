/*=============================================== Input components styles ===============================================*/

import styled, { css } from "styled-components"

import {
    ThemeLight,
    ThemeDark,
    FontSizes,
    FontFamilies,
    Spacers,
    Radiuses,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    ValidationTypes,
    ColorsHoverTypes,
    ColorsInputTypes,
} from "../../utils/common-types"
import { InputBackgroundTypes } from "../Input/types"

interface BaseInputProps {
    $validation?: ValidationTypes
    $backgroundColor?: InputBackgroundTypes
    $accentColor?: ColorsHoverTypes
    $disabled?: boolean
    $isFocus?: boolean
    $hasIcon?: boolean
}

const ConstantValues = {
    InputHeight: 32,
    ListItemHeight: 40,
}

const InputBaseMixin = ({
    $validation,
    $backgroundColor,
    $accentColor,
    $disabled,
    $isFocus,
    $hasIcon,
}: BaseInputProps) => css`
    width: 100%;
    height: ${ConstantValues.InputHeight}px;
    position: relative;
    border: 1px solid
        ${({ theme }) =>
            $isFocus
                ? $validation === "not-passed"
                    ? theme.Danger500
                    : theme.AllColors({ $color: $accentColor })
                : theme.Gray200};
    background-color: ${({ theme }) =>
        $validation === "not-passed"
            ? $backgroundColor === "dark"
                ? ThemeDark.Danger50
                : $backgroundColor === "light"
                ? ThemeLight.Danger50
                : theme.Danger50
            : $disabled
            ? theme.Gray100
            : $backgroundColor === "dark"
            ? ThemeDark.Background
            : $backgroundColor === "light"
            ? ThemeLight.Background
            : theme.Background};
    border-radius: ${Radiuses.S};
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    padding: ${Spacers.XS};
    padding-left: ${$hasIcon && `calc(${ConstantValues.InputHeight}px + ${Spacers.XS})`};
    color: ${({ theme }) =>
        $disabled
            ? theme.Gray500
            : $validation === "not-passed"
            ? $backgroundColor === "dark"
                ? ThemeDark.Font
                : $backgroundColor === "light"
                ? ThemeLight.Font
                : theme.Font
            : $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};
    line-height: 100%;
    outline: none;
    position: relative;
    z-index: 2;

    &:focus {
        border-color: ${({ theme }) =>
            $validation === "not-passed"
                ? theme.Danger500
                : theme.AllColors({ $color: $accentColor })};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.Gray100};
        color: ${({ theme }) => theme.Gray500};

        &::placeholder {
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &::placeholder {
        color: ${({ theme }) =>
            $backgroundColor === "dark"
                ? ThemeDark.Gray200
                : $backgroundColor === "light"
                ? ThemeLight.Gray200
                : theme.Gray200};
    }
`

const RightContainer = styled.span<{ $disabled?: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    height: ${ConstantValues.InputHeight}px;
    padding: 0 ${Spacers.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    gap: ${Spacers.XS};
    z-index: 10;

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`

const IconContainer = styled.span<{ $color?: ColorsInputTypes }>`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: ${ConstantValues.InputHeight}px;
    height: ${ConstantValues.InputHeight}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    color: ${({ theme }) => theme.AllColors};

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${({ theme }) => theme.Gray200};
    }
`

setDefaultTheme([InputBaseMixin, RightContainer, IconContainer])

export { InputBaseMixin, RightContainer, IconContainer, ConstantValues }
