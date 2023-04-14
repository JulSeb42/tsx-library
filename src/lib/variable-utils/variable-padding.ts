/*=============================================== Variable padding ===============================================*/

import { Spacers } from "../"
import type { PaddingTypes } from "../types"

const getPadding = (padding: PaddingTypes) => {
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
        default:
            return "0"
    }
}

export const variablePadding = (padding: PaddingTypes) => {
    if (typeof padding === "object") {
        if (padding?.leftRight) getPadding(padding?.leftRight)
        if (padding?.topBottom) getPadding(padding?.topBottom)
        if (padding?.left) getPadding(padding?.left)
        if (padding?.top) getPadding(padding?.top)
        if (padding?.right) getPadding(padding?.right)
        if (padding?.bottom) getPadding(padding?.bottom)
    }

    return getPadding(padding)
}
