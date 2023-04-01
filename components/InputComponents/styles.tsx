/*=============================================== Input components styles ===============================================*/

import styled, { css } from "styled-components"

import {
    ThemeLight,
    ThemeDark,
    FontSizes,
    FontFamilies,
    Spacers,
    Radiuses,
    Mixins,
} from "../../"
import type {
    ValidationTypes,
    ColorsHoverTypes,
    ColorsInputTypes,
} from "../../types"
import type { InputBackgroundTypes, InputVariantTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

interface BaseInputProps {
    $validation?: ValidationTypes
    $backgroundColor?: InputBackgroundTypes
    $accentColor?: ColorsHoverTypes
    $disabled?: boolean
    $isFocus?: boolean
    $hasIcon?: boolean
    $variant?: InputVariantTypes
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
    $variant,
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
    border-radius: ${$variant === "pill" ? Radiuses.Round : Radiuses.S};
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    padding: ${$variant === "pill" ? `0 ${Spacers.S}` : `0 ${Spacers.XS}`};
    padding-left: ${$hasIcon &&
    ($variant === "pill"
        ? `calc(40px + ${Spacers.XS})`
        : `calc(${ConstantValues.InputHeight}px + ${Spacers.XS})`)};
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
                ? ThemeDark.Gray400
                : $backgroundColor === "light"
                ? ThemeLight.Gray400
                : theme.Gray400};
    }
`

const RightContainer = styled.span<{
    $disabled?: boolean
    $variant?: InputVariantTypes
}>`
    position: absolute;
    top: 0;
    right: 0;
    height: ${ConstantValues.InputHeight}px;
    padding: 0
        ${({ $variant }) => ($variant === "pill" ? Spacers.S : Spacers.XS)};
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

const IconContainer = styled.span<{
    $color?: ColorsInputTypes
    $variant?: InputVariantTypes
}>`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: ${({ $variant }) =>
        $variant === "pill"
            ? `calc(${Spacers.XS} + ${ConstantValues.InputHeight}px)`
            : `${ConstantValues.InputHeight}px`};
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
