/*=============================================== Flexbox ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"

import {
    SpacerTypes,
    FlexDirectionTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
} from "./common-types"

/*==================== Component ====================*/

const Flexbox = ({
    inline,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    justifyItems,
    alignItems,
    gap,
    rowGap,
    columnGap,
    padding,
    children,
    ...props
}: Props) => (
    <Container
        $inline={inline}
        $flexDirection={flexDirection}
        $flexWrap={flexWrap}
        $justifyContent={justifyContent}
        $alignContent={alignContent}
        $justifyItems={justifyItems}
        $alignItems={alignItems}
        $gap={gap}
        $rowGap={rowGap}
        $columnGap={columnGap}
        $padding={padding}
        {...props}
    >
        {children}
    </Container>
)

export default Flexbox

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $alignContent?: FlexAlignContentTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $gap?: SpacerTypes | number | string
    $rowGap?: SpacerTypes | number | string
    $columnGap?: SpacerTypes | number | string
    $padding?: SpacerTypes | number | string
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    flexDirection?: FlexDirectionTypes
    flexWrap?: FlexWrapTypes
    alignContent?: FlexAlignContentTypes
    justifyContent?: FlexJustifyContentTypes
    alignItems?: FlexAlignItemsTypes
    justifyItems?: FlexJustifyItemsTypes
    gap?: SpacerTypes | number | string
    rowGap?: SpacerTypes | number | string
    columnGap?: SpacerTypes | number | string
    padding?: SpacerTypes | number | string
}

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};
    flex-direction: ${({ $flexDirection }) => $flexDirection};
    flex-wrap: ${({ $flexWrap }) => $flexWrap};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    justify-items: ${({ $justifyItems }) => $justifyItems};
    align-items: ${({ $alignItems }) => $alignItems};
    align-content: ${({ $alignContent }) => $alignContent};
    gap: ${({ $gap }) =>
        $gap === "xxl"
            ? Variables.Spacers.XXL
            : $gap === "xl"
            ? Variables.Spacers.XL
            : $gap === "l"
            ? Variables.Spacers.L
            : $gap === "m"
            ? Variables.Spacers.M
            : $gap === "s"
            ? Variables.Spacers.S
            : $gap === "xs"
            ? Variables.Spacers.XS
            : $gap === "xxs"
            ? Variables.Spacers.XXS
            : $gap
            ? stringifyPx($gap)
            : ""};
    column-gap: ${({ $columnGap }) =>
        $columnGap === "xxl"
            ? Variables.Spacers.XXL
            : $columnGap === "xl"
            ? Variables.Spacers.XL
            : $columnGap === "l"
            ? Variables.Spacers.L
            : $columnGap === "m"
            ? Variables.Spacers.M
            : $columnGap === "s"
            ? Variables.Spacers.S
            : $columnGap === "xs"
            ? Variables.Spacers.XS
            : $columnGap === "xxs"
            ? Variables.Spacers.XXS
            : $columnGap
            ? stringifyPx($columnGap)
            : ""};
    row-gap: ${({ $rowGap }) =>
        $rowGap === "xxl"
            ? Variables.Spacers.XXL
            : $rowGap === "xl"
            ? Variables.Spacers.XL
            : $rowGap === "l"
            ? Variables.Spacers.L
            : $rowGap === "m"
            ? Variables.Spacers.M
            : $rowGap === "s"
            ? Variables.Spacers.S
            : $rowGap === "xs"
            ? Variables.Spacers.XS
            : $rowGap === "xxs"
            ? Variables.Spacers.XXS
            : $rowGap
            ? stringifyPx($rowGap)
            : ""};
    padding: ${({ $padding }) =>
        $padding === "xxl"
            ? Variables.Spacers.XXL
            : $padding === "xl"
            ? Variables.Spacers.XL
            : $padding === "l"
            ? Variables.Spacers.L
            : $padding === "m"
            ? Variables.Spacers.M
            : $padding === "s"
            ? Variables.Spacers.S
            : $padding === "xs"
            ? Variables.Spacers.XS
            : $padding === "xxs"
            ? Variables.Spacers.XXS
            : $padding
            ? stringifyPx($padding)
            : ""};
`
