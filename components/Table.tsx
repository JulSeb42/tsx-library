/*=============================================== Table ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import { FontCommon } from "./Text"

import { TextAlignTypes } from "./common-types"

/*==================== Component ====================*/

const Table = ({ options, children, ...props }: Props) => (
    <Container
        $tableStyle={options?.variant || "bordered"}
        $textAlign={options?.textAlign}
        $vAlign={options?.vAlign || "top"}
        {...props}
    >
        {children}
    </Container>
)

export default Table

/*==================== Types ====================*/

const tableStyle = {
    bordered: "bordered",
    stripped: "stripped",
} as const

type TableStyleTypes = keyof typeof tableStyle

const vAlign = {
    baseline: "baseline",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    sub: "sub",
    "text-top": "text-top",
} as const

type VAlignTypes = keyof typeof vAlign

interface StyleProps extends React.HTMLAttributes<HTMLTableElement> {
    $tableStyle?: TableStyleTypes
    $textAlign?: TextAlignTypes
    $vAlign?: VAlignTypes
}

interface Props extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode | React.ReactNode[]
    options?: {
        variant?: TableStyleTypes
        textAlign?: TextAlignTypes
        vAlign?: VAlignTypes
    }
}

/*==================== Styles ====================*/

const Container = styled.table<StyleProps>`
    ${FontCommon};
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
