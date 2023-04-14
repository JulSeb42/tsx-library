/*=============================================== Aside types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

enum asideSizes {
    default,
    small,
}

export type AsideSizeTypes = keyof typeof asideSizes | number

const asidePositions = {
    1: 1,
    2: 2,
    3: 3,
} as const

export type AsidePositionTypes = keyof typeof asidePositions

export interface AsideProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    size?: AsideSizeTypes
    minHeight?: string | number
    position?: AsidePositionTypes
}
