// Imports
import { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../Variables"

import {
    colorProps,
    backgroundProps,
    shadowProps,
    radiusProps,
    iconProps,
    flexboxProps,
    gridProps,
    textColorProps,
    gapProps,
} from "./types"

const Color = (props: colorProps) => css`
    ${props.color === "primary"
        ? Variables.Colors.Primary500
        : props.color === "secondary"
        ? Variables.Colors.Secondary500
        : props.color === "success"
        ? Variables.Colors.Success500
        : props.color === "danger"
        ? Variables.Colors.Danger500
        : props.color === "warning"
        ? Variables.Colors.Warning500
        : props.color === "black"
        ? Variables.Colors.Black
        : props.color === "white"
        ? Variables.Colors.White
        : props.color === "gray"
        ? Variables.Colors.Gray500
        : props.color === "current"
        ? "currentColor"
        : props.color || "currentColor"};
`

const ColorHover = (props: colorProps) => css`
    ${props.color === "primary"
        ? Variables.Colors.Primary300
        : props.color === "secondary"
        ? Variables.Colors.Secondary300
        : props.color === "success"
        ? Variables.Colors.Success300
        : props.color === "danger"
        ? Variables.Colors.Danger300
        : props.color === "warning"
        ? Variables.Colors.Warning300
        : props.color === "black"
        ? Variables.Colors.Gray700
        : props.color === "white"
        ? Variables.Colors.Gray300
        : props.color === "gray"
        ? Variables.Colors.Gray300
        : props.color === "current"
        ? "currentColor"
        : props.colorHover || "currentColor"};
`

const ColorActive = (props: colorProps) => css`
    ${props.color === "primary"
        ? Variables.Colors.Primary600
        : props.color === "secondary"
        ? Variables.Colors.Secondary600
        : props.color === "success"
        ? Variables.Colors.Success600
        : props.color === "danger"
        ? Variables.Colors.Danger600
        : props.color === "warning"
        ? Variables.Colors.Warning600
        : props.color === "black"
        ? Variables.Colors.Gray900
        : props.color === "white"
        ? Variables.Colors.Gray100
        : props.color === "gray"
        ? Variables.Colors.Gray600
        : props.color === "current"
        ? "currentColor"
        : props.colorActive || "currentColor"};
`

const Background = (props: backgroundProps) => css`
    ${props.background === "primary"
        ? Variables.Colors.Primary500
        : props.background === "secondary"
        ? Variables.Colors.Secondary500
        : props.background === "success"
        ? Variables.Colors.Success500
        : props.background === "danger"
        ? Variables.Colors.Danger500
        : props.background === "warning"
        ? Variables.Colors.Warning500
        : props.background === "black"
        ? Variables.Colors.Black
        : props.background === "white"
        ? Variables.Colors.White
        : props.background === "gray"
        ? Variables.Colors.Gray500
        : props.background === "current"
        ? "currentColor"
        : props.background || "currentColor"};
`

const BackgroundHover = (props: backgroundProps) => css`
    ${props.background === "primary"
        ? Variables.Colors.Primary300
        : props.background === "secondary"
        ? Variables.Colors.Secondary300
        : props.background === "success"
        ? Variables.Colors.Success300
        : props.background === "danger"
        ? Variables.Colors.Danger300
        : props.background === "warning"
        ? Variables.Colors.Warning300
        : props.background === "black"
        ? Variables.Colors.Black
        : props.background === "white"
        ? Variables.Colors.White
        : props.background === "gray"
        ? Variables.Colors.Gray300
        : props.background === "current"
        ? "currentColor"
        : props.backgroundHover || "currentColor"};
`

const BackgroundActive = (props: backgroundProps) => css`
    ${props.background === "primary"
        ? Variables.Colors.Primary600
        : props.background === "secondary"
        ? Variables.Colors.Secondary600
        : props.background === "success"
        ? Variables.Colors.Success600
        : props.background === "danger"
        ? Variables.Colors.Danger600
        : props.background === "warning"
        ? Variables.Colors.Warning600
        : props.background === "black"
        ? Variables.Colors.Black
        : props.background === "white"
        ? Variables.Colors.White
        : props.background === "gray"
        ? Variables.Colors.Gray600
        : props.background === "current"
        ? "currentColor"
        : props.backgroundActive || "currentColor"};
`

const TextColor = (props: textColorProps) => css`
    ${props.textColor === "primary"
        ? Variables.Colors.Primary500
        : props.textColor === "secondary"
        ? Variables.Colors.Secondary500
        : props.textColor === "success"
        ? Variables.Colors.Success500
        : props.textColor === "danger"
        ? Variables.Colors.Danger500
        : props.textColor === "warning"
        ? Variables.Colors.Warning500
        : props.textColor === "black"
        ? Variables.Colors.Black
        : props.textColor === "white"
        ? Variables.Colors.White
        : props.textColor === "gray"
        ? Variables.Colors.Gray500
        : props.textColor === "current"
        ? "currentColor"
        : props.textColor || "currentColor"};
`

const Shadow = (props: shadowProps) => css`
    box-shadow: ${props.shadow === "xs"
        ? Variables.Shadows.XS
        : props.shadow === "s"
        ? Variables.Shadows.S
        : props.shadow === "m"
        ? Variables.Shadows.M
        : props.shadow === "l"
        ? Variables.Shadows.L
        : props.shadow === "xl"
        ? Variables.Shadows.XL
        : props.shadow === "xxl"
        ? Variables.Shadows.XXL
        : props.shadow};
`

const Radius = (props: radiusProps) => css`
    border-radius: ${props.radius === "xs"
        ? Variables.Radiuses.XS
        : props.radius === "s"
        ? Variables.Radiuses.S
        : props.radius === "m"
        ? Variables.Radiuses.M
        : props.radius === "l"
        ? Variables.Radiuses.L
        : props.radius === "xl"
        ? Variables.Radiuses.XL
        : props.radius === "xxl"
        ? Variables.Radiuses.XXL
        : props.radius === "round"
        ? Variables.Radiuses.Round
        : props.radius === "circle"
        ? "50%"
        : props.radius
        ? stringifyPx(props.radius)
        : 0};
`

const Icon = (props: iconProps) => css`
    content: "";
    mask: url("/icons/${props.icon}.svg") no-repeat 50% 50%;
    mask-size: cover;
    background-color: ${props.color === "primary"
        ? Variables.Colors.Primary500
        : props.color === "secondary"
        ? Variables.Colors.Secondary500
        : props.color === "success"
        ? Variables.Colors.Success500
        : props.color === "danger"
        ? Variables.Colors.Danger500
        : props.color === "warning"
        ? Variables.Colors.Warning500
        : props.color === "black"
        ? Variables.Colors.Black
        : props.color === "white"
        ? Variables.Colors.White
        : props.color === "gray"
        ? Variables.Colors.Gray500
        : props.color === "current"
        ? "currentColor"
        : props.color};
    display: inline-block;
    width: ${props.size}px;
    height: ${props.size}px;
`

const Flexbox = (props: flexboxProps) => css`
    display: ${props.inline ? "inline-flex" : "flex"};
    flex-direction: ${props.direction};
    flex-wrap: ${props.wrap};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    align-content: ${props.alignContent};
    gap: ${props.gap === "xxs"
        ? Variables.Spacers.XXS
        : props.gap === "xs"
        ? Variables.Spacers.XS
        : props.gap === "s"
        ? Variables.Spacers.S
        : props.gap === "m"
        ? Variables.Spacers.M
        : props.gap === "l"
        ? Variables.Spacers.L
        : props.gap === "xl"
        ? Variables.Spacers.XL
        : props.gap === "xxl"
        ? Variables.Spacers.XXL
        : props.gap
        ? stringifyPx(props.gap)
        : 0};
`

const Grid = (props: gridProps) => css`
    display: ${props.inline ? "inline-grid" : "grid"};
    grid-template-columns: ${typeof props.col === "number"
        ? `repeat(${props.col}, 1fr)`
        : props.col};
    grid-template-rows: ${props.rows};
    grid-template-areas: ${props.areas};
    gap: ${props.gap === "xxs"
        ? Variables.Spacers.XXS
        : props.gap === "xs"
        ? Variables.Spacers.XS
        : props.gap === "s"
        ? Variables.Spacers.S
        : props.gap === "m"
        ? Variables.Spacers.M
        : props.gap === "l"
        ? Variables.Spacers.L
        : props.gap === "xl"
        ? Variables.Spacers.XL
        : props.gap === "xxl"
        ? Variables.Spacers.XXL
        : props.gap
        ? stringifyPx(props.gap)
        : 0};
    justify-items: ${props.justifyItems};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    align-content: ${props.alignContent};
    padding: ${props.padding ? stringifyPx(props.padding) : 0};
`

const Gap = (props: gapProps) => css`
    gap: ${props.gap === "xxs"
        ? Variables.Spacers.XXS
        : props.gap === "xs"
        ? Variables.Spacers.XS
        : props.gap === "s"
        ? Variables.Spacers.S
        : props.gap === "m"
        ? Variables.Spacers.M
        : props.gap === "l"
        ? Variables.Spacers.L
        : props.gap === "xl"
        ? Variables.Spacers.XL
        : props.gap === "xxl"
        ? Variables.Spacers.XXL
        : props.gap
        ? stringifyPx(props.gap)
        : 0};
`

export {
    Color,
    ColorHover,
    ColorActive,
    Background,
    BackgroundHover,
    BackgroundActive,
    TextColor,
    Shadow,
    Radius,
    Icon,
    Flexbox,
    Grid,
    Gap,
}
