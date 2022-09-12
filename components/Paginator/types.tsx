/*=============================================== Paginator types ===============================================*/

import React from "react"

import { InputBackgroundTypes } from "../Input/types"
import { ColorsHoverTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

export type JustifyTypes = keyof typeof justify

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
    idInput?: string
    accentColor?: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes

    text?: {
        page?: string
        of?: string
    }

    handles: {
        prev: (e: React.MouseEvent<HTMLButtonElement>) => void
        next: (e: React.MouseEvent<HTMLButtonElement>) => void
        change: (e: React.ChangeEvent<HTMLInputElement>) => void
    }

    pages: {
        active: number
        total: number
    }

    icons?: {
        prev?: string
        next?: string
    }
}

interface Possible1 extends BaseProps {
    buttons?: {
        variant?: "plain"
        hoverBackground?: never
    }
}

interface Possible2 extends BaseProps {
    buttons?: {
        variant?: "transparent"
        hoverBackground?: boolean
    }
}

export type PaginatorProps = Possible1 | Possible2
