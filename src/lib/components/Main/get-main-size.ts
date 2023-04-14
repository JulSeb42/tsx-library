/*=============================================== Get main size ===============================================*/

import { Layouts, stringifyPx } from "../../"
import type { MainSizeTypes } from "./types"

export const getMainSize = (size?: MainSizeTypes) => {
    switch (size) {
        case "large":
            return Layouts.Main.Large
        case "form":
            return Layouts.Main.Form
        case "full":
            return Layouts.Main.Full
        case "default":
            return Layouts.Main.Default
        default:
            return stringifyPx(size)
    }
}
