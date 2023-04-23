/*=============================================== Table styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, FontSizes, Mixins, Spacers } from "../../"
import { FontCommon } from "../Text/styles"

import {
    setDefaultTheme,
    generateDataAttributes,
    typeValues,
} from "../../utils"

const StyledTable = styled.table`
    ${FontCommon({
        $fontSize: "small",
        $fontWeight: "regular",
    })}
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    ${generateDataAttributes("vertical-align", Object.keys(typeValues.vAlign), [
        "th",
        "td",
    ])}

    td,
    th {
        padding: ${Spacers.XXS} ${Spacers.XS};
        display: table-cell;
        overflow-x: scroll;
        ${Mixins.HideScrollbar};

        & > * {
            font-size: ${FontSizes.Small};
        }

        @media ${Breakpoints.Mobile} {
            display: block;
        }
    }

    thead {
        background-color: ${({ theme }) => theme.Primary500};
        text-align: left;
        color: ${({ theme }) => theme.Background};

        a {
            color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "background" })};

            &:hover {
                color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "background" })};
            }

            &:active {
                color: ${({ theme }) =>
                    theme.ColorsHoverActive({ $color: "background" })};
            }
        }
    }

    &[data-table-variant="bordered"] {
        border: 1px solid ${({ theme }) => theme.Gray200};

        thead th:not(:last-child) {
            border-right: 1px solid ${({ theme }) => theme.Background};
        }

        td {
            border: 1px solid ${({ theme }) => theme.Gray200};
        }
    }

    &[data-table-variant="stripped"] {
        tbody tr:nth-child(odd) {
            background-color: ${({ theme }) => theme.Background};
        }

        tbody tr:nth-child(even) {
            background-color: ${({ theme }) => theme.Gray50};
        }
    }

    &[data-table-variant="border-bottom"] {
        tbody tr {
            border-bottom: 1px solid ${({ theme }) => theme.Gray200};
        }
    }
`

setDefaultTheme([StyledTable])

export { StyledTable }
