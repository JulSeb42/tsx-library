/*=============================================== Sticky types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { SpacersTypes } from "../../types"

export interface StickyProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    top?: SpacersTypes
}
