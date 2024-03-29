/*=============================================== Tag types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { ColorsShortTypes } from "../../types"

const tagVariants = { plain: "plain", outline: "outline" } as const

export type TagVariantTypes = keyof typeof tagVariants

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    color?: ColorsShortTypes
    variant?: TagVariantTypes
    icons?: {
        left?: string | JSX.Element
        right?: string | JSX.Element
    }
}
