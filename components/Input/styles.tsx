/*=============================================== Input styles ===============================================*/

import styled, { css } from "styled-components"

import setDefaultTheme from "../../utils/setDefaultTheme"
import {
    Breakpoints,
    FontSizes,
    LineHeights,
    Spacers,
    ThemeDark,
    ThemeLight,
    Transitions,
} from "../../Variables"
import { InputBaseMixin } from "../InputComponents"

import { ColorsHoverTypes, ValidationTypes } from "../../utils/common-types"
import { InputBackgroundTypes, InputTypesTypes } from "./types"

const StyledInputContent = styled.div`
    width: 100%;
    position: relative;
`

const inputHeight = 32

const StyledInput = styled.input<{
    $type?: InputTypesTypes
    $validation?: ValidationTypes
    $iconCalendar?: string
    $iconClock?: string
    $showHttp?: boolean
    $hasIcon?: boolean
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    ${({ $accentColor, $backgroundColor, $hasIcon, $validation }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $backgroundColor: $backgroundColor,
            $hasIcon: $hasIcon,
            $validation: $validation,
        })};

    ${({ $type }) =>
        ($type === "color" || $type === "file") &&
        css`
            cursor: pointer;
        `}

    ${({ $type }) =>
        $type === "search" &&
        css`
            &::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
            }
        `}
              
    ${({ $type }) =>
        $type === "file" &&
        css`
            padding: 0;

            &::file-selector-button {
                height: 100%;
                background-color: ${({ theme }) => theme.Gray100};
                color: ${({ theme }) => theme.Font};
                border: none;
                height: 100%;
                padding: 0 ${Spacers.XS};
                line-height: 100%;
                transition: ${Transitions.Short};
                cursor: pointer;
            }

            @media ${Breakpoints.Hover} {
                &:hover::file-selector-button {
                    background-color: ${({ theme }) => theme.Gray300};
                }

                &:disabled:hover::file-selector-button {
                    background-color: ${({ theme }) => theme.Gray100};
                    color: ${({ theme }) => theme.Gray500};
                    cursor: not-allowed;
                }
            }

            &:disabled::file-selector-button {
                color: ${({ theme }) => theme.Gray500};
            }
        `}

    ${({ $type, $hasIcon, $showHttp }) =>
        $type === "url" &&
        $showHttp &&
        css`
            padding-left: ${$hasIcon ? 53 + inputHeight : 53}px;
        `}

    ${({ $type, $iconCalendar, $iconClock, $accentColor, theme, $validation }) =>
        ($type === "date" ||
            $type === "datetime-local" ||
            $type === "month" ||
            $type === "week" ||
            $type === "time") &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                right: ${$validation === "not-passed" && "24px"};
                position: relative;

                ${$type !== "time" &&
                ($iconCalendar
                    ? theme.Icon({
                          $name: $iconCalendar,
                          $color: $accentColor,
                          $size: 16,
                      })
                    : theme.LibIcon({
                          $name: "calendar",
                          $color: $accentColor,
                          $size: 16,
                      }))};

                ${$type === "time" &&
                ($iconClock
                    ? theme.Icon({
                          $name: $iconClock,
                          $color: $accentColor,
                          $size: 16,
                      })
                    : theme.LibIcon({
                          $name: "clock",
                          $color: $accentColor,
                          $size: 16,
                      }))}

                cursor: pointer;
                transform: translateX(1px);
                transition: ${Transitions.Short};

                @media ${Breakpoints.Hover} {
                    &:hover {
                        background-color: ${theme.ColorsHoverHover({
                            $color: $accentColor,
                        })};
                    }

                    &:active {
                        background-color: ${theme.ColorsHoverActive({
                            $color: $accentColor,
                        })};
                    }
                }
            }
        `}

    ${({ $type }) =>
        $type === "select" &&
        css`
            padding: 0 ${Spacers.XS};
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}

    ${({ $type }) =>
        $type === "textarea" &&
        css`
            height: inherit;
            min-height: calc(
                ${FontSizes.Body} * ${LineHeights.Regular} * 4 + ${Spacers.XXS} *
                    2
            );
            resize: vertical;
        `}
`

const UrlContainer = styled.span<{
    $hasIcon?: boolean
    $disabled?: boolean
    $backgroundColor?: InputBackgroundTypes
}>`
    position: absolute;
    left: 0;
    top: 0;
    height: ${inputHeight}px;
    z-index: 5;
    line-height: ${inputHeight}px;
    padding-left: ${Spacers.XS};
    color: ${({ theme, $backgroundColor, $disabled }) =>
        $disabled
            ? theme.Gray500
            : $backgroundColor === "dark"
            ? ThemeDark.Background
            : $backgroundColor === "light"
            ? ThemeLight.Background
            : theme.Font};

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}

    ${({ $hasIcon }) =>
        $hasIcon &&
        css`
            padding-left: calc(${inputHeight}px + ${Spacers.XS});
        `}
`

setDefaultTheme([StyledInputContent, StyledInput, UrlContainer])

export { StyledInputContent, StyledInput, UrlContainer }
