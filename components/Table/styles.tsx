/*=============================================== Table styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import { FontCommon } from "../Text/styles"

import { TextAlignTypes } from "../../utils/common-types"

import { TableStyleTypes, VAlignTypes } from "./types"

const StyledTable = styled.table<{
    $tableStyle?: TableStyleTypes
    $textAlign?: TextAlignTypes
    $vAlign?: VAlignTypes
}>`
    ${FontCommon({ $defaultSize: "small" })};
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: ${Variables.FontSizes.Small};
    table-layout: fixed;
    width: 100%;
    text-align: ${({ $textAlign }) => $textAlign};

    td,
    th {
        padding: ${Variables.Spacers.XXS} ${Variables.Spacers.XS};
        text-align: left;
        display: table-cell;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        vertical-align: ${({ $vAlign }) => $vAlign};

        &::-webkit-scrollbar {
            display: none;
        }

        & > * {
            font-size: ${Variables.FontSizes.Small};
        }

        @media ${Variables.Breakpoints.Mobile} {
            display: block;
        }
    }

    thead {
        text-align: left;
        background-color: ${Variables.Colors.Primary500};
        color: ${Variables.Colors.White};

        a {
            color: ${Variables.Colors.White};
        }
    }

    ${({ $tableStyle }) =>
        $tableStyle === "bordered"
            ? css`
                  border: 1px solid ${Variables.Colors.Gray200};

                  thead th:not(:last-child) {
                      border-right: 1px solid ${Variables.Colors.White};
                  }

                  td {
                      border: 1px solid ${Variables.Colors.Gray200};
                  }
              `
            : $tableStyle === "stripped" &&
              css`
                  tbody tr:nth-child(even) {
                      background-color: ${Variables.Colors.Gray50};
                  }
              `}
`

export { StyledTable }
