/*=============================================== Card styles ===============================================*/

import styled, { css } from "styled-components"

import { stringifyPx, Mixins } from "../../"
import {
    AllColorsTypes,
    BorderStylesTypes,
    RadiusesTypes,
    PaddingTypes,
    CursorTypes,
    ShadowsTypes,
    FlexDirectionTypes,
    FlexWrapTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    SpacersTypes,
} from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledCard = styled.div<{
    $borderRadius?: RadiusesTypes
    $padding?: PaddingTypes
    $cursor?: CursorTypes
    $width?: string | number
    $height?: string | number
    $textColor?: AllColorsTypes
    $borderColor?: AllColorsTypes
    $borderWidth?: number
    $borderStyle?:
        | BorderStylesTypes
        | {
              left?: BorderStylesTypes
              top?: BorderStylesTypes
              right?: BorderStylesTypes
              bottom?: BorderStylesTypes
          }
    $shadow?: ShadowsTypes
    $shadowDefault?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
    $backgroundColor?: AllColorsTypes
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $alignContent?: FlexAlignContentTypes
    $gap?: SpacersTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
    $flexGrow?: number | string
}>`
    text-decoration: none;
    color: ${({ theme, $textColor }) =>
        theme.AllColors({ $color: $textColor })};
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    cursor: ${({ $cursor }) => $cursor};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    overflow: hidden;
    position: relative;
    flex-grow: ${({ $flexGrow }) => $flexGrow};
    ${Mixins.BorderRadius};
    ${Mixins.Padding};
    ${({ $shadow, $shadowDefault, $shadowHover, $shadowActive }) =>
        Mixins.Shadow({
            $shadow,
            $isExtended: $shadowDefault && true,
            $shadowDefault: $shadowDefault,
            $shadowHover,
            $shadowActive,
        })};

    ${({ $borderWidth, $borderColor, $borderStyle, theme }) =>
        ($borderWidth || $borderStyle || $borderColor) &&
        css`
            border-width: ${$borderWidth ? stringifyPx($borderWidth) : "1px"};
            border-style: ${$borderStyle || "solid"};
            border-color: ${theme.AllColors({
                $color: $borderColor || "gray-200",
            })};
        `}

    ${({
        $inline,
        $flexDirection,
        $flexWrap,
        $justifyContent,
        $alignItems,
        $justifyItems,
        $alignContent,
        $gap,
        $columnGap,
        $rowGap,
    }) =>
        ($inline ||
            $flexDirection ||
            $flexWrap ||
            $justifyContent ||
            $alignItems ||
            $justifyItems ||
            $alignContent ||
            $gap ||
            $columnGap ||
            $rowGap) &&
        Mixins.Flexbox};
`

setDefaultTheme([StyledCard])

export { StyledCard }
