/*=============================================== Mixins ===============================================*/

/*==================== Imports ====================*/

import { css } from "styled-components"
import { stringifyPx } from "./utils/utils"

import { Overlays, Radiuses, Spacers, Shadows } from "./Variables"

import {
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
} from "./utils/common-types"

/*==================== Types ====================*/

/*==== Colors ====*/

interface OverlayProps {
    $overlay?: OverlayTypes
}

/*==== Spacers ====*/

interface SpacersProps {
    $spacer?: SpacersTypes | string | number
}

/*==== Radiuses ====*/

interface RadiusesProps {
    $borderRadius?: RadiusesTypes | number
}

/*==== Shadows ====*/

interface ShadowsProps {
    $shadow?: ShadowsTypes
}

/*==== Grid ====*/

interface GridProps {
    $inline?: boolean
    $col?: number | string
    $gap?: SpacersTypes | string | number
    $columnGap?: SpacersTypes | string | number
    $rowGap?: SpacersTypes | string | number
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
    $padding?: SpacersTypes | string | number
}

/*==== Flexbox ====*/

interface FlexProps {
    $inline?: boolean
    $flexDirection?: FlexDirectionTypes
    $flexWrap?: FlexWrapTypes
    $justifyContent?: FlexJustifyContentTypes
    $alignItems?: FlexAlignItemsTypes
    $justifyItems?: FlexJustifyItemsTypes
    $alignContent?: FlexAlignContentTypes
    $gap?: SpacersTypes | string | number
    $columnGap?: SpacersTypes | string | number
    $rowGap?: SpacersTypes | string | number
    $padding?: SpacersTypes | string | number
}

export type {
    OverlayProps,
    SpacersProps,
    RadiusesProps,
    ShadowsProps,
    GridProps,
    FlexProps,
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
        border-radius: ${$borderRadius === "xxl"
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
            : $borderRadius
            ? stringifyPx($borderRadius)
            : ""};
    `,

    Shadow: ({ $shadow }: ShadowsProps) => css`
        box-shadow: ${$shadow === "xxl"
            ? Shadows.XXL
            : $shadow === "xl"
            ? Shadows.XL
            : $shadow === "l"
            ? Shadows.L
            : $shadow === "m"
            ? Shadows.M
            : $shadow === "s"
            ? Shadows.S
            : $shadow === "xs"
            ? Shadows.XS
            : $shadow === "none"
            ? ""
            : ""};
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
                : $spacer
                ? stringifyPx($spacer)
                : ""};
        `,

    HideScrollbar: css`
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
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
        padding: ${Mixins.Spacers({ $spacer: $padding })};
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
        padding: ${Mixins.Spacers({ $spacer: $padding })};
    `,
}

export default Mixins
