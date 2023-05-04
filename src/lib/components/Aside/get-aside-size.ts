/*=============================================== Get Aside size ===============================================*/

import { Layouts, stringifyPx } from "../../"
import type { AsideSizeTypes } from "./types"

export const getAsideSize = (size: AsideSizeTypes) => {
    if (typeof size === "number") return stringifyPx(size)

    switch (size) {
        case "small":
            return Layouts.Aside.Small
        default:
            return Layouts.Aside.Default
    }
}
