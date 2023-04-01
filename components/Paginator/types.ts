/*=============================================== Paginator types ===============================================*/

import type { HTMLAttributes, ElementType, ChangeEvent } from "react"

import type { ColorsHoverTypes } from "../../types"
import type { InputBackgroundTypes } from "../InputComponents/types"
import type { ButtonIconVariantTypes } from "../ButtonIcon/types"

enum justify {
    left,
    right,
}

export type PaginatorJustifyType = keyof typeof justify

export interface PaginatorPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    totalPages: number
    justify?: PaginatorJustifyType
    accentColor?: ColorsHoverTypes
    inputBackgroundColor?: InputBackgroundTypes
    isInputEditable?: boolean
    queries?: string[][]

    texts?: {
        page?: string
        of?: string
    }

    icons?: {
        prev?: string
        next?: string
    }

    buttons?: {
        variant?: ButtonIconVariantTypes
        hoverBackground?: boolean
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
}

interface PaginatorBehaviour2 extends PaginatorPropsBase {
    handlePrevPage?: never
    handleNextPage?: never
    handleInput?: never
    page?: never
}

export type PaginatorProps = PaginatorBehaviour1 | PaginatorBehaviour2
