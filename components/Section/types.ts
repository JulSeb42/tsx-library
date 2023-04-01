/*=============================================== Section types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // SpacersTypes
    SpacersTypes,
} from "../../types"

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    gap?: SpacersTypes
}
