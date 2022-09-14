/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Layouts, Spacers, Breakpoints } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

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
    $contentWidth?: "default" | "large" | "form"
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
    ${({ $justifyContent, $justifyItems, $alignContent, $alignItems, $gap }) =>
        Mixins.Grid({
            $alignContent: $alignContent || "start",
            $justifyItems: $justifyItems || "start",
            $justifyContent: $justifyContent || "start",
            $alignItems: $alignItems || "start",
            $gap,
            $padding: `${Spacers.XXL} 0`,
        })};
    min-height: 100vh;
    grid-column: ${({ $position }) => ($position === 2 ? 3 : 2)};

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
