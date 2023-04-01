/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"

import { AsidePositionTypes, AsideSizeTypes } from "./types"
import { Mixins, Layouts, Breakpoints, stringifyPx } from "../../"
import {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
} from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledAside = styled.aside<{
    $size?: AsideSizeTypes
    $position?: AsidePositionTypes
    $justifyContent?: GridJustifyContentTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignContent?: GridAlignContentTypes
    $alignItems?: GridAlignItemsTypes
    $gap?: SpacersTypes
    $paddingTopBottom?: SpacersTypes
}>`
    width: ${({ $size }) =>
        $size === "small"
            ? Layouts.Aside.Small
            : typeof $size === "number"
            ? stringifyPx($size)
            : Layouts.Aside.Default};
    ${({
        $justifyContent,
        $justifyItems,
        $alignContent,
        $alignItems,
        $gap,
        $paddingTopBottom,
    }) =>
        Mixins.Grid({
            $alignContent: $alignContent || "start",
            $justifyItems: $justifyItems || "start",
            $justifyContent: $justifyContent || "stretch",
            $alignItems: $alignItems || "start",
            $gap,
            $padding: {
                topBottom: $paddingTopBottom,
            },
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
