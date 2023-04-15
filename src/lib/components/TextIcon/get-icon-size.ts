/*=============================================== Get icon size ===============================================*/

import type { PossibleTextIconTags } from "./types"

export const getIconSize = (
    tag: PossibleTextIconTags,
    display: boolean | undefined,
    iconSize?: number
) => {
    if (iconSize) return iconSize

    if (display) {
        switch (tag) {
            case "h1":
                return 80
            case "h2":
                return 64
            case "h3":
                return 56
            case "h4":
                return 48
            case "h5":
                return 40
        }
    }

    switch (tag) {
        case "h1":
            return 40
        case "h2":
            return 32
        case "h3":
            return 28.8
        case "h4":
            return 24
        case "h5":
            return 20.8
        case "h6":
        case "blockquote":
            return 17.6
        case "small":
            return 14
        case "p":
        default:
            return 16
    }
}
