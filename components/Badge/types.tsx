/*=============================================== Badge types ===============================================*/

import React from "react"

import {
    ColorsShortTypes,
    LibColorsTypes,
    SpacersTypes,
} from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
        size?: number
    }
}

interface Possible1 extends BaseProps {
    content?: number

    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
        size?: number

        padding?: SpacersTypes | number | string
    }
}

interface Possible2 extends BaseProps {
    content?: string

    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
        size?: number

        padding?: never
    }
}

export type BadgeProps = Possible1 | Possible2
