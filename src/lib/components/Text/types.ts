/*=============================================== Text types ===============================================*/

import type { HTMLAttributes, ElementType, CSSProperties } from "react"

import type {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
    CustomFontSizeTypes,
    FontSizeTypes,
    FontWeightTypes,
    TransitionTypes,
} from "../../types"

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

export type LinkStyleTypes = CSSProperties & {
    fontWeight?: FontWeightTypes
    transition?: TransitionTypes
    textDecorationDefault?:
        | "underline"
        | "overline"
        | "line-through"
        | "initial"
        | "inherit"
        | "none"
    textDecorationHover?:
        | "underline"
        | "overline"
        | "line-through"
        | "initial"
        | "inherit"
        | "none"
    textDecorationActive?:
        | "underline"
        | "overline"
        | "line-through"
        | "initial"
        | "inherit"
        | "none"
    color?: ColorsHoverTypes
}

/*==================== Component Types ====================*/

interface BaseTextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType
    textAlign?: TextAlignTypes
    color?: AllColorsTypes
    linkStyles?: LinkStyleTypes
    lineHeight?: string | number
    fontSize?: FontSizeTypes
    customFontSize?: CustomFontSizeTypes
    maxLines?: number
}

interface TextBehaviour1 extends BaseTextProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5"
    display?: boolean
    fontWeight?: FontWeightTypes
    fontWeightDt?: never
    fontWeightDd?: never
}

interface TextBehaviour2 extends BaseTextProps {
    tag?: "h6" | "p" | "strong" | "em" | "small" | "blockquote" | "ul" | "ol"
    display?: never
    fontWeight?: FontWeightTypes
    fontWeightDt?: never
    fontWeightDd?: never
}

interface TextBehaviour3 extends BaseTextProps {
    tag?: "dl"
    display?: never
    fontWeight?: never
    fontWeightDt?: FontWeightTypes
    fontWeightDd?: FontWeightTypes
}

export type TextProps = TextBehaviour1 | TextBehaviour2 | TextBehaviour3
