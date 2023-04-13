/*=============================================== Mixins ===============================================*/

/*==================== Imports ====================*/

import { css } from "styled-components"

import {
    Overlays,
    Radiuses,
    Spacers,
    Shadows,
    Breakpoints,
    Transitions,
    FontWeights,
    FontSizes,
} from "./Variables"

import { stringifyPx } from "./utils/ts-utils"

import type {
    SpacersTypes,
    GridJustifyItemsTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridAlignContentTypes,
    FlexDirectionTypes,
    FlexWrapTypes,
    FlexJustifyContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyItemsTypes,
    FlexAlignContentTypes,
    OverlayTypes,
    RadiusesTypes,
    ShadowsTypes,
    PaddingTypes,
    PositionsTypes,
    TransitionTypes,
    TextDecorationTypes,
    FontWeightTypes,
    FontSizeTypes,
    CustomFontSizeTypes,
    BorderTypes,
} from "./types"

/*==================== Types ====================*/

/*==== Colors ====*/

export interface OverlayProps {
    $overlay?: OverlayTypes
}

/*==== Spacers ====*/

export interface SpacersProps {
    $spacer?: SpacersTypes | string
}

/*==== Radiuses ====*/

export interface RadiusesProps {
    $borderRadius?: RadiusesTypes
}

/*==== Shadows ====*/

export interface ShadowsProps {
    $shadow?: ShadowsTypes
    $isExtended?: boolean
    $shadowDefault?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
}

/*==== Padding ====*/

export interface PaddingProps {
    $padding?: PaddingTypes
}

/*==== Grid ====*/

export interface GridProps {
    $inline?: boolean
    $col?: number | string
    $gap?: SpacersTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
    $padding?: PaddingTypes
}

/*==== Flexbox ====*/

export interface FlexProps {
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
    $padding?: PaddingTypes
}

/*==== Absolute ====*/

export interface PositionProps {
    $left?: SpacersTypes | string
    $top?: SpacersTypes | string
    $right?: SpacersTypes | string
    $bottom?: SpacersTypes | string
    $position?: PositionsTypes
    $zIndex?: number
}

/*==== Transition ====*/

export interface TransitionProps {
    $transition?: TransitionTypes
}

/*==== Text decoration ====*/

export interface TextDecorationProps {
    $textDecoration: TextDecorationTypes
}

/*==== Font weights ====*/

export interface FontWeightsProps {
    $fontWeight?: FontWeightTypes | number
}

/*==== Font sizes ====*/

export interface FontSizesProps {
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
}

/*==== Border ====*/

export interface BorderProps {
    $border?: BorderTypes
}

/*==================== Mixins ====================*/

const Mixins = {
    Overlay: ({ $overlay }: OverlayProps) => css`
        ${$overlay === "overlay-black-50"
            ? Overlays.Plain.Black50
            : $overlay === "overlay-black-80"
            ? Overlays.Plain.Black80
            : $overlay === "overlay-white-50"
            ? Overlays.Plain.White50
            : $overlay === "overlay-white-80"
            ? Overlays.Plain.White80
            : $overlay === "overlay-gradient-black"
            ? Overlays.Gradient.Black
            : $overlay === "overlay-gradient-white"
            ? Overlays.Gradient.White
            : ""};
    `,

    BorderRadius: ({ $borderRadius }: RadiusesProps) => css`
        border-radius: ${(typeof $borderRadius === "object" &&
            $borderRadius.topLeft) ||
        (typeof $borderRadius === "object" && $borderRadius.topRight) ||
        (typeof $borderRadius === "object" && $borderRadius.bottomRight) ||
        (typeof $borderRadius === "object" && $borderRadius.bottomLeft)
            ? `${
                  $borderRadius.topLeft === "xxl"
                      ? Radiuses.XXL
                      : $borderRadius.topLeft === "xl"
                      ? Radiuses.XL
                      : $borderRadius.topLeft === "l"
                      ? Radiuses.L
                      : $borderRadius.topLeft === "m"
                      ? Radiuses.M
                      : $borderRadius.topLeft === "s"
                      ? Radiuses.S
                      : $borderRadius.topLeft === "xs"
                      ? Radiuses.XS
                      : $borderRadius.topLeft === "circle"
                      ? Radiuses.Circle
                      : $borderRadius.topLeft === "round"
                      ? Radiuses.Round
                      : $borderRadius.topLeft
                      ? stringifyPx($borderRadius.topLeft)
                      : 0
              } ${
                  $borderRadius.topRight === "xxl"
                      ? Radiuses.XXL
                      : $borderRadius.topRight === "xl"
                      ? Radiuses.XL
                      : $borderRadius.topRight === "l"
                      ? Radiuses.L
                      : $borderRadius.topRight === "m"
                      ? Radiuses.M
                      : $borderRadius.topRight === "s"
                      ? Radiuses.S
                      : $borderRadius.topRight === "xs"
                      ? Radiuses.XS
                      : $borderRadius.topRight === "circle"
                      ? Radiuses.Circle
                      : $borderRadius.topRight === "round"
                      ? Radiuses.Round
                      : $borderRadius.topRight
                      ? stringifyPx($borderRadius.topRight)
                      : 0
              } ${
                  $borderRadius.bottomRight === "xxl"
                      ? Radiuses.XXL
                      : $borderRadius.bottomRight === "xl"
                      ? Radiuses.XL
                      : $borderRadius.bottomRight === "l"
                      ? Radiuses.L
                      : $borderRadius.bottomRight === "m"
                      ? Radiuses.M
                      : $borderRadius.bottomRight === "s"
                      ? Radiuses.S
                      : $borderRadius.bottomRight === "xs"
                      ? Radiuses.XS
                      : $borderRadius.bottomRight === "circle"
                      ? Radiuses.Circle
                      : $borderRadius.bottomRight === "round"
                      ? Radiuses.Round
                      : $borderRadius.bottomRight
                      ? stringifyPx($borderRadius.bottomRight)
                      : 0
              } ${
                  $borderRadius.bottomLeft === "xxl"
                      ? Radiuses.XXL
                      : $borderRadius.bottomLeft === "xl"
                      ? Radiuses.XL
                      : $borderRadius.bottomLeft === "l"
                      ? Radiuses.L
                      : $borderRadius.bottomLeft === "m"
                      ? Radiuses.M
                      : $borderRadius.bottomLeft === "s"
                      ? Radiuses.S
                      : $borderRadius.bottomLeft === "xs"
                      ? Radiuses.XS
                      : $borderRadius.bottomLeft === "circle"
                      ? Radiuses.Circle
                      : $borderRadius.bottomLeft === "round"
                      ? Radiuses.Round
                      : $borderRadius.bottomLeft
                      ? stringifyPx($borderRadius.bottomLeft)
                      : 0
              }`
            : $borderRadius === "xxl"
            ? Radiuses.XXL
            : $borderRadius === "xl"
            ? Radiuses.XL
            : $borderRadius === "l"
            ? Radiuses.L
            : $borderRadius === "m"
            ? Radiuses.M
            : $borderRadius === "s"
            ? Radiuses.S
            : $borderRadius === "xs"
            ? Radiuses.XS
            : $borderRadius === "circle"
            ? Radiuses.Circle
            : $borderRadius === "round"
            ? Radiuses.Round
            : $borderRadius === "none"
            ? ""
            : typeof $borderRadius === "string" ||
              typeof $borderRadius === "number"
            ? stringifyPx($borderRadius)
            : ""};
    `,

    Shadow: ({
        $shadow,
        $shadowDefault,
        $shadowHover,
        $shadowActive,
        $isExtended,
    }: ShadowsProps) => css`
        box-shadow: ${$shadow === "xxl" ||
        ($isExtended && $shadowDefault === "xxl")
            ? Shadows.XXL
            : $shadow === "xl" || ($isExtended && $shadowDefault === "xl")
            ? Shadows.XL
            : $shadow === "l" || ($isExtended && $shadowDefault === "l")
            ? Shadows.L
            : $shadow === "m" || ($isExtended && $shadowDefault === "m")
            ? Shadows.M
            : $shadow === "s" || ($isExtended && $shadowDefault === "s")
            ? Shadows.S
            : $shadow === "xs" || ($isExtended && $shadowDefault === "xs")
            ? Shadows.XS
            : ""};

        ${$isExtended &&
        ($shadowHover || $shadowActive) &&
        css`
            @media ${Breakpoints.Hover} {
                &:hover {
                    box-shadow: ${$shadowHover === "xxl"
                        ? Shadows.XXL
                        : $shadowHover === "xl"
                        ? Shadows.XL
                        : $shadowHover === "l"
                        ? Shadows.L
                        : $shadowHover === "m"
                        ? Shadows.M
                        : $shadowHover === "s"
                        ? Shadows.S
                        : $shadowHover === "xs"
                        ? Shadows.XS
                        : $shadowHover === "none"
                        ? "inherit"
                        : ""};
                }

                &:active {
                    box-shadow: ${$shadowActive === "xxl"
                        ? Shadows.XXL
                        : $shadowActive === "xl"
                        ? Shadows.XL
                        : $shadowActive === "l"
                        ? Shadows.L
                        : $shadowActive === "m"
                        ? Shadows.M
                        : $shadowActive === "s"
                        ? Shadows.S
                        : $shadowActive === "xs"
                        ? Shadows.XS
                        : $shadowHover === "none"
                        ? "inherit"
                        : ""};
                }
            }
        `}
    `,

    Spacers: ({ $spacer }: SpacersProps) =>
        css`
            ${$spacer === "xxl"
                ? Spacers.XXL
                : $spacer === "xl"
                ? Spacers.XL
                : $spacer === "l"
                ? Spacers.L
                : $spacer === "m"
                ? Spacers.M
                : $spacer === "s"
                ? Spacers.S
                : $spacer === "xs"
                ? Spacers.XS
                : $spacer === "xxs"
                ? Spacers.XXS
                : $spacer === "none"
                ? 0
                : $spacer
                ? stringifyPx($spacer)
                : ""}
        `,

    HideScrollbar: css`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `,

    Padding: ({ $padding }: PaddingProps) => css`
        padding-left: ${Mixins.Spacers({
            $spacer:
                typeof $padding === "object"
                    ? $padding.left || $padding.leftRight
                    : $padding
                    ? $padding
                    : 0,
        })};
        padding-right: ${Mixins.Spacers({
            $spacer:
                typeof $padding === "object"
                    ? $padding.right || $padding.leftRight
                    : $padding
                    ? $padding
                    : 0,
        })};
        padding-top: ${Mixins.Spacers({
            $spacer:
                typeof $padding === "object"
                    ? $padding.top || $padding.topBottom
                    : $padding
                    ? $padding
                    : 0,
        })};
        padding-bottom: ${Mixins.Spacers({
            $spacer:
                typeof $padding === "object"
                    ? $padding.bottom || $padding.topBottom
                    : $padding
                    ? $padding
                    : 0,
        })};
    `,

    Grid: ({
        $inline,
        $col,
        $gap,
        $columnGap,
        $rowGap,
        $justifyItems,
        $alignItems,
        $justifyContent,
        $alignContent,
        $padding,
    }: GridProps) => css`
        display: ${$inline ? "inline-grid" : "grid"};
        grid-template-columns: ${typeof $col === "number"
            ? `repeat(${$col}, 1fr)`
            : $col};
        gap: ${Mixins.Spacers({ $spacer: $gap })};
        column-gap: ${Mixins.Spacers({ $spacer: $columnGap })};
        row-gap: ${Mixins.Spacers({ $spacer: $rowGap })};
        justify-items: ${$justifyItems};
        align-items: ${$alignItems};
        justify-content: ${$justifyContent};
        align-content: ${$alignContent};
        ${Mixins.Padding({ $padding: $padding })}
    `,

    Flexbox: ({
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
        $padding,
    }: FlexProps) => css`
        display: ${$inline ? "inline-flex" : "flex"};
        flex-direction: ${$flexDirection};
        flex-wrap: ${$flexWrap};
        justify-content: ${$justifyContent};
        align-items: ${$alignItems};
        justify-items: ${$justifyItems};
        align-content: ${$alignContent};
        gap: ${Mixins.Spacers({ $spacer: $gap })};
        column-gap: ${Mixins.Spacers({ $spacer: $columnGap })};
        row-gap: ${Mixins.Spacers({ $spacer: $rowGap })};
        ${Mixins.Padding({ $padding })};
    `,

    Position: ({
        $position,
        $left,
        $top,
        $right,
        $bottom,
        $zIndex,
    }: PositionProps) => css`
        position: ${$position};
        z-index: ${$zIndex};

        ${$left &&
        css`
            left: ${$left === "xxl" ||
            $left === "xl" ||
            $left === "l" ||
            $left === "m" ||
            $left === "s" ||
            $left === "xs" ||
            $left === "xxs"
                ? Mixins.Spacers({ $spacer: $left })
                : stringifyPx($left)};
        `}

        ${$top &&
        css`
            top: ${$top === "xxl" ||
            $top === "xl" ||
            $top === "l" ||
            $top === "m" ||
            $top === "s" ||
            $top === "xs" ||
            $top === "xxs"
                ? Mixins.Spacers({ $spacer: $top })
                : stringifyPx($top)};
        `}

${$right &&
        css`
            right: ${$right === "xxl" ||
            $right === "xl" ||
            $right === "l" ||
            $right === "m" ||
            $right === "s" ||
            $right === "xs" ||
            $right === "xxs"
                ? Mixins.Spacers({ $spacer: $right })
                : stringifyPx($right)};
        `}

${$bottom &&
        css`
            bottom: ${$bottom === "xxl" ||
            $bottom === "xl" ||
            $bottom === "l" ||
            $bottom === "m" ||
            $bottom === "s" ||
            $bottom === "xs" ||
            $bottom === "xxs"
                ? Mixins.Spacers({ $spacer: $bottom })
                : stringifyPx($bottom)};
        `}
    `,

    Transition: ({ $transition }: TransitionProps) => css`
        transition: ${$transition === "short"
            ? Transitions.Short
            : $transition === "long"
            ? Transitions.Long
            : $transition === "bezier"
            ? Transitions.Bezier
            : ""};
    `,

    TextDecoration: ({ $textDecoration }: TextDecorationProps) => css`
        text-decoration: ${$textDecoration};
    `,

    FontWeight: ({ $fontWeight }: FontWeightsProps) => css`
        font-weight: ${$fontWeight === "black"
            ? FontWeights.Black
            : $fontWeight === "bold"
            ? FontWeights.Bold
            : $fontWeight === "regular"
            ? FontWeights.Regular
            : $fontWeight
            ? $fontWeight
            : ""};
    `,

    FontSize: ({ $fontSize, $customFontSize }: FontSizesProps) =>
        css`
            font-size: ${$customFontSize
                ? stringifyPx($customFontSize)
                : $fontSize === "display-h1"
                ? FontSizes.Display.H1
                : $fontSize === "display-h2"
                ? FontSizes.Display.H2
                : $fontSize === "display-h3"
                ? FontSizes.Display.H3
                : $fontSize === "display-h4"
                ? FontSizes.Display.H4
                : $fontSize === "display-h5"
                ? FontSizes.Display.H5
                : $fontSize === "title-h1"
                ? FontSizes.Titles.H1
                : $fontSize === "title-h2"
                ? FontSizes.Titles.H2
                : $fontSize === "title-h3"
                ? FontSizes.Titles.H3
                : $fontSize === "title-h4"
                ? FontSizes.Titles.H4
                : $fontSize === "title-h5"
                ? FontSizes.Titles.H5
                : $fontSize === "title-h6"
                ? FontSizes.Titles.H6
                : $fontSize === "body"
                ? FontSizes.Body
                : $fontSize === "small"
                ? FontSizes.Small
                : ""};
        `,

    Border: ({ $border }: BorderProps) => css`
        border-width: ${$border?.width || 1}px;
        border-style: ${$border?.style || "solid"};
        border-color: ${({ theme }) =>
            theme.AllColors({ $color: $border?.color || "gray-200" })};
    `,
}

export default Mixins
