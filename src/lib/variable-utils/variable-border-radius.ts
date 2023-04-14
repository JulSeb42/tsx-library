/*=============================================== Variable border radius ===============================================*/

import { Radiuses } from "../"
import type { RadiusesTypes } from "../types"

const getBorderRadius = (radius: RadiusesTypes) => {
    switch (radius) {
        case "xxl":
            return Radiuses.XXL
        case "xl":
            return Radiuses.XL
        case "l":
            return Radiuses.L
        case "m":
            return Radiuses.M
        case "s":
            return Radiuses.S
        case "xs":
            return Radiuses.XS
        case "circle":
            return Radiuses.Circle
        case "round":
            return Radiuses.Round
        default:
            return "0"
    }
}

export const variableBorderRadius = (borderRadius: RadiusesTypes) => {
    if (typeof borderRadius === "object") {
        if (borderRadius?.topLeft) getBorderRadius(borderRadius?.topLeft)
        if (borderRadius?.topRight) getBorderRadius(borderRadius?.topRight)
        if (borderRadius?.bottomLeft) getBorderRadius(borderRadius?.bottomLeft)
        if (borderRadius?.bottomRight)
            getBorderRadius(borderRadius?.bottomRight)

        return
    }

    return getBorderRadius(borderRadius)
}
