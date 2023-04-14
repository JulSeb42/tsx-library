/*=============================================== Get Main content size ===============================================*/

import { Layouts, stringifyPx } from "../../"

export const getMainContentSize = (
    size?: "default" | "large" | "form" | number
) => {
    switch (size) {
        case "default":
            return Layouts.Main.Default
        case "form":
            return Layouts.Main.Form
        case "large":
            return Layouts.Main.Large
        default:
            return stringifyPx(size)
    }
}
