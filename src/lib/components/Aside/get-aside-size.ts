/*=============================================== Get Aside size ===============================================*/

import { Layouts, stringifyPx } from "../../"
import type { AsideSizeTypes } from "./types"

export const getAsideSize = (size: AsideSizeTypes) => {
    switch (size) {
        case "small":
            return Layouts.Aside.Small
        case "default":
            return Layouts.Aside.Default
        default:
            return stringifyPx(size)
    }
}
