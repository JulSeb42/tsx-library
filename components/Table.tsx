/*=============================================== Table ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import { FontCommon } from "./Font"

import { TextAlignTypes, ColorsShortTypes, LibColorsTypes } from "./common-types"

/*==================== Component ====================*/

const Table = ({
    tableStyle = "bordered",
    textAlign,
    vAlign,
    children,
    ...props
}: Props) => (
    <Container
        $tableStyle={tableStyle}
        $textAlign={textAlign}
        $vAlign={vAlign}
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
    tableStyle?: TableStyleTypes
    textAlign?: TextAlignTypes
    vAlign?: VAlignTypes
    children: React.ReactNode | React.ReactNode[]
    backgroundHead?: ColorsShortTypes | LibColorsTypes | string
    textColorHead?: ColorsShortTypes | LibColorsTypes | string
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
