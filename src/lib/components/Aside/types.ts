/*=============================================== Aside types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

const asideSizes = { default: "default", small: "small" } as const

export type AsideSizeTypes = keyof typeof asideSizes | number

export interface AsideProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    size?: AsideSizeTypes
    minHeight?: string | number
}
