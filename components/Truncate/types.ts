/*=============================================== Truncate types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // SpacersTypes
    SpacersTypes,
} from "../../types"

export interface TruncateProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    gap?: SpacersTypes
}
