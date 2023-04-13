/*=============================================== Card styles ===============================================*/

import styled, { css } from "styled-components"

import { stringifyPx, Mixins } from "../.."
import type {
    AllColorsTypes,
    BorderTypes,
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
import type { BackgroundImgType } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledCard = styled.div<{
    $borderRadius?: RadiusesTypes
    $padding?: PaddingTypes
    $cursor?: CursorTypes
    $width?: string | number
    $height?: string | number
    $textColor?: AllColorsTypes
    $border?: BorderTypes
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
    $backgroundImg?: string | BackgroundImgType
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

    ${({ $border }) => $border && Mixins.Border({ $border })};

    ${
        "" /* ${({ $borderWidth, $borderColor, $borderStyle, theme }) =>
        ($borderWidth || $borderStyle || $borderColor) &&
        css`
            border-width: ${$borderWidth ? stringifyPx($borderWidth) : "1px"};
            border-style: ${$borderStyle || "solid"};
            border-color: ${theme.AllColors({
                $color: $borderColor || "gray-200",
            })};
        `} */
    }

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

    ${({ $backgroundImg }) =>
        $backgroundImg &&
        css`
            background-image: url(${typeof $backgroundImg === "object"
                ? $backgroundImg.img
                : $backgroundImg});
            background-origin: ${typeof $backgroundImg === "object" &&
            $backgroundImg.origin
                ? $backgroundImg.origin
                : "center" || "center"};
            background-position: ${typeof $backgroundImg === "object" &&
            $backgroundImg.position
                ? $backgroundImg.position
                : "center" || "center"};
            background-repeat: ${typeof $backgroundImg === "object" &&
            $backgroundImg.repeat
                ? $backgroundImg.repeat
                : "no-repeat" || "no-repeat"};
            background-size: ${typeof $backgroundImg === "object" &&
            $backgroundImg.size
                ? $backgroundImg.size
                : "cover" || "cover"};
            background-clip: ${typeof $backgroundImg === "object" &&
            $backgroundImg.clip
                ? $backgroundImg.clip
                : "border-box" || "border-box"};

            ${typeof $backgroundImg === "object" &&
            $backgroundImg.clip &&
            $backgroundImg.clip === "text" &&
            css`
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
            `}
        `}
`

setDefaultTheme([StyledCard])

export { StyledCard }
