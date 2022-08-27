/*=============================================== Main styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import {
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    SpacersTypes,
} from "../../utils/common-types"

import { SizesTypes, PositionsTypes } from "./types"

const StyledMain = styled.main<{
    $size?: SizesTypes | number
    $position?: PositionsTypes
    $justifyContent?: GridJustifyContentTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignContent?: GridAlignContentTypes
    $alignItems?: GridAlignItemsTypes
    $gap?: SpacersTypes | number
}>`
    width: ${({ $size }) =>
        $size === "large"
            ? Variables.Layouts.Main.Large
            : $size === "form"
            ? Variables.Layouts.Main.Form
            : typeof $size === "number"
            ? stringifyPx($size)
            : Variables.Layouts.Main.Default};
    ${({ $justifyContent, $justifyItems, $alignContent, $alignItems, $gap }) =>
        Mixins.Grid({
            $alignContent: $alignContent || "start",
            $justifyItems: $justifyItems || "start",
            $justifyContent: $justifyContent,
            $alignItems: $alignItems,
            $gap,
            $padding: `${Variables.Spacers.XXL} 0`,
        })};
    min-height: 100vh;
    grid-column: ${({ $position }) => ($position === 2 ? 3 : 2)};

    @media ${Variables.Breakpoints.Tablet} {
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

export { StyledMain }
