/*=============================================== Select types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    setIsOpen: any
    disabled?: boolean
    id: string
    children?: React.ReactNode | React.ReactNode[]
    selected: string | number

    options?: {
        label?: string
        helper?: string
        helperBottom?:
            | string
            | {
                  text: string
                  icon?: string
                  iconColor?: LibColorsTypes | ColorsShortTypes | string
              }
        icon?: string
    }
}

export interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string | number
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void
    isSelected: boolean
}
