/*=============================================== Masonry types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // SpacersTypes
    SpacersTypes,
} from "../../types"

export interface MasonryProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    col?: number
    gap?: SpacersTypes
}
