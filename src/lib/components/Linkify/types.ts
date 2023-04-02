/*=============================================== Linkify types ===============================================*/

import type { ElementType } from "react"

import type { TextProps } from "../Text/types"

export type LinkifyProps = TextProps & {
    children?: string
    blank?: boolean
    linkAs?: ElementType
}
