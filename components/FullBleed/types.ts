/*=============================================== FullBleed types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { PaddingTypes } from "../../types"

export interface FullBleedProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    height?: number | string
    aspectRatio?: string
    padding?: PaddingTypes
}
