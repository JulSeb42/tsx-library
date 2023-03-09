/*=============================================== Pagination types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../types"

enum justify {
    left,
    right,
    center,
}

export type JustifyType = keyof typeof justify

export interface PaginationContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    justify?: JustifyType
}

export interface PaginationProps extends PaginationContainerProps {
    totalPages: number
    pageLimit?: number
    color?: ColorsHoverTypes
    icons?: {
        prev?: string
        next?: string
    }
    queries?: string[][]
}

interface PaginationButtonPropsBase
    extends React.HTMLAttributes<HTMLButtonElement>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType
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
    icon?: string
}

export type PaginationButtonProps =
    | PaginationButtonBehaviour1
    | PaginationButtonBehaviour2
    | PaginationButtonBehaviour3
