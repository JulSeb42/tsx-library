/*=============================================== Paginator types ===============================================*/

import React from "react"

/*==================== List possibilities ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

export type JustifyTypes = keyof typeof justify

/*==================== Component Types ====================*/

export interface PaginatorProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
    idInput?: string

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
