/*=============================================== ListInputs styles ===============================================*/

import styled, { css } from "styled-components"

import {
    ThemeDark,
    ThemeLight,
    Radiuses,
    Transitions,
    Mixins,
    Breakpoints,
    Spacers,
    Icon,
} from "../../"
import { ShadowsTypes, ColorsHoverTypes, ValidationTypes } from "../../types"
import { VariantTypes, ListDirectionTypes } from "./types"
import { InputBackgroundTypes } from "../InputComponents/types"
import { ConstantValues } from "../InputComponents/styles"
import ChevronDownIcon from "../../icons/ChevronDownIcon"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledListInputs = styled.div<{
    $isOpen: boolean
    $variant?: VariantTypes
    $shadow?: ShadowsTypes
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
    $validation?: ValidationTypes
    $direction?: ListDirectionTypes
}>`
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 0;
    background-color: ${({ theme, $backgroundColor, $validation }) =>
        $validation === "not-passed"
            ? $backgroundColor === "dark"
                ? ThemeDark.Danger50
                : $backgroundColor === "light"
                ? ThemeLight.Danger50
                : theme.Danger50
            : $backgroundColor === "dark"
            ? ThemeDark.Background
            : $backgroundColor === "light"
            ? ThemeLight.Background
            : theme.Background};
    border-radius: ${Radiuses.M};
    max-height: ${({ $isOpen }) =>
        $isOpen
            ? `${
                  ConstantValues.ListItemHeight * 4 +
                  ConstantValues.InputHeight / 2
              }px`
            : 0};
    transition: ${Transitions.Short};
    overflow-y: scroll;
    ${Mixins.HideScrollbar};

    ${({ $direction, $isOpen }) =>
        $direction === "up"
            ? css`
                  bottom: ${$isOpen ? "12px" : "16px"};
                  padding-bottom: ${$isOpen ? "19px" : 0};
              `
            : css`
                  top: ${$isOpen ? "12px" : "16px"};
                  padding-top: ${$isOpen ? "19px" : 0};
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

const Item = styled.span<{
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
    $validation?: ValidationTypes
    $isActive?: boolean
    $readOnly?: boolean
}>`
    padding: 0 ${Spacers.XS};
    background-color: ${({ $isActive, $accentColor, theme, $validation }) =>
        $isActive
            ? $validation === "not-passed"
                ? theme.Danger500
                : theme.ColorsHoverDefault({ $color: $accentColor })
            : "transparent"};
    color: ${({ $isActive, $accentColor, theme, $backgroundColor }) =>
        $isActive
            ? $accentColor === "white"
                ? theme.Primary500
                : $backgroundColor === "dark"
                ? ThemeDark.Background
                : $backgroundColor === "light"
                ? ThemeLight.Background
                : theme.Background
            : $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};
    transition: ${Transitions.Short};
    height: 40px;
    line-height: 40px;
    display: block;

    ${({ $readOnly, $accentColor, $validation, $backgroundColor, theme }) =>
        !$readOnly
            ? css`
                  cursor: pointer;
                  transition: ${Transitions.Short};

                  @media ${Breakpoints.Hover} {
                      &:hover {
                          background-color: ${({ theme }) =>
                              $validation === "not-passed"
                                  ? theme.Danger300
                                  : theme.ColorsHoverHover({
                                        $color: $accentColor,
                                    })};
                          color: ${({ theme }) =>
                              $accentColor === "white"
                                  ? theme.Primary500
                                  : $backgroundColor === "dark"
                                  ? ThemeDark.Background
                                  : $backgroundColor === "light"
                                  ? ThemeLight.Background
                                  : theme.Background};
                      }

                      &:active {
                          background-color: ${({ theme }) =>
                              $validation === "not-passed"
                                  ? theme.Danger600
                                  : theme.ColorsHoverActive({
                                        $color: $accentColor,
                                    })};
                      }
                  }
              `
            : css`
                  color: ${theme.Gray500};
              `}
`

const IconAnim = ({
    $isOpen,
    $hasAnimation,
}: {
    $isOpen: boolean
    $hasAnimation?: boolean
}) => css`
    transform: ${$isOpen && $hasAnimation && "rotate(180deg)"};
    transition: ${Transitions.Short};
`

const StyledChevronDown = styled(ChevronDownIcon)<{
    $isOpen?: boolean
}>`
    ${({ $isOpen }) =>
        IconAnim({ $isOpen: $isOpen || false, $hasAnimation: true })}
`

const StyledIcon = styled(Icon)<{
    $isOpen?: boolean
    $hasAnimation?: boolean
}>`
    ${({ $isOpen, $hasAnimation }) =>
        IconAnim({ $isOpen: $isOpen || false, $hasAnimation: $hasAnimation })}
`

setDefaultTheme([StyledListInputs, Item, StyledChevronDown, StyledIcon])

export { StyledListInputs, Item, StyledChevronDown, StyledIcon }
