/*=============================================== Datepicker styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Spacers,
    Radiuses,
    Breakpoints,
    ThemeDark,
    ThemeLight,
    FontSizes,
    Mixins,
} from "../../"
import { InputBaseMixin } from "../InputComponents"
import { ColorsHoverTypes, ShadowsTypes, ValidationTypes } from "../../types"
import {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"
import { ListDirectionTypes } from "../ListInputs/types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const buttonSize = 32
const buttonMobile = 24

const DatepickerContainer = styled.div<{
    disabled?: boolean
    $isOpen: boolean
}>`
    position: relative;
    width: 100%;
    height: ${buttonSize}px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    z-index: ${({ $isOpen }) => ($isOpen ? 30 : 0)};
`

const Selected = styled.span<{
    $isOpen?: boolean
    $accentColor?: ColorsHoverTypes
    $disabled?: boolean
    $backgroundColor?: InputBackgroundTypes
    $validation?: ValidationTypes
    $hasIcon?: boolean
    $variant?: InputVariantTypes
}>`
    ${({
        $accentColor,
        $isOpen,
        $disabled,
        $backgroundColor,
        $validation,
        $hasIcon,
        $variant,
    }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $isFocus: $isOpen,
            $disabled: $disabled,
            $backgroundColor: $backgroundColor,
            $validation: $validation,
            $hasIcon: $hasIcon,
            $variant: $variant,
        })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
`

const StyledDatepicker = styled.div<{
    $accentColor?: ColorsHoverTypes
    $isOpen?: boolean
    $calendarDirection?: ListDirectionTypes
    $variant?: "bordered" | "shadow"
    $shadow?: ShadowsTypes
    $backgroundColor?: InputBackgroundTypes
    $validation?: ValidationTypes
}>`
    border-radius: ${Radiuses.M};
    width: 100%;
    max-width: 400px;
    overflow: hidden;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: absolute;
    left: 0;
    overflow-x: scroll;
    ${Mixins.HideScrollbar};

    ${({ $calendarDirection }) =>
        $calendarDirection === "up"
            ? css`
                  bottom: ${buttonSize}px;
              `
            : css`
                  top: ${buttonSize}px;
              `}

    ${({ $variant, $accentColor, $validation, $shadow, $isOpen }) =>
        $variant === "bordered"
            ? css`
                  border: 1px solid
                      ${({ theme }) =>
                          $validation === "not-passed"
                              ? theme.Danger500
                              : theme.AllColors({ $color: $accentColor })};
              `
            : $variant === "shadow" &&
              css`
                  ${$isOpen ? Mixins.Shadow({ $shadow: $shadow }) : ""}
              `}
`

const Header = styled.div<{
    $accentColor?: ColorsHoverTypes
    $validation?: ValidationTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    padding: ${Spacers.XS};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    text-align: center;
    background-color: ${({ theme, $accentColor, $validation }) =>
        $validation === "not-passed"
            ? theme.Danger500
            : theme.AllColors({ $color: $accentColor })};
    color: ${({ theme, $accentColor }) =>
        $accentColor === "white" ? theme.Primary500 : theme.Background};
`

const NavButton = styled.button<{
    $accentColor?: ColorsHoverTypes
    $validation?: ValidationTypes
}>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${Radiuses.Circle};
    padding: 0;
    border: none;
    background-color: transparent;
    color: currentColor;

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ theme, $accentColor, $validation }) =>
                $validation === "not-passed"
                    ? theme.Danger300
                    : theme.ColorsHoverHover({ $color: $accentColor })};
        }

        &:not(:disabled):active {
            background-color: ${({ theme, $accentColor, $validation }) =>
                $validation === "not-passed"
                    ? theme.Danger600
                    : theme.ColorsHoverActive({ $color: $accentColor })};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }
`

const Empty = styled.span`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
`

const DaysContainer = styled.div<{ $backgroundColor?: InputBackgroundTypes }>`
    ${Mixins.Grid({
        $col: 7,
        $gap: "xs",
        $padding: "xs",
        $justifyItems: "center",
    })};
    background-color: ${({ $backgroundColor, theme }) =>
        $backgroundColor === "dark"
            ? ThemeDark.Background
            : $backgroundColor === "light"
            ? ThemeLight.Background
            : theme.Background};
    color: ${({ $backgroundColor, theme }) =>
        $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};
`

const Day = styled.button<{
    $isToday?: boolean
    $isActive?: boolean
    $accentColor?: ColorsHoverTypes
    $validation?: ValidationTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    padding: 0;
    border: 1px solid
        ${({ $isToday, $accentColor, theme, $validation }) =>
            $isToday
                ? $validation === "not-passed"
                    ? theme.Danger500
                    : theme.ColorsHoverDefault({ $color: $accentColor })
                : "transparent"};
    border-radius: ${Radiuses.Circle};
    background-color: ${({ $isActive, $accentColor, theme, $validation }) =>
        $isActive
            ? $validation === "not-passed"
                ? theme.Danger500
                : theme.ColorsHoverDefault({ $color: $accentColor })
            : "transparent"};
    color: ${({ $isActive, theme, $backgroundColor }) =>
        $isActive
            ? $backgroundColor === "dark"
                ? ThemeDark.Background
                : $backgroundColor === "light"
                ? ThemeLight.Background
                : theme.Background
            : $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};
    font-size: ${FontSizes.Small};

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ theme, $accentColor, $validation }) =>
                $validation === "not-passed"
                    ? theme.Danger300
                    : theme.ColorsHoverHover({ $color: $accentColor })};
            color: ${({ theme, $backgroundColor }) =>
                $backgroundColor === "dark"
                    ? ThemeDark.Background
                    : $backgroundColor === "light"
                    ? ThemeLight.Background
                    : theme.Background};
        }

        &:not(:disabled):active {
            background-color: ${({ theme, $accentColor, $validation }) =>
                $validation === "not-passed"
                    ? theme.Danger600
                    : theme.ColorsHoverActive({ $color: $accentColor })};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }

    @media ${Breakpoints.Mobile} {
        width: ${buttonMobile}px;
        height: ${buttonMobile}px;
    }
`

setDefaultTheme([
    DatepickerContainer,
    Selected,
    StyledDatepicker,
    Header,
    NavButton,
    Empty,
    DaysContainer,
    Day,
])

export {
    DatepickerContainer,
    Selected,
    StyledDatepicker,
    Header,
    NavButton,
    Empty,
    DaysContainer,
    Day,
}
