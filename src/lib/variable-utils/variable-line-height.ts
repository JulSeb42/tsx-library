/*=============================================== Get line height ===============================================*/

import { LineHeights } from ".."
import type { LineHeightsTypes } from "../types"

export const variableLineHeight = (lineHeight: LineHeightsTypes) => {
    switch (lineHeight) {
        case "code":
            return LineHeights.Code
        case "regular":
            return LineHeights.Regular
        default:
            return lineHeight
    }
}
