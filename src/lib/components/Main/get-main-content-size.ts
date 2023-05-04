/*=============================================== Get Main content size ===============================================*/

import { Layouts, stringifyPx } from "../../"

export const getMainContentSize = (
    size?: "default" | "large" | "form" | number
) => {
    if (typeof size === "number") return stringifyPx(size)

    switch (size) {
        case "form":
            return Layouts.Main.Form
        case "large":
            return Layouts.Main.Large
        default:
            return Layouts.Main.Default
    }
}
