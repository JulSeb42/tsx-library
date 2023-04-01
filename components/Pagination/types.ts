/*=============================================== Pagination types ===============================================*/

import type { HTMLAttributes, ElementType, ButtonHTMLAttributes } from "react"

import type {
    // ColorsHoverTypes
    ColorsHoverTypes,
} from "../../types"

enum justify {
    left,
    right,
    center,
}

export type JustifyType = keyof typeof justify

export interface PaginationContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    justify?: JustifyType
}

export interface PaginationProps extends PaginationContainerProps {
    totalPages: number
    pageLimit?: number
    color?: ColorsHoverTypes
    icons?: {
        prev?: string | JSX.Element
        next?: string | JSX.Element
    }
    queries?: string[][]
}

interface PaginationButtonPropsBase
    extends HTMLAttributes<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    color?: ColorsHoverTypes
}

interface PaginationButtonBehaviour1 extends PaginationButtonPropsBase {
    isActive?: boolean
    content: number
    icon?: never
}

interface PaginationButtonBehaviour2 extends PaginationButtonPropsBase {
    isActive?: never
    content: "more"
    icon?: never
}

interface PaginationButtonBehaviour3 extends PaginationButtonPropsBase {
    isActive?: never
    content: "prev" | "next"
    icon?: string | JSX.Element
}

export type PaginationButtonProps =
    | PaginationButtonBehaviour1
    | PaginationButtonBehaviour2
    | PaginationButtonBehaviour3
