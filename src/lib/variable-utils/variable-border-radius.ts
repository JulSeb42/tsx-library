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
        case "none":
            return "0"
        default:
            return null
    }
}

const variableBorderRadiusTopLeft = (radius: RadiusesTypes) =>
    getBorderRadius(
        typeof radius === "object" && radius?.topLeft ? radius.topLeft : radius
    )

const variableBorderRadiusTopRight = (radius: RadiusesTypes) =>
    getBorderRadius(
        typeof radius === "object" && radius?.topRight
            ? radius.topRight
            : radius
    )

const variableBorderRadiusBottomLeft = (radius: RadiusesTypes) =>
    getBorderRadius(
        typeof radius === "object" && radius?.bottomLeft
            ? radius.bottomLeft
            : radius
    )

const variableBorderRadiusBottomRight = (radius: RadiusesTypes) =>
    getBorderRadius(
        typeof radius === "object" && radius?.bottomRight
            ? radius.bottomRight
            : radius
    )

export const variableBorderRadius = (radius: RadiusesTypes) => {
    return {
        ["--radius-top-left" as any]: variableBorderRadiusTopLeft(radius),
        ["--radius-top-right" as any]: variableBorderRadiusTopRight(radius),
        ["--radius-bottom-left" as any]: variableBorderRadiusBottomLeft(radius),
        ["--radius-bottom-right" as any]:
            variableBorderRadiusBottomRight(radius),
    }
}
