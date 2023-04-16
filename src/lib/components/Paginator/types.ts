/*=============================================== Paginator types ===============================================*/

import type { ChangeEvent, ElementType, HTMLAttributes } from "react"

export interface PaginatorPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    totalPages: number
    isInputEditable?: boolean
    queries?: string[][]

    texts?: {
        page?: string
        of?: string
    }

    icons?: {
        prev?: string | JSX.Element
        next?: string | JSX.Element
        size?: number
    }

    buttons?: {
        labelPrev?: string
        labelNext?: string
        showLabel?: boolean
    }
}

interface PaginatorBehaviour1 extends PaginatorPropsBase {
    handlePrevPage: () => void
    handleNextPage: () => void
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
    page: number
    queries?: never
}

interface PaginatorBehaviour2 extends PaginatorPropsBase {
    handlePrevPage?: never
    handleNextPage?: never
    handleInput?: never
    page?: never
    queries?: string[][]
}

export type PaginatorProps = PaginatorBehaviour1 | PaginatorBehaviour2
