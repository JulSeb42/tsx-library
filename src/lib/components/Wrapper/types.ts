/*=============================================== Wrapper types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

const templates = {
    "1col": "1col",
    "2cols": "2cols",
    "3cols": "3cols",
} as const

export type WrapperTemplateType = keyof typeof templates

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    template?: WrapperTemplateType
}
