/*=============================================== Section types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { SpacersTypes } from "../../types"

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    gap?: SpacersTypes
}
