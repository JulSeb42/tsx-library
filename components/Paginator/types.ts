/*=============================================== Paginator types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../types"
import { InputBackgroundTypes } from "../InputComponents/types"
import { ButtonIconVariantTypes } from "../ButtonIcon/types"

enum justify {
    left,
    right,
}

export type PaginatorJustifyType = keyof typeof justify

export interface PaginatorPropsBase
    extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
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
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    page: number
}

interface PaginatorBehaviour2 extends PaginatorPropsBase {
    handlePrevPage?: never
    handleNextPage?: never
    handleInput?: never
    page?: never
}

export type PaginatorProps = PaginatorBehaviour1 | PaginatorBehaviour2
