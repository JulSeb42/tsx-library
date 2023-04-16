/*=============================================== Pagination types ===============================================*/

import type { ButtonHTMLAttributes, ElementType, HTMLAttributes } from "react"

enum justify {
    left,
    right,
    center,
}

export type JustifyType = keyof typeof justify

export interface PaginationContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
}

export interface PaginationProps extends PaginationContainerProps {
    totalPages: number
    pageLimit?: number
    icons?: {
        prev?: string | JSX.Element
        prevSize?: number
        next?: string | JSX.Element
        nextSize?: number
    }
    queries?: string[][]
}

interface PaginationButtonPropsBase
    extends HTMLAttributes<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
}

interface PaginationButtonBehaviour1 extends PaginationButtonPropsBase {
    isActive?: boolean
    buttonContent: number
    icon?: never
    iconSize?: never
}

interface PaginationButtonBehaviour2 extends PaginationButtonPropsBase {
    isActive?: never
    buttonContent: "more"
    icon?: never
    iconSize?: never
}

interface PaginationButtonBehaviour3 extends PaginationButtonPropsBase {
    isActive?: never
    buttonContent: "prev" | "next"
    icon?: string | JSX.Element
    iconSize?: number
}

export type PaginationButtonProps =
    | PaginationButtonBehaviour1
    | PaginationButtonBehaviour2
    | PaginationButtonBehaviour3
