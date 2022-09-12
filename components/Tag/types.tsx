/*=============================================== Tag types ===============================================*/

import React from "react"

import { AllColorsTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const TagVariants = {
    pill: "pill",
    rounded: "rounded",
} as const

export type TagVariantsTypes = keyof typeof TagVariants

/*==================== Component Types ====================*/

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    children?: string | (string & JSX.Element) | (string & React.ReactNode)
    variant?: TagVariantsTypes
    color?: AllColorsTypes
    textColor?: AllColorsTypes
    as?: React.ElementType
}
