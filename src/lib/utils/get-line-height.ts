/*=============================================== Get line height ===============================================*/

enum textTags {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    small,
}

type PossibleTextTags = keyof typeof textTags

export const getLineHeight = (fontSize: PossibleTextTags) => {
    switch (fontSize) {
        case "h1":
            return 60
        case "h2":
            return 48
        case "h3":
            return 43
        case "h4":
            return 36
        case "h5":
            return 31
        case "h6":
            return 26
        case "small":
            return 21
        default:
            return 24
    }
}
