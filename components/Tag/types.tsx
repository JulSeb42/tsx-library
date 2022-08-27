/*=============================================== Tag types ===============================================*/

import React from "react"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const tagStyles = {
    pill: "pill",
    rounded: "rounded",
} as const

export type TagStylesTypes = keyof typeof tagStyles

/*==================== Component Types ====================*/

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string
    options?: {
        variant?: TagStylesTypes
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
    }
}
