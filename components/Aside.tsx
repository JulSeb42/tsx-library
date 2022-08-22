/*=============================================== Aside ===============================================*/

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

const Aside = ({
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
    <StyledAside
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
    </StyledAside>
)

export default Aside

/*==================== Types ====================*/

const sizes = {
    default: "default",
    small: "small",
} as const

type SizeTypes = keyof typeof sizes

const positions = {
    1: 1,
    2: 2,
    3: 3,
} as const

type PositionsTypes = keyof typeof positions

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizeTypes | number
    position?: PositionsTypes
    justifyContent?: GridJustifyContentTypes
    justifyItems?: GridJustifyItemsTypes
    alignContent?: GridAlignContentTypes
    alignItems?: GridAlignItemsTypes
    gap?: SpacerTypes | number
}

/*==================== Styles ====================*/

const StyledAside = styled.aside<{
    $size?: SizeTypes | number
    $position?: PositionsTypes
    $justifyContent?: GridJustifyContentTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignContent?: GridAlignContentTypes
    $alignItems?: GridAlignItemsTypes
    $gap?: SpacerTypes | number
}>`
    width: ${({ $size }) =>
        $size === "small"
            ? Variables.Layouts.Aside.Small
            : typeof $size === "number"
            ? stringifyPx($size)
            : Variables.Layouts.Aside.Default};
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
    grid-column: ${({ $position }) =>
        $position === 2 ? 3 : $position === 3 ? 4 : 2};

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
