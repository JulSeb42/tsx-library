/*=============================================== Variable shadow ===============================================*/

import { Shadows } from "../"
import type { ShadowsTypes, BoxShadowProps } from "../types"

const getShadow = (shadow: ShadowsTypes) => {
    switch (shadow) {
        case "xxl":
            return Shadows.XXL
        case "xl":
            return Shadows.XL
        case "l":
            return Shadows.L
        case "m":
            return Shadows.M
        case "s":
            return Shadows.S
        case "xs":
            return Shadows.XS
        default:
            return null
    }
}

export const variableShadow = (shadow: ShadowsTypes | BoxShadowProps) => {
    if (typeof shadow === "object") {
        if (shadow?.default) getShadow(shadow?.default)
        if (shadow?.hover) getShadow(shadow?.hover)
        if (shadow?.active) getShadow(shadow?.active)
        return
    } else {
        return getShadow(shadow)
    }
}
