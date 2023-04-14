/*=============================================== Get spacer ===============================================*/

import { Spacers, stringifyPx } from ".."
import type { SpacersTypes } from "../types"

export const variableSpacer = (spacer: SpacersTypes) => {
    switch (spacer) {
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
            return stringifyPx(spacer) || 0
    }
}
