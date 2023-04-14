/*=============================================== Variable font family ===============================================*/

import { FontFamilies } from "../"
import type { FontFamiliesTypes } from "../types"

export const variableFontFamily = (fontFamily: FontFamiliesTypes) => {
    switch (fontFamily) {
        case "custom":
            return FontFamilies.Custom
        case "code":
            return FontFamilies.Code
        default:
            return FontFamilies.Body
    }
}
