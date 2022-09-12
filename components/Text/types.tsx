/*=============================================== Text types ===============================================*/

import React from "react"

import {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
    CustomFontSizeTypes,
    FontSizeTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    strong: "strong",
    em: "em",
    small: "small",
    blockquote: "blockquote",
    ul: "ul",
    ol: "ol",
    dl: "dl",
} as const

export type TagTypes = keyof typeof tags

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
    textAlign?: TextAlignTypes
    color?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    lineHeight?: string | number
    fontSize?: FontSizeTypes
    customFontSize?: CustomFontSizeTypes
    as?: React.ElementType
}

interface Possible1 extends BaseProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5"
    display?: boolean
}

interface Possible2 extends BaseProps {
    tag?:
        | "h6"
        | "p"
        | "strong"
        | "em"
        | "small"
        | "blockquote"
        | "ul"
        | "ol"
        | "dl"
    display?: never
}

export type AllProps = Possible1 | Possible2
