/*=============================================== Text types ===============================================*/

import React from "react"

import {
    TextAlignTypes,
    ColorsShortTypes,
    LibColorsTypes,
    ColorsHoverTypes,
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

const fontSizes = {
    "display-h1": "display-h1",
    "display-h2": "display-h2",
    "display-h3": "display-h3",
    "display-h4": "display-h4",
    "display-h5": "display-h5",
    "title-h1": "title-h1",
    "title-h2": "title-h2",
    "title-h3": "title-h3",
    "title-h4": "title-h4",
    "title-h5": "title-h5",
    "title-h6": "title-h6",
    body: "body",
    small: "small",
} as const

export type FontSizeTypes = keyof typeof fontSizes

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
    textAlign?: TextAlignTypes
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    fontSize?: FontSizeTypes | string | number
    lineHeight?: string | number
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
