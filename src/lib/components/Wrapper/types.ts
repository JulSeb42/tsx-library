/*=============================================== Wrapper types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

enum templates {
    "1col",
    "2cols",
    "3cols",
}

export type WrapperTemplateType = keyof typeof templates

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    template?: WrapperTemplateType
}
