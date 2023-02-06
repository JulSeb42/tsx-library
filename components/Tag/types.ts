/*=============================================== Tag types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../types"

enum tagVariants {
    pill,
    rounded,
}

export type TagVariantsTypes = keyof typeof tagVariants

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    variant?: TagVariantsTypes
    color?: AllColorsTypes
    textColor?: AllColorsTypes
    icons?: {
        left?: string
        right?: string
    }
}
