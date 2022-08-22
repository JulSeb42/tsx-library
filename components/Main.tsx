/*=============================================== Main ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "../utils"

import Variables from "../Variables"
import Mixins from "./Mixins"

import {
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    GridAlignContentTypes,
    GridAlignItemsTypes,
    SpacerTypes,
} from "../common-types"

/*==================== Component ====================*/

const Main = ({
    size,
    position,
    children,
    alignContent,
    alignItems,
    justifyContent,
    justifyItems,
    gap = "l",
    ...props
}: Props) => (
    <StyledMain
        $size={size}
        $position={position}
        $alignContent={alignContent}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $justifyItems={justifyItems}
        $gap={gap}
        {...props}
    >
        {children}
    </StyledMain>
)

export default Main

/*==================== Types ====================*/

const sizes = {
    default: "default",
    large: "large",
    form: "form,",
} as const

type SizesTypes = keyof typeof sizes

const positions = { 1: 1, 2: 2 } as const

type PositionsTypes = keyof typeof positions

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizesTypes | number
    position?: PositionsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    gap?: SpacerTypes | number
}

/*==================== Styles ====================*/

const StyledMain = styled.main<{
    $size?: SizesTypes | number
    $position?: PositionsTypes
    $justifyContent?: GridJustifyContentTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignContent?: GridAlignContentTypes
    $alignItems?: GridAlignItemsTypes
    $gap?: SpacerTypes | number
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
