/*=============================================== Table styles ===============================================*/

import styled, { css } from "styled-components"

import { Transitions, Breakpoints, Spacers, FontSizes } from "../../Variables"
import Mixins from "../../Mixins"
import { FontCommon } from "../Text/styles"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
} from "../../utils/common-types"

import { TableStyleTypes, VAlignTypes } from "./types"

const StyledTable = styled.table<{
    $tableStyle?: TableStyleTypes
    $textAlign?: TextAlignTypes
    $vAlign?: VAlignTypes
    $headerBackground?: ColorsHoverTypes
    $headerTextColor?: AllColorsTypes
    $textColor?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $borderColor?: AllColorsTypes
    $headerBorderColor?: AllColorsTypes
    $backgroundEven?: AllColorsTypes
    $backgroundOdd?: AllColorsTypes
    $textColorEven?: AllColorsTypes
    $textColorOdd?: AllColorsTypes
    $linkColorHeader?: ColorsHoverTypes
}>`
    ${FontCommon({
        $defaultSize: "small",
    })};
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    color: ${({ theme, $textColor }) =>
        theme.AllColors({
            $color: $textColor,
        })};

    & > * {
        color: ${({ theme, $textColor }) =>
            theme.AllColors({
                $color: $textColor,
            })};
    }

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }

    td,
    th {
        text-align: ${({ $textAlign }) => $textAlign};
        padding: ${Spacers.XXS} ${Spacers.XS};
        display: table-cell;
        overflow-x: scroll;
        ${Mixins.HideScrollbar};
        vertical-align: ${({ $vAlign }) => $vAlign};

        & > * {
            font-size: ${FontSizes.Small};
        }

        @media ${Breakpoints.Mobile} {
            display: block;
        }
    }

    thead {
        text-align: ${({ $textAlign }) => $textAlign};
        background-color: ${({ $headerBackground, theme }) =>
            theme.AllColors({ $color: $headerBackground })};
        color: ${({ $headerTextColor, theme }) =>
            $headerTextColor
                ? theme.AllColors({ $color: $headerTextColor })
                : theme.Background};

        a {
            color: ${({ $linkColorHeader, theme }) =>
                theme.ColorsHoverDefault({ $color: $linkColorHeader })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ $linkColorHeader, theme }) =>
                        theme.ColorsHoverHover({
                            $color: $linkColorHeader,
                        })};
                }

                &:active {
                    color: ${({ $linkColorHeader, theme }) =>
                        theme.ColorsHoverActive({
                            $color: $linkColorHeader,
                        })};
                }
            }
        }
    }

    ${({
        $tableStyle,
        $borderColor,
        $backgroundEven,
        $backgroundOdd,
        $headerBorderColor,
        $textColorEven,
        $textColorOdd,
        theme,
    }) =>
        $tableStyle === "bordered"
            ? css`
                  border: 1px solid
                      ${$borderColor
                          ? theme.AllColors({ $color: $borderColor })
                          : theme.Gray200};

                  thead th:not(:last-child) {
                      border-right: 1px solid
                          ${$headerBorderColor
                              ? theme.AllColors({
                                    $color: $headerBorderColor,
                                })
                              : theme.Background};
                  }

                  td {
                      border: 1px solid
                          ${$borderColor
                              ? theme.AllColors({ $color: $borderColor })
                              : theme.Gray200};
                  }
              `
            : $tableStyle === "stripped" &&
              css`
                  tbody tr:nth-child(odd) {
                      background-color: ${$backgroundOdd
                          ? theme.AllColors({
                                $color: $backgroundOdd,
                            })
                          : theme.Background};
                      color: ${$textColorOdd
                          ? theme.AllColors({
                                $color: $textColorOdd,
                            })
                          : theme.Font};
                  }

                  tbody tr:nth-child(even) {
                      background-color: ${$backgroundEven
                          ? theme.AllColors({
                                $color: $backgroundEven,
                            })
                          : theme.Gray50};
                      color: ${$textColorEven
                          ? theme.AllColors({ $color: $textColorEven })
                          : theme.Font};
                  }
              `}
`

setDefaultTheme([StyledTable])

export { StyledTable }
