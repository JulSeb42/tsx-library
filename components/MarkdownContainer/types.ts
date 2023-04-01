/*=============================================== MarkdownContainer types ===============================================*/

import type { HTMLAttributes, ReactNode } from "react"

import {
    // SpacersTypes
    SpacersTypes,
} from "../../types"

export interface MarkdownContainerProps extends HTMLAttributes<HTMLDivElement> {
    gap?: SpacersTypes
    options?: any
    content: string | ReactNode | ReactNode[]
}
