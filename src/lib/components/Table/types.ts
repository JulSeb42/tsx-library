/*=============================================== Table types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

const tableVariants = {
    bordered: "bordered",
    stripped: "stripped",
    "border-bottom": "border-bottom",
} as const

export type TableVariantsTypes = keyof typeof tableVariants

interface TablePropsBase extends HTMLAttributes<HTMLTableElement> {
    as?: ElementType
    variant?: TableVariantsTypes
}

interface TablePropsHeaders1 extends TablePropsBase {
    headers?: string[]
    linkifyHeaders?: boolean
}

interface TablePropsHeaders2 extends TablePropsBase {
    headers?: undefined | null
    linkifyHeaders?: never
}

export type TableProps = TablePropsHeaders1 | TablePropsHeaders2
