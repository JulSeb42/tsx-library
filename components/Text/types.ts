/*=============================================== Text types ===============================================*/

import React from "react"

import {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
    CustomFontSizeTypes,
    FontSizeTypes,
    FontWeightTypes,
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

/*==================== Component Types ====================*/

interface BaseTextProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType
    textAlign?: TextAlignTypes
    color?: AllColorsTypes
    linkColor?: ColorsHoverTypes
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
