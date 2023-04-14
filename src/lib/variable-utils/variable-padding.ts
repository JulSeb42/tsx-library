/*=============================================== Variable padding ===============================================*/

import { Spacers } from "../"
import type { PaddingTypes } from "../types"

export const variablePadding = (padding: PaddingTypes) => {
    switch (padding) {
        case "xxl":
            return Spacers.XXL
        case "xl":
            return Spacers.XL
        case "l":
            return Spacers.L
        case "m":
            return Spacers.M
        case "s":
            return Spacers.S
        case "xs":
            return Spacers.XS
        case "xxs":
            return Spacers.XXS
        case "none":
            return "0"
        default:
            return null
    }
}

export const variablePaddingLeft = (padding: PaddingTypes) =>
    variablePadding(
        typeof padding === "object" && padding?.left
            ? padding?.left
            : typeof padding === "object" && padding?.leftRight
            ? padding?.leftRight
            : padding
    )

export const variablePaddingTop = (padding: PaddingTypes) =>
    variablePadding(
        typeof padding === "object" && padding?.top
            ? padding?.top
            : typeof padding === "object" && padding?.topBottom
            ? padding?.topBottom
            : padding
    )

export const variablePaddingRight = (padding: PaddingTypes) =>
    variablePadding(
        typeof padding === "object" && padding?.right
            ? padding?.right
            : typeof padding === "object" && padding?.leftRight
            ? padding?.leftRight
            : padding
    )

export const variablePaddingBottom = (padding: PaddingTypes) =>
    variablePadding(
        typeof padding === "object" && padding?.bottom
            ? padding?.bottom
            : typeof padding === "object" && padding?.topBottom
            ? padding?.topBottom
            : padding
    )

export const variableAllPaddings = (padding: PaddingTypes) => {
    return {
        ["--padding-left" as any]: variablePaddingLeft(padding),
        ["--padding-top" as any]: variablePaddingTop(padding),
        ["--padding-right" as any]: variablePaddingRight(padding),
        ["--padding-bottom" as any]: variablePaddingBottom(padding),
    }
}
