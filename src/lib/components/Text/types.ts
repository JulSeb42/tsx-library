/*=============================================== Text types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { TextAlignTypes } from "../../types"

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

interface BaseTextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType
    textAlign?: TextAlignTypes
}

interface TextBehaviour1 extends BaseTextProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5"
    display?: boolean
}

interface TextBehaviour2 extends BaseTextProps {
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

export type TextProps = TextBehaviour1 | TextBehaviour2
