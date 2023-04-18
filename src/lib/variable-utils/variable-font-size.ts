/*=============================================== Get font size ===============================================*/

import { FontSizes } from ".."
import type { FontSizeTypes } from "../types"

export const variableFontSize = (fontSize: FontSizeTypes) => {
    switch (fontSize) {
        case "display-h1":
            return FontSizes.Display.H1
        case "display-h2":
            return FontSizes.Display.H2
        case "display-h3":
            return FontSizes.Display.H3
        case "display-h4":
            return FontSizes.Display.H4
        case "display-h5":
            return FontSizes.Display.H5
        case "title-h1":
            return FontSizes.Titles.H1
        case "title-h2":
            return FontSizes.Titles.H2
        case "title-h3":
            return FontSizes.Titles.H3
        case "title-h4":
            return FontSizes.Titles.H4
        case "title-h5":
            return FontSizes.Titles.H5
        case "title-h6":
            return FontSizes.Titles.H6
        case "small":
            return FontSizes.Small
        case "body":
            return FontSizes.Body
        default:
            return FontSizes.Body
    }
}
