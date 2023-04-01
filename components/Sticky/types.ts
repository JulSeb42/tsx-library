/*=============================================== Sticky types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // SpacersTypes
    SpacersTypes,
} from "../../types"

export interface StickyProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    top?: SpacersTypes
}
