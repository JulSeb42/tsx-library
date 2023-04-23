/*=============================================== Highlight types ===============================================*/

import type { ElementType } from "react"

import type { TextProps } from "../Text/types"

export type HighlightProps = TextProps & {
    as?: ElementType
    highlightedText: string
    children?: string
}
