/*=============================================== Text types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

/*==================== List possibilities ====================*/

enum tags {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    strong,
    em,
    small,
    blockquote,
    ul,
    ol,
    dl,
}

export type TagTypes = keyof typeof tags

/*==================== Component Types ====================*/

interface BaseTextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType
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
