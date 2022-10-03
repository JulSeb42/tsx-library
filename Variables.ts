/*=============================================== Variables ===============================================*/

import { css } from "styled-components"
import Mixins from "./Mixins"
import {
    AllColorsTypes,
    ColorsShortTypes,
    ColorsHoverTypes,
} from "./utils/common-types"

import {
    // eslint-disable-next-line
    OverlayProps,
    // eslint-disable-next-line
    SpacersProps,
    // eslint-disable-next-line
    RadiusesProps,
    // eslint-disable-next-line
    ShadowsProps,
    // eslint-disable-next-line
    GridProps,
    // eslint-disable-next-line
    FlexProps,
} from "./Mixins"

/*==================== Types ====================*/

interface AllColorProps {
    $color?: AllColorsTypes
    theme?: any
}

interface ColorsShortProps {
    $color?: ColorsShortTypes
    theme?: any
}

interface ColorsHoverProps {
    $color?: ColorsHoverTypes
}

interface IconProps {
    $name: string
    $size?: number
    $color?: AllColorsTypes
}

interface LibIconProps {
    $icon: string
    $size?: number
    $color?: AllColorsTypes
}

/*==================== Theme, Variables & Mixins ====================*/

const BaseColors = {
    ...Mixins,
    Black: "var(--color-black)",
    White: "var(--color-white)",
}

const ThemeLight = {
    ...BaseColors,
    Gray50: "var(--color-light-gray-50)",
    Gray100: "var(--color-light-gray-100)",
    Gray200: "var(--color-light-gray-200)",
    Gray300: "var(--color-light-gray-300)",
    Gray400: "var(--color-light-gray-400)",
    Gray500: "var(--color-light-gray-500)",
    Gray600: "var(--color-light-gray-600)",
    Gray700: "var(--color-light-gray-700)",
    Gray800: "var(--color-light-gray-800)",
    Gray900: "var(--color-light-gray-900)",
    Primary50: "var(--color-light-primary-50)",
    Primary100: "var(--color-light-primary-100)",
    Primary200: "var(--color-light-primary-200)",
    Primary300: "var(--color-light-primary-300)",
    Primary400: "var(--color-light-primary-400)",
    Primary500: "var(--color-light-primary-500)",
    Primary600: "var(--color-light-primary-600)",
    Primary700: "var(--color-light-primary-700)",
    Primary800: "var(--color-light-primary-800)",
    Primary900: "var(--color-light-primary-900)",
    Secondary50: "var(--color-light-secondary-50)",
    Secondary100: "var(--color-light-secondary-100)",
    Secondary200: "var(--color-light-secondary-200)",
    Secondary300: "var(--color-light-secondary-300)",
    Secondary400: "var(--color-light-secondary-400)",
    Secondary500: "var(--color-light-secondary-500)",
    Secondary600: "var(--color-light-secondary-600)",
    Secondary700: "var(--color-light-secondary-700)",
    Secondary800: "var(--color-light-secondary-800)",
    Secondary900: "var(--color-light-secondary-900)",
    Success50: "var(--color-light-success-50)",
    Success100: "var(--color-light-success-100)",
    Success200: "var(--color-light-success-200)",
    Success300: "var(--color-light-success-300)",
    Success400: "var(--color-light-success-400)",
    Success500: "var(--color-light-success-500)",
    Success600: "var(--color-light-success-600)",
    Success700: "var(--color-light-success-700)",
    Success800: "var(--color-light-success-800)",
    Success900: "var(--color-light-success-900)",
    Danger50: "var(--color-light-danger-50)",
    Danger100: "var(--color-light-danger-100)",
    Danger200: "var(--color-light-danger-200)",
    Danger300: "var(--color-light-danger-300)",
    Danger400: "var(--color-light-danger-400)",
    Danger500: "var(--color-light-danger-500)",
    Danger600: "var(--color-light-danger-600)",
    Danger700: "var(--color-light-danger-700)",
    Danger800: "var(--color-light-danger-800)",
    Danger900: "var(--color-light-danger-900)",
    Warning50: "var(--color-light-warning-50)",
    Warning100: "var(--color-light-warning-100)",
    Warning200: "var(--color-light-warning-200)",
    Warning300: "var(--color-light-warning-300)",
    Warning400: "var(--color-light-warning-400)",
    Warning500: "var(--color-light-warning-500)",
    Warning600: "var(--color-light-warning-600)",
    Warning700: "var(--color-light-warning-700)",
    Warning800: "var(--color-light-warning-800)",
    Warning900: "var(--color-light-warning-900)",
    Background: "var(--color-light-background)",
    Font: "var(--color-light-font)",
    LinkFontDefault: "var(--color-light-link-font-default)",
    LinkFontHover: "var(--color-light-link-font-hover)",
    LinkFontActive: "var(--color-light-link-font-active)",
    LinkBackgroundDefault: "var(--color-light-link-background-default)",
    LinkBackgroundHover: "var(--color-light-link-background-hover)",
    LinkBackgroundActive: "var(--color-light-link-background-active)",

    /*==== Mixins ====*/

    AllColors: ({ $color = "currentColor" }: AllColorProps) => css`
        ${$color === "black"
            ? ThemeLight.Black
            : $color === "white"
            ? ThemeLight.White
            : $color === "gray-50"
            ? ThemeLight.Gray50
            : $color === "gray-100"
            ? ThemeLight.Gray100
            : $color === "gray-200"
            ? ThemeLight.Gray200
            : $color === "gray-300"
            ? ThemeLight.Gray300
            : $color === "gray-400"
            ? ThemeLight.Gray400
            : $color === "gray-500"
            ? ThemeLight.Gray500
            : $color === "gray-600"
            ? ThemeLight.Gray600
            : $color === "gray-700"
            ? ThemeLight.Gray700
            : $color === "gray-800"
            ? ThemeLight.Gray800
            : $color === "gray-900"
            ? ThemeLight.Gray900
            : $color === "primary-50"
            ? ThemeLight.Primary50
            : $color === "primary-100"
            ? ThemeLight.Primary100
            : $color === "primary-200"
            ? ThemeLight.Primary200
            : $color === "primary-300"
            ? ThemeLight.Primary300
            : $color === "primary-400"
            ? ThemeLight.Primary400
            : $color === "primary-500"
            ? ThemeLight.Primary500
            : $color === "primary-600"
            ? ThemeLight.Primary600
            : $color === "primary-700"
            ? ThemeLight.Primary700
            : $color === "primary-800"
            ? ThemeLight.Primary800
            : $color === "primary-900"
            ? ThemeLight.Primary900
            : $color === "secondary-50"
            ? ThemeLight.Secondary50
            : $color === "secondary-100"
            ? ThemeLight.Secondary100
            : $color === "secondary-200"
            ? ThemeLight.Secondary200
            : $color === "secondary-300"
            ? ThemeLight.Secondary300
            : $color === "secondary-400"
            ? ThemeLight.Secondary400
            : $color === "secondary-500"
            ? ThemeLight.Secondary500
            : $color === "secondary-600"
            ? ThemeLight.Secondary600
            : $color === "secondary-700"
            ? ThemeLight.Secondary700
            : $color === "secondary-800"
            ? ThemeLight.Secondary800
            : $color === "secondary-900"
            ? ThemeLight.Secondary900
            : $color === "success-50"
            ? ThemeLight.Success50
            : $color === "success-100"
            ? ThemeLight.Success100
            : $color === "success-200"
            ? ThemeLight.Success200
            : $color === "success-300"
            ? ThemeLight.Success300
            : $color === "success-400"
            ? ThemeLight.Success400
            : $color === "success-500"
            ? ThemeLight.Success500
            : $color === "success-600"
            ? ThemeLight.Success600
            : $color === "success-700"
            ? ThemeLight.Success700
            : $color === "success-800"
            ? ThemeLight.Success800
            : $color === "success-900"
            ? ThemeLight.Success900
            : $color === "danger-50"
            ? ThemeLight.Danger50
            : $color === "danger-100"
            ? ThemeLight.Danger100
            : $color === "danger-200"
            ? ThemeLight.Danger200
            : $color === "danger-300"
            ? ThemeLight.Danger300
            : $color === "danger-400"
            ? ThemeLight.Danger400
            : $color === "danger-500"
            ? ThemeLight.Danger500
            : $color === "danger-600"
            ? ThemeLight.Danger600
            : $color === "danger-700"
            ? ThemeLight.Danger700
            : $color === "danger-800"
            ? ThemeLight.Danger800
            : $color === "danger-900"
            ? ThemeLight.Danger900
            : $color === "warning-50"
            ? ThemeLight.Warning50
            : $color === "warning-100"
            ? ThemeLight.Warning100
            : $color === "warning-200"
            ? ThemeLight.Warning200
            : $color === "warning-300"
            ? ThemeLight.Warning300
            : $color === "warning-400"
            ? ThemeLight.Warning400
            : $color === "warning-500"
            ? ThemeLight.Warning500
            : $color === "warning-600"
            ? ThemeLight.Warning600
            : $color === "warning-700"
            ? ThemeLight.Warning700
            : $color === "warning-800"
            ? ThemeLight.Warning800
            : $color === "warning-900"
            ? ThemeLight.Warning900
            : $color === "primary"
            ? ThemeLight.Primary500
            : $color === "secondary"
            ? ThemeLight.Secondary500
            : $color === "success"
            ? ThemeLight.Success500
            : $color === "danger"
            ? ThemeLight.Danger500
            : $color === "warning"
            ? ThemeLight.Warning500
            : $color === "gray"
            ? ThemeLight.Gray500
            : $color === "background"
            ? ThemeLight.Background
            : $color === "font"
            ? ThemeLight.Font
            : $color === "transparent"
            ? "transparent"
            : "currentColor"}
    `,

    ColorsShort: ({ $color }: ColorsShortProps) => css`
        ${$color === "primary"
            ? ThemeLight.Primary500
            : $color === "secondary"
            ? ThemeLight.Secondary500
            : $color === "success"
            ? ThemeLight.Success500
            : $color === "danger"
            ? ThemeLight.Danger500
            : $color === "warning"
            ? ThemeLight.Warning500
            : $color === "gray"
            ? ThemeLight.Gray500
            : $color === "black"
            ? ThemeLight.Black
            : $color === "white"
            ? ThemeLight.White
            : ""}
    `,

    ColorsHoverDefault: ({ $color }: ColorsHoverProps) => css`
        ${$color === "primary"
            ? ThemeLight.Primary500
            : $color === "secondary"
            ? ThemeLight.Secondary500
            : $color === "success"
            ? ThemeLight.Success500
            : $color === "danger"
            ? ThemeLight.Danger500
            : $color === "warning"
            ? ThemeLight.Warning500
            : $color === "white"
            ? ThemeLight.White
            : $color === "background"
            ? ThemeLight.LinkBackgroundDefault
            : $color === "font"
            ? ThemeLight.LinkFontDefault
            : ""}
    `,

    ColorsHoverHover: ({ $color }: ColorsHoverProps) =>
        css`
            ${$color === "primary"
                ? ThemeLight.Primary300
                : $color === "secondary"
                ? ThemeLight.Secondary300
                : $color === "success"
                ? ThemeLight.Success300
                : $color === "danger"
                ? ThemeLight.Danger300
                : $color === "warning"
                ? ThemeLight.Warning300
                : $color === "white"
                ? ThemeLight.Gray300
                : $color === "background"
                ? ThemeLight.LinkBackgroundHover
                : $color === "font"
                ? ThemeLight.LinkFontHover
                : ""}
        `,

    ColorsHoverActive: ({ $color }: ColorsHoverProps) =>
        css`
            ${$color === "primary"
                ? ThemeLight.Primary600
                : $color === "secondary"
                ? ThemeLight.Secondary600
                : $color === "success"
                ? ThemeLight.Success600
                : $color === "danger"
                ? ThemeLight.Danger600
                : $color === "warning"
                ? ThemeLight.Warning600
                : $color === "white"
                ? ThemeLight.Gray100
                : $color === "background"
                ? ThemeLight.LinkBackgroundActive
                : $color === "font"
                ? ThemeLight.LinkFontActive
                : ""}
        `,

    Icon: ({ $name, $color = "currentColor", $size }: IconProps) => css`
        content: "";
        mask: url("/icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${ThemeLight.AllColors({
            $color: $color,
        })};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,

    LibIcon: ({ $icon, $color = "currentColor", $size }: LibIconProps) => css`
        content: "";
        mask: url("${$icon}") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${ThemeLight.AllColors({
            $color: $color,
        })};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,
}

const ThemeDark = {
    ...BaseColors,
    Gray50: "var(--color-dark-gray-50)",
    Gray100: "var(--color-dark-gray-100)",
    Gray200: "var(--color-dark-gray-200)",
    Gray300: "var(--color-dark-gray-300)",
    Gray400: "var(--color-dark-gray-400)",
    Gray500: "var(--color-dark-gray-500)",
    Gray600: "var(--color-dark-gray-600)",
    Gray700: "var(--color-dark-gray-700)",
    Gray800: "var(--color-dark-gray-800)",
    Gray900: "var(--color-dark-gray-900)",
    Primary50: "var(--color-dark-primary-50)",
    Primary100: "var(--color-dark-primary-100)",
    Primary200: "var(--color-dark-primary-200)",
    Primary300: "var(--color-dark-primary-300)",
    Primary400: "var(--color-dark-primary-400)",
    Primary500: "var(--color-dark-primary-500)",
    Primary600: "var(--color-dark-primary-600)",
    Primary700: "var(--color-dark-primary-700)",
    Primary800: "var(--color-dark-primary-800)",
    Primary900: "var(--color-dark-primary-900)",
    Secondary50: "var(--color-dark-secondary-50)",
    Secondary100: "var(--color-dark-secondary-100)",
    Secondary200: "var(--color-dark-secondary-200)",
    Secondary300: "var(--color-dark-secondary-300)",
    Secondary400: "var(--color-dark-secondary-400)",
    Secondary500: "var(--color-dark-secondary-500)",
    Secondary600: "var(--color-dark-secondary-600)",
    Secondary700: "var(--color-dark-secondary-700)",
    Secondary800: "var(--color-dark-secondary-800)",
    Secondary900: "var(--color-dark-secondary-900)",
    Success50: "var(--color-dark-success-50)",
    Success100: "var(--color-dark-success-100)",
    Success200: "var(--color-dark-success-200)",
    Success300: "var(--color-dark-success-300)",
    Success400: "var(--color-dark-success-400)",
    Success500: "var(--color-dark-success-500)",
    Success600: "var(--color-dark-success-600)",
    Success700: "var(--color-dark-success-700)",
    Success800: "var(--color-dark-success-800)",
    Success900: "var(--color-dark-success-900)",
    Danger50: "var(--color-dark-danger-50)",
    Danger100: "var(--color-dark-danger-100)",
    Danger200: "var(--color-dark-danger-200)",
    Danger300: "var(--color-dark-danger-300)",
    Danger400: "var(--color-dark-danger-400)",
    Danger500: "var(--color-dark-danger-500)",
    Danger600: "var(--color-dark-danger-600)",
    Danger700: "var(--color-dark-danger-700)",
    Danger800: "var(--color-dark-danger-800)",
    Danger900: "var(--color-dark-danger-900)",
    Warning50: "var(--color-dark-warning-50)",
    Warning100: "var(--color-dark-warning-100)",
    Warning200: "var(--color-dark-warning-200)",
    Warning300: "var(--color-dark-warning-300)",
    Warning400: "var(--color-dark-warning-400)",
    Warning500: "var(--color-dark-warning-500)",
    Warning600: "var(--color-dark-warning-600)",
    Warning700: "var(--color-dark-warning-700)",
    Warning800: "var(--color-dark-warning-800)",
    Warning900: "var(--color-dark-warning-900)",
    Background: "var(--color-dark-background)",
    Font: "var(--color-dark-font)",
    LinkFontDefault: "var(--color-dark-link-font-default)",
    LinkFontHover: "var(--color-dark-link-font-hover)",
    LinkFontActive: "var(--color-dark-link-font-active)",
    LinkBackgroundDefault: "var(--color-dark-link-background-default)",
    LinkBackgroundHover: "var(--color-dark-link-background-hover)",
    LinkBackgroundActive: "var(--color-dark-link-background-active)",

    /*==== Mixins ====*/

    AllColors: ({ $color = "currentColor" }: AllColorProps) => css`
        ${$color === "black"
            ? ThemeDark.Black
            : $color === "white"
            ? ThemeDark.White
            : $color === "gray-50"
            ? ThemeDark.Gray50
            : $color === "gray-100"
            ? ThemeDark.Gray100
            : $color === "gray-200"
            ? ThemeDark.Gray200
            : $color === "gray-300"
            ? ThemeDark.Gray300
            : $color === "gray-400"
            ? ThemeDark.Gray400
            : $color === "gray-500"
            ? ThemeDark.Gray500
            : $color === "gray-600"
            ? ThemeDark.Gray600
            : $color === "gray-700"
            ? ThemeDark.Gray700
            : $color === "gray-800"
            ? ThemeDark.Gray800
            : $color === "gray-900"
            ? ThemeDark.Gray900
            : $color === "primary-50"
            ? ThemeDark.Primary50
            : $color === "primary-100"
            ? ThemeDark.Primary100
            : $color === "primary-200"
            ? ThemeDark.Primary200
            : $color === "primary-300"
            ? ThemeDark.Primary300
            : $color === "primary-400"
            ? ThemeDark.Primary400
            : $color === "primary-500"
            ? ThemeDark.Primary500
            : $color === "primary-600"
            ? ThemeDark.Primary600
            : $color === "primary-700"
            ? ThemeDark.Primary700
            : $color === "primary-800"
            ? ThemeDark.Primary800
            : $color === "primary-900"
            ? ThemeDark.Primary900
            : $color === "secondary-50"
            ? ThemeDark.Secondary50
            : $color === "secondary-100"
            ? ThemeDark.Secondary100
            : $color === "secondary-200"
            ? ThemeDark.Secondary200
            : $color === "secondary-300"
            ? ThemeDark.Secondary300
            : $color === "secondary-400"
            ? ThemeDark.Secondary400
            : $color === "secondary-500"
            ? ThemeDark.Secondary500
            : $color === "secondary-600"
            ? ThemeDark.Secondary600
            : $color === "secondary-700"
            ? ThemeDark.Secondary700
            : $color === "secondary-800"
            ? ThemeDark.Secondary800
            : $color === "secondary-900"
            ? ThemeDark.Secondary900
            : $color === "success-50"
            ? ThemeDark.Success50
            : $color === "success-100"
            ? ThemeDark.Success100
            : $color === "success-200"
            ? ThemeDark.Success200
            : $color === "success-300"
            ? ThemeDark.Success300
            : $color === "success-400"
            ? ThemeDark.Success400
            : $color === "success-500"
            ? ThemeDark.Success500
            : $color === "success-600"
            ? ThemeDark.Success600
            : $color === "success-700"
            ? ThemeDark.Success700
            : $color === "success-800"
            ? ThemeDark.Success800
            : $color === "success-900"
            ? ThemeDark.Success900
            : $color === "danger-50"
            ? ThemeDark.Danger50
            : $color === "danger-100"
            ? ThemeDark.Danger100
            : $color === "danger-200"
            ? ThemeDark.Danger200
            : $color === "danger-300"
            ? ThemeDark.Danger300
            : $color === "danger-400"
            ? ThemeDark.Danger400
            : $color === "danger-500"
            ? ThemeDark.Danger500
            : $color === "danger-600"
            ? ThemeDark.Danger600
            : $color === "danger-700"
            ? ThemeDark.Danger700
            : $color === "danger-800"
            ? ThemeDark.Danger800
            : $color === "danger-900"
            ? ThemeDark.Danger900
            : $color === "warning-50"
            ? ThemeDark.Warning50
            : $color === "warning-100"
            ? ThemeDark.Warning100
            : $color === "warning-200"
            ? ThemeDark.Warning200
            : $color === "warning-300"
            ? ThemeDark.Warning300
            : $color === "warning-400"
            ? ThemeDark.Warning400
            : $color === "warning-500"
            ? ThemeDark.Warning500
            : $color === "warning-600"
            ? ThemeDark.Warning600
            : $color === "warning-700"
            ? ThemeDark.Warning700
            : $color === "warning-800"
            ? ThemeDark.Warning800
            : $color === "warning-900"
            ? ThemeDark.Warning900
            : $color === "primary"
            ? ThemeDark.Primary500
            : $color === "secondary"
            ? ThemeDark.Secondary500
            : $color === "success"
            ? ThemeDark.Success500
            : $color === "danger"
            ? ThemeDark.Danger500
            : $color === "warning"
            ? ThemeDark.Warning500
            : $color === "gray"
            ? ThemeDark.Gray500
            : $color === "background"
            ? ThemeDark.Background
            : $color === "font"
            ? ThemeDark.Font
            : $color === "transparent"
            ? "transparent"
            : "currentColor"}
    `,

    ColorsShort: ({ $color }: ColorsShortProps) => css`
        ${$color === "primary"
            ? ThemeDark.Primary500
            : $color === "secondary"
            ? ThemeDark.Secondary500
            : $color === "success"
            ? ThemeDark.Success500
            : $color === "danger"
            ? ThemeDark.Danger500
            : $color === "warning"
            ? ThemeDark.Warning500
            : $color === "gray"
            ? ThemeDark.Gray500
            : $color === "black"
            ? ThemeDark.Black
            : $color === "white"
            ? ThemeDark.White
            : ""}
    `,

    ColorsHoverDefault: ({ $color }: ColorsHoverProps) => css`
        ${$color === "primary"
            ? ThemeDark.Primary500
            : $color === "secondary"
            ? ThemeDark.Secondary500
            : $color === "success"
            ? ThemeDark.Success500
            : $color === "danger"
            ? ThemeDark.Danger500
            : $color === "warning"
            ? ThemeDark.Warning500
            : $color === "white"
            ? ThemeDark.White
            : $color === "background"
            ? ThemeDark.LinkBackgroundDefault
            : $color === "font"
            ? ThemeDark.LinkFontDefault
            : ""}
    `,

    ColorsHoverHover: ({ $color }: ColorsHoverProps) =>
        css`
            ${$color === "primary"
                ? ThemeDark.Primary300
                : $color === "secondary"
                ? ThemeDark.Secondary300
                : $color === "success"
                ? ThemeDark.Success300
                : $color === "danger"
                ? ThemeDark.Danger300
                : $color === "warning"
                ? ThemeDark.Warning300
                : $color === "white"
                ? ThemeDark.Gray300
                : $color === "background"
                ? ThemeDark.LinkBackgroundHover
                : $color === "font"
                ? ThemeDark.LinkFontHover
                : ""}
        `,

    ColorsHoverActive: ({ $color }: ColorsHoverProps) =>
        css`
            ${$color === "primary"
                ? ThemeDark.Primary600
                : $color === "secondary"
                ? ThemeDark.Secondary600
                : $color === "success"
                ? ThemeDark.Success600
                : $color === "danger"
                ? ThemeDark.Danger600
                : $color === "warning"
                ? ThemeDark.Warning600
                : $color === "white"
                ? ThemeDark.Gray100
                : $color === "background"
                ? ThemeDark.LinkBackgroundActive
                : $color === "font"
                ? ThemeDark.LinkFontActive
                : ""}
        `,

    Icon: ({ $name, $color = "currentColor", $size }: IconProps) => css`
        content: "";
        mask: url("/icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${ThemeDark.AllColors({
            $color: $color,
        })};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,

    LibIcon: ({ $icon, $color = "currentColor", $size }: LibIconProps) => css`
        content: "";
        mask: url("${$icon}") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${ThemeDark.AllColors({
            $color: $color,
        })};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,
}

const Overlays = {
    Plain: {
        Black50: "var(--overlay-black-50)",
        Black80: "var(--overlay-black-80)",
        White50: "var(--overlay-white-50)",
        White80: "var(--overlay-white-80)",
    },

    Gradient: {
        Black: "var(--overlay-gradient-black)",
        White: "var(--overlay-gradient-white)",
    },
}

const FontFamilies = {
    Body: "var(--font-family-body)",
    Code: "var(--font-family-code)",
}

const FontSizes = {
    Display: {
        H1: "var(--font-size-display-h1)",
        H2: "var(--font-size-display-h2)",
        H3: "var(--font-size-display-h3)",
        H4: "var(--font-size-display-h4)",
        H5: "var(--font-size-display-h5)",
    },

    Titles: {
        H1: "var(--font-size-h1)",
        H2: "var(--font-size-h2)",
        H3: "var(--font-size-h3)",
        H4: "var(--font-size-h4)",
        H5: "var(--font-size-h5)",
        H6: "var(--font-size-h6)",
    },

    Body: "var(--font-size-body)",
    Small: "var(--font-size-small)",
}

const FontWeights = {
    Regular: "var(--font-weight-regular)",
    Bold: "var(--font-weight-bold)",
    Black: "var(--font-weight-black)",
}

const LineHeights = {
    Regular: "var(--line-height)",
    Code: "var(--line-height-code)",
}

const Shadows = {
    XXL: "var(--shadow-xxl)",
    XL: "var(--shadow-xl)",
    L: "var(--shadow-l)",
    M: "var(--shadow-m)",
    S: "var(--shadow-s)",
    XS: "var(--shadow-xs)",
}

const Radiuses = {
    XXL: "var(--radius-xxl)",
    XL: "var(--radius-xl)",
    L: "var(--radius-l)",
    M: "var(--radius-m)",
    S: "var(--radius-s)",
    XS: "var(--radius-xs)",
    Round: "var(--radius-round)",
    Circle: "var(--radius-circle)",
}

const Layouts = {
    /* Main */

    Main: {
        Default: "var(--main-default)",
        Large: "var(--main-large)",
        Form: "var(--main-form)",
        Full: "var(--main-full)",
    },

    /* Aside */

    Aside: {
        Default: "var(--aside-default)",
        Small: "var(--aside-small)",
    },

    /* Wrapper */

    Wrapper: {
        OneCol: "var(--wrapper-1-col)",
        TwoCols: "var(--wrapper-2-cols)",
        ThreeCols: "var(--wrapper-3-cols)",
    },
}

const Spacers = {
    XXL: "var(--spacer-xxl)",
    XL: "var(--spacer-xl)",
    L: "var(--spacer-l)",
    M: "var(--spacer-m)",
    S: "var(--spacer-s)",
    XS: "var(--spacer-xs)",
    XXS: "var(--spacer-xxs)",
}

const Transitions = {
    Short: "var(--transition-short)",
    Long: "var(--transition-long)",
    Bezier: "var(--transition-bezier)",
}

const Breakpoints = {
    Tablet: "(max-width: 1024px)",
    Mobile: "(max-width: 600px)",
    Touch: "(hover: none) and (pointer: coarse)",
    Hover: "(hover: hover)",
}

export {
    ThemeLight,
    ThemeDark,
    Overlays,
    FontFamilies,
    FontSizes,
    FontWeights,
    LineHeights,
    Shadows,
    Radiuses,
    Layouts,
    Spacers,
    Transitions,
    Breakpoints,
}
