/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"

import type { MainPositionTypes, MainSizeTypes } from "./types"
import { Mixins, Layouts, Breakpoints, stringifyPx } from "../../"
import type {
    SpacersTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
} from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledMain = styled.main<{
    $size?: MainSizeTypes
    $position?: MainPositionTypes
    $justifyContent?: FlexJustifyContentTypes
    $justifyItems?: FlexJustifyItemsTypes
    $alignContent?: FlexAlignContentTypes
    $alignItems?: FlexAlignItemsTypes
    $gap?: SpacersTypes
    $contentWidth?: "default" | "large" | "form"
    $paddingTopBottom?: SpacersTypes
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
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignContent: $alignContent || "stretch",
            $justifyItems: $justifyItems || "stretch",
            $justifyContent: $justifyContent || "flex-start",
            $alignItems: $alignItems || "stretch",
            $gap,
            $padding: {
                topBottom: $paddingTopBottom,
            },
        })};
    min-height: 100vh;
    grid-column: ${({ $position }) => ($position ? $position + 1 : 2)};

    @media ${Breakpoints.Tablet} {
        min-height: inherit;
        grid-column: 2;
    }

    ${({ $size, $contentWidth }) =>
        $size === "full" &&
        css`
            display: grid;
            grid-template-columns: 1fr ${$contentWidth === "large"
                    ? Layouts.Main.Large
                    : $contentWidth === "form"
                    ? Layouts.Main.Form
                    : Layouts.Main.Default} 1fr;

            & > * {
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
        align-self: stretch;
    }
`

setDefaultTheme([StyledMain])

export { StyledMain }
