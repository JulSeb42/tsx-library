/*=============================================== Header types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

const positions = {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
} as const

export type PositionsTypes = keyof typeof positions

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: PositionsTypes
    children: React.ReactNode | React.ReactNode[]
    backgroundColor?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes
    burgerColor?: ColorsHoverTypes
    navColor?: LibColorsTypes | ColorsShortTypes | string
}

interface Possible1 extends BaseProps {
    logo: {
        text: string

        img?: never
        alt?: never
        width?: never
        height?: never

        to?: string
    }
}

interface Possible2 extends BaseProps {
    logo: {
        text?: never

        img: string
        alt?: string
        width?: number
        height?: number

        to?: string
    }
}

export type HeaderProps = Possible1 | Possible2
