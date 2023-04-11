/*=============================================== Table styles ===============================================*/

import styled, { css } from "styled-components"

import { Breakpoints, Spacers, FontSizes, Mixins } from "../../"
import { FontCommon } from "../Text/styles"
import type {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
} from "../../types"
import type { TableStyleTypes, TableVerticalAlignTypes } from "./types"
import type { LinkStyleTypes } from "../Text/types"

import { setDefaultTheme } from "../../utils"

const StyledTable = styled.table<{
    $tableStyle?: TableStyleTypes
    $textAlign?: TextAlignTypes
    $vAlign?: TableVerticalAlignTypes
    $headerBackground?: ColorsHoverTypes
    $headerTextColor?: AllColorsTypes
    $textColor?: AllColorsTypes
    $borderColor?: AllColorsTypes
    $headerBorderColor?: AllColorsTypes
    $backgroundEven?: AllColorsTypes
    $backgroundOdd?: AllColorsTypes
    $textColorEven?: AllColorsTypes
    $textColorOdd?: AllColorsTypes
    $linkStylesHead?: LinkStyleTypes
    $linkStylesBody?: LinkStyleTypes
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
            theme.AllColors({ $color: $headerTextColor })};
        ${({ $linkStylesHead }) =>
            FontCommon({ $linkStyles: $linkStylesHead })};
    }

    tbody {
        ${({ $linkStylesBody }) =>
            FontCommon({ $linkStyles: $linkStylesBody })};
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
                  border: 1px solid ${theme.AllColors({ $color: $borderColor })};

                  thead th:not(:last-child) {
                      border-right: 1px solid
                          ${theme.AllColors({
                              $color: $headerBorderColor,
                          })};
                  }

                  td {
                      border: 1px solid
                          ${theme.AllColors({ $color: $borderColor })};
                  }
              `
            : $tableStyle === "stripped"
            ? css`
                  tbody tr:nth-child(odd) {
                      background-color: ${theme.AllColors({
                          $color: $backgroundOdd,
                      })};
                      color: ${theme.AllColors({
                          $color: $textColorOdd,
                      })};
                  }

                  tbody tr:nth-child(even) {
                      background-color: ${theme.AllColors({
                          $color: $backgroundEven,
                      })};
                      color: ${theme.AllColors({ $color: $textColorEven })};
                  }
              `
            : $tableStyle === "border-bottom" &&
              css`
                  tbody tr {
                      border-bottom: 1px solid
                          ${theme.AllColors({ $color: $borderColor })};
                  }
              `}
`

setDefaultTheme([StyledTable])

export { StyledTable }
