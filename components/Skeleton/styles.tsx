/*=============================================== Skeleton styles ===============================================*/

import styled, { keyframes, css } from "styled-components"

import { Mixins, stringifyPx } from "../../"
import type {
    AllColorsTypes,
    RadiusesTypes,
    BorderStylesTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexDirectionTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    FlexWrapTypes,
    SpacersTypes,
} from "../../types"
import type { SkeletonAnimationTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const Pulse = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`

const StyledSkeleton = styled.div<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    $backgroundColor?: AllColorsTypes
    $borderRadius?: RadiusesTypes
    $animation?: SkeletonAnimationTypes
    $flex?: string | number
    $flexGrow?: string | number
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    ${Mixins.BorderRadius};
    position: relative;
    overflow: hidden;
    flex: ${({ $flex }) => $flex};
    flex-grow: ${({ $flexGrow }) => $flexGrow};

    ${({ $animation }) =>
        $animation === "pulse" &&
        css`
            animation: ${Pulse} 500ms infinite alternate;
        `}
`

const ShineLoad = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 106%;
    }
`

const Shine = styled.span<{
    $speed?: number
    $opacity?: number
    $color?: AllColorsTypes
    $width?: number | string
}>`
    position: absolute;
    top: -200px;
    bottom: -200px;
    width: ${({ $width }) => $width && stringifyPx($width)};
    filter: blur(20px);
    transform: skew(-15deg);
    background-color: ${({ theme, $color }) =>
        theme.AllColors({ $color: $color })};
    animation: ${ShineLoad} ${({ $speed }) => $speed}ms infinite;
    opacity: ${({ $opacity }) => $opacity};
`

export const Card = styled.div<{
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
    $borderRadius?: RadiusesTypes
    $width?: string | number
    $height?: string | number
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
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors({ $color: $backgroundColor })};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    overflow: hidden;
    position: relative;
    ${Mixins.BorderRadius};
    ${Mixins.Padding({})};
    ${({ $borderWidth, $borderColor, $borderStyle, theme }) =>
        ($borderWidth || $borderStyle || $borderColor) &&
        css`
            border-width: ${$borderWidth ? stringifyPx($borderWidth) : "1px"};
            border-style: ${$borderStyle || "solid"};
            border-color: ${theme.AllColors({
                $color: $borderColor || "gray-200",
            })};
        `};
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

setDefaultTheme([StyledSkeleton, Shine])

export { StyledSkeleton, Shine }
