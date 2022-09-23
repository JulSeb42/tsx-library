/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Layouts, Spacers, Breakpoints } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    GridJustifyContentTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyItemsTypes,
    SpacersTypes,
} from "../../utils/common-types"

import { SizeTypes, PositionsTypes } from "./types"

const StyledAside = styled.aside<{
    $size?: SizeTypes | number
    $position?: PositionsTypes
    $justifyContent?: GridJustifyContentTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignContent?: GridAlignContentTypes
    $alignItems?: GridAlignItemsTypes
    $gap?: SpacersTypes | number
}>`
    width: ${({ $size }) =>
        $size === "small"
            ? Layouts.Aside.Small
            : typeof $size === "number"
            ? stringifyPx($size)
            : Layouts.Aside.Default};
    ${({ $justifyContent, $justifyItems, $alignContent, $alignItems, $gap }) =>
        Mixins.Grid({
            $alignContent: $alignContent || "start",
            $justifyItems: $justifyItems || "stretch",
            $justifyContent: $justifyContent || "stretch",
            $alignItems: $alignItems || "start",
            $gap,
            $padding: `${Spacers.XXL} 0`,
        })};
    min-height: 100vh;
    grid-column: ${({ $position }) =>
        $position === 2 ? 3 : $position === 3 ? 4 : 2};

    @media ${Breakpoints.Tablet} {
        min-height: inherit;
        grid-column: 2;
    }

    & > div,
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6,
    & > p,
    & > ul,
    & > ol,
    & > dl,
    & > section,
    & > input,
    & > article,
    & > hr,
    & > pre,
    & > table,
    & > header,
    & > footer,
    & > iframe,
    & > nav,
    & > noscript,
    & > picture,
    & > select,
    & > textarea,
    & > form {
        justify-self: stretch;
    }
`

setDefaultTheme([StyledAside])

export { StyledAside }
