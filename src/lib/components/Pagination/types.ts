/*=============================================== Pagination types ===============================================*/

import type { HTMLAttributes, ElementType, ButtonHTMLAttributes } from "react"

import type { ColorsHoverTypes, SpacersTypes, FontSizeTypes } from "../../types"

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
    gap?: SpacersTypes
}

export interface PaginationProps extends PaginationContainerProps {
    totalPages: number
    pageLimit?: number
    color?: ColorsHoverTypes
    icons?: {
        prev?: string | JSX.Element
        prevSize?: number
        next?: string | JSX.Element
        nextSize?: number
    }
    queries?: string[][]
    buttonSize?: number
    buttonFontSize?: FontSizeTypes
}

interface PaginationButtonPropsBase
    extends HTMLAttributes<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    color?: ColorsHoverTypes
    buttonSize?: number
    fontSize?: FontSizeTypes
}

interface PaginationButtonBehaviour1 extends PaginationButtonPropsBase {
    isActive?: boolean
    content: number
    icon?: never
    iconSize?: never
}

interface PaginationButtonBehaviour2 extends PaginationButtonPropsBase {
    isActive?: never
    content: "more"
    icon?: never
    iconSize?: never
}

interface PaginationButtonBehaviour3 extends PaginationButtonPropsBase {
    isActive?: never
    content: "prev" | "next"
    icon?: string | JSX.Element
    iconSize?: number
}

export type PaginationButtonProps =
    | PaginationButtonBehaviour1
    | PaginationButtonBehaviour2
    | PaginationButtonBehaviour3
