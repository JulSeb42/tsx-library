/*=============================================== Paginator types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../types"
import { InputBackgroundTypes } from "../InputComponents/types"
import { ButtonIconProps, ButtonIconVariantTypes } from "../ButtonIcon/types"

enum justify {
    left,
    right,
}

export type PaginatorJustifyType = keyof typeof justify

export interface PaginatorProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    totalPages: number
    justify?: PaginatorJustifyType
    accentColor?: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes
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

// interface PaginatorPropsButton1 extends PaginatorPropsBase {
//     buttons?: {
//         variant?: "plain"
//         hoverBackground?: never
//         labelPrev?: string
//         labelNext?: string
//         showLabel?: boolean
//     }
// }

// interface PaginatorPropsButton2 extends PaginatorPropsBase {
//     buttons?: {
//         variant?: "transparent"
//         hoverBackground?: boolean
//         labelPrev?: string
//         labelNext?: string
//         showLabel?: boolean
//     }
// }

// export type PaginatorProps = PaginatorPropsButton1 | PaginatorPropsButton2
