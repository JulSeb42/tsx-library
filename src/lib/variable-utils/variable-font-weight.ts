/*=============================================== Get font weight ===============================================*/

import { FontWeights } from ".."
import type { FontWeightTypes } from "../types"

export const variableFontWeight = (fontWeight: FontWeightTypes) => {
    if (typeof fontWeight === "number") {
        return fontWeight
    }

    switch (fontWeight) {
        case "black":
            return FontWeights.Black
        case "bold":
            return FontWeights.Bold
        case "regular":
            return FontWeights.Regular
    }
}
