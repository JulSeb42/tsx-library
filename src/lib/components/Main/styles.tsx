/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"

import type { MainPositionTypes, MainSizeTypes } from "./types"
import { Mixins, Layouts, Breakpoints, stringifyPx } from "../../"
import type {
    SpacersTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
} from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledMain = styled.main<{
    $size?: MainSizeTypes
    $position?: MainPositionTypes
    $justifyContent?: GridJustifyContentTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignContent?: GridAlignContentTypes
    $alignItems?: GridAlignItemsTypes
    $gap?: SpacersTypes
    $contentWidth?: "default" | "large" | "form"
    $paddingTopBottom?: SpacersTypes
    $minHeight?: string | number
}>`
    width: ${({ $size }) =>
        $size === "large"
            ? Layouts.Main.Large
            : $size === "form"
            ? Layouts.Main.Form
            : $size === "full"
            ? Layouts.Main.Full
            : typeof $size === "number"
            ? stringifyPx($size)
            : Layouts.Main.Default};
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
    min-height: ${({ $minHeight }) => $minHeight && stringifyPx($minHeight)};
    grid-column: ${({ $position }) => ($position ? $position + 1 : 2)};

    @media ${Breakpoints.Tablet} {
        min-height: inherit;
        grid-column: 2;
    }

    ${({ $size, $contentWidth }) =>
        $size === "full" &&
        css`
            grid-template-columns: 1fr ${$contentWidth === "large"
                    ? Layouts.Main.Large
                    : $contentWidth === "form"
                    ? Layouts.Main.Form
                    : Layouts.Main.Default} 1fr;

            & > * {
                grid-column: 2;
            }
        `}

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

setDefaultTheme([StyledMain])

export { StyledMain }
