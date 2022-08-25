/*=============================================== Mixins ===============================================*/

/*==================== Imports ====================*/

import { css } from "styled-components"
import { stringifyPx, capitalize } from "../utils"

import Variables from "../Variables"

import {
    LibColorsTypes,
    ColorsShortTypes,
    ColorsHoverTypes,
    SpacerTypes,
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
} from "../common-types"

/*==================== Types ====================*/

/*==== Colors ====*/

interface LibColorsProps {
    $color?: LibColorsTypes
}

interface ColorsShortProps {
    $color?: ColorsShortTypes
}

interface ColorsHoverProps {
    $color?: ColorsHoverTypes
}

interface AllColorProps {
    $color?: LibColorsTypes | ColorsShortTypes | string
}

/*==== Spacers ====*/

interface SpacersProps {
    $spacer?: SpacerTypes | string | number
}

/*==== Grid ====*/

interface GridProps {
    $inline?: boolean
    $col?: number | string
    $gap?: SpacerTypes | string | number
    $columnGap?: SpacerTypes | string | number
    $rowGap?: SpacerTypes | string | number
    $justifyItems?: GridJustifyItemsTypes
    $alignItems?: GridAlignItemsTypes
    $justifyContent?: GridJustifyContentTypes
    $alignContent?: GridAlignContentTypes
    $padding?: SpacerTypes | string | number
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
    $gap?: SpacerTypes | string | number
    $columnGap?: SpacerTypes | string | number
    $rowGap?: SpacerTypes | string | number
    $padding?: SpacerTypes | string | number
}

/*==== Icon ====*/

interface IconProps {
    $name: string
    $size?: number
    $color?: LibColorsTypes | ColorsShortTypes | string
}

/*==================== Mixins ====================*/

const Mixins = {
    LibColors: ({ $color }: LibColorsProps) => css`
        ${$color === "black"
            ? Variables.Colors.Black
            : $color === "white"
            ? Variables.Colors.White
            : $color === "gray-50"
            ? Variables.Colors.Gray50
            : $color === "gray-100"
            ? Variables.Colors.Gray100
            : $color === "gray-200"
            ? Variables.Colors.Gray200
            : $color === "gray-300"
            ? Variables.Colors.Gray300
            : $color === "gray-400"
            ? Variables.Colors.Gray400
            : $color === "gray-500"
            ? Variables.Colors.Gray500
            : $color === "gray-600"
            ? Variables.Colors.Gray600
            : $color === "gray-700"
            ? Variables.Colors.Gray700
            : $color === "gray-800"
            ? Variables.Colors.Gray800
            : $color === "gray-900"
            ? Variables.Colors.Gray900
            : $color === "primary-50"
            ? Variables.Colors.Primary50
            : $color === "primary-100"
            ? Variables.Colors.Primary100
            : $color === "primary-200"
            ? Variables.Colors.Primary200
            : $color === "primary-300"
            ? Variables.Colors.Primary300
            : $color === "primary-400"
            ? Variables.Colors.Primary400
            : $color === "primary-500"
            ? Variables.Colors.Primary500
            : $color === "primary-600"
            ? Variables.Colors.Primary600
            : $color === "primary-700"
            ? Variables.Colors.Primary700
            : $color === "primary-800"
            ? Variables.Colors.Primary800
            : $color === "primary-900"
            ? Variables.Colors.Primary900
            : $color === "secondary-50"
            ? Variables.Colors.Secondary50
            : $color === "secondary-100"
            ? Variables.Colors.Secondary100
            : $color === "secondary-200"
            ? Variables.Colors.Secondary200
            : $color === "secondary-300"
            ? Variables.Colors.Secondary300
            : $color === "secondary-400"
            ? Variables.Colors.Secondary400
            : $color === "secondary-500"
            ? Variables.Colors.Secondary500
            : $color === "secondary-600"
            ? Variables.Colors.Secondary600
            : $color === "secondary-700"
            ? Variables.Colors.Secondary700
            : $color === "secondary-800"
            ? Variables.Colors.Secondary800
            : $color === "secondary-900"
            ? Variables.Colors.Secondary900
            : $color === "success-50"
            ? Variables.Colors.Success50
            : $color === "success-100"
            ? Variables.Colors.Success100
            : $color === "success-200"
            ? Variables.Colors.Success200
            : $color === "success-300"
            ? Variables.Colors.Success300
            : $color === "success-400"
            ? Variables.Colors.Success400
            : $color === "success-500"
            ? Variables.Colors.Success500
            : $color === "success-600"
            ? Variables.Colors.Success600
            : $color === "success-700"
            ? Variables.Colors.Success700
            : $color === "success-800"
            ? Variables.Colors.Success800
            : $color === "success-900"
            ? Variables.Colors.Success900
            : $color === "danger-50"
            ? Variables.Colors.Danger50
            : $color === "danger-100"
            ? Variables.Colors.Danger100
            : $color === "danger-200"
            ? Variables.Colors.Danger200
            : $color === "danger-300"
            ? Variables.Colors.Danger300
            : $color === "danger-400"
            ? Variables.Colors.Danger400
            : $color === "danger-500"
            ? Variables.Colors.Danger500
            : $color === "danger-600"
            ? Variables.Colors.Danger600
            : $color === "danger-700"
            ? Variables.Colors.Danger700
            : $color === "danger-800"
            ? Variables.Colors.Danger800
            : $color === "danger-900"
            ? Variables.Colors.Danger900
            : $color === "warning-50"
            ? Variables.Colors.Warning50
            : $color === "warning-100"
            ? Variables.Colors.Warning100
            : $color === "warning-200"
            ? Variables.Colors.Warning200
            : $color === "warning-300"
            ? Variables.Colors.Warning300
            : $color === "warning-400"
            ? Variables.Colors.Warning400
            : $color === "warning-500"
            ? Variables.Colors.Warning500
            : $color === "warning-600"
            ? Variables.Colors.Warning600
            : $color === "warning-700"
            ? Variables.Colors.Warning700
            : $color === "warning-800"
            ? Variables.Colors.Warning800
            : $color === "warning-900"
            ? Variables.Colors.Warning900
            : ""}
    `,

    ColorsShort: ({ $color }: ColorsShortProps) => css`
        ${$color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "gray"
            ? Variables.Colors.Gray500
            : $color === "black"
            ? Variables.Colors.Black
            : $color === "white"
            ? Variables.Colors.White
            : ""}
    `,

    AllColors: ({ $color }: AllColorProps) => css`
        ${$color === "black"
            ? Variables.Colors.Black
            : $color === "white"
            ? Variables.Colors.White
            : $color === "gray-50"
            ? Variables.Colors.Gray50
            : $color === "gray-100"
            ? Variables.Colors.Gray100
            : $color === "gray-200"
            ? Variables.Colors.Gray200
            : $color === "gray-300"
            ? Variables.Colors.Gray300
            : $color === "gray-400"
            ? Variables.Colors.Gray400
            : $color === "gray-500"
            ? Variables.Colors.Gray500
            : $color === "gray-600"
            ? Variables.Colors.Gray600
            : $color === "gray-700"
            ? Variables.Colors.Gray700
            : $color === "gray-800"
            ? Variables.Colors.Gray800
            : $color === "gray-900"
            ? Variables.Colors.Gray900
            : $color === "primary-50"
            ? Variables.Colors.Primary50
            : $color === "primary-100"
            ? Variables.Colors.Primary100
            : $color === "primary-200"
            ? Variables.Colors.Primary200
            : $color === "primary-300"
            ? Variables.Colors.Primary300
            : $color === "primary-400"
            ? Variables.Colors.Primary400
            : $color === "primary-500"
            ? Variables.Colors.Primary500
            : $color === "primary-600"
            ? Variables.Colors.Primary600
            : $color === "primary-700"
            ? Variables.Colors.Primary700
            : $color === "primary-800"
            ? Variables.Colors.Primary800
            : $color === "primary-900"
            ? Variables.Colors.Primary900
            : $color === "secondary-50"
            ? Variables.Colors.Secondary50
            : $color === "secondary-100"
            ? Variables.Colors.Secondary100
            : $color === "secondary-200"
            ? Variables.Colors.Secondary200
            : $color === "secondary-300"
            ? Variables.Colors.Secondary300
            : $color === "secondary-400"
            ? Variables.Colors.Secondary400
            : $color === "secondary-500"
            ? Variables.Colors.Secondary500
            : $color === "secondary-600"
            ? Variables.Colors.Secondary600
            : $color === "secondary-700"
            ? Variables.Colors.Secondary700
            : $color === "secondary-800"
            ? Variables.Colors.Secondary800
            : $color === "secondary-900"
            ? Variables.Colors.Secondary900
            : $color === "success-50"
            ? Variables.Colors.Success50
            : $color === "success-100"
            ? Variables.Colors.Success100
            : $color === "success-200"
            ? Variables.Colors.Success200
            : $color === "success-300"
            ? Variables.Colors.Success300
            : $color === "success-400"
            ? Variables.Colors.Success400
            : $color === "success-500"
            ? Variables.Colors.Success500
            : $color === "success-600"
            ? Variables.Colors.Success600
            : $color === "success-700"
            ? Variables.Colors.Success700
            : $color === "success-800"
            ? Variables.Colors.Success800
            : $color === "success-900"
            ? Variables.Colors.Success900
            : $color === "danger-50"
            ? Variables.Colors.Danger50
            : $color === "danger-100"
            ? Variables.Colors.Danger100
            : $color === "danger-200"
            ? Variables.Colors.Danger200
            : $color === "danger-300"
            ? Variables.Colors.Danger300
            : $color === "danger-400"
            ? Variables.Colors.Danger400
            : $color === "danger-500"
            ? Variables.Colors.Danger500
            : $color === "danger-600"
            ? Variables.Colors.Danger600
            : $color === "danger-700"
            ? Variables.Colors.Danger700
            : $color === "danger-800"
            ? Variables.Colors.Danger800
            : $color === "danger-900"
            ? Variables.Colors.Danger900
            : $color === "warning-50"
            ? Variables.Colors.Warning50
            : $color === "warning-100"
            ? Variables.Colors.Warning100
            : $color === "warning-200"
            ? Variables.Colors.Warning200
            : $color === "warning-300"
            ? Variables.Colors.Warning300
            : $color === "warning-400"
            ? Variables.Colors.Warning400
            : $color === "warning-500"
            ? Variables.Colors.Warning500
            : $color === "warning-600"
            ? Variables.Colors.Warning600
            : $color === "warning-700"
            ? Variables.Colors.Warning700
            : $color === "warning-800"
            ? Variables.Colors.Warning800
            : $color === "warning-900"
            ? Variables.Colors.Warning900
            : $color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "gray"
            ? Variables.Colors.Gray500
            : $color
            ? $color
            : ""}
    `,

    ColorsHoverDefault: ({ $color = "primary" }: ColorsHoverProps) => css`
        ${$color === "white"
            ? Variables.Colors.White
            : Variables.Colors[`${capitalize($color)}500`]};
    `,

    ColorsHoverHover: ({ $color = "primary" }: ColorsHoverProps) =>
        css`
            ${$color === "white"
                ? Variables.Colors.Gray300
                : Variables.Colors[`${capitalize($color)}300`]};
        `,

    ColorsHoverActive: ({ $color = "primary" }: ColorsHoverProps) =>
        css`
            ${$color === "white"
                ? Variables.Colors.Gray100
                : Variables.Colors[`${capitalize($color)}600`]};
        `,

    Spacers: ({ $spacer }: SpacersProps) =>
        css`
            ${$spacer === "xxl"
                ? Variables.Spacers.XXL
                : $spacer === "xl"
                ? Variables.Spacers.XL
                : $spacer === "l"
                ? Variables.Spacers.L
                : $spacer === "m"
                ? Variables.Spacers.M
                : $spacer === "s"
                ? Variables.Spacers.S
                : $spacer === "xs"
                ? Variables.Spacers.XS
                : $spacer === "xxs"
                ? Variables.Spacers.XXS
                : $spacer
                ? stringifyPx($spacer)
                : ""};
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

    Icon: ({ $name, $color: color = "currentColor", $size }: IconProps) => css`
        content: "";
        mask: url("/icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${Mixins.AllColors({
            $color: color,
        })};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,

    LibIcon: ({
        $name,
        $color: color = "currentColor",
        $size,
    }: IconProps) => css`
        content: "";
        mask: url("../icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${Mixins.AllColors({
            $color: color,
        })};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,
}

export default Mixins
