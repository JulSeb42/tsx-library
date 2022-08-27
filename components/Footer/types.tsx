/*=============================================== Footer types ===============================================*/

import React from "react"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[] | string

    options?: {
        separator?: boolean
        separatorColor?: ColorsShortTypes | LibColorsTypes | string
    }
}

interface Possible1 extends BaseProps {
    logo: {
        img: string
        alt?: string
        width?: number
        height?: number
        text?: never
    }
}

interface Possible2 extends BaseProps {
    logo: {
        img?: never
        alt?: never
        width?: never
        height?: never
        text: string
    }
}

export type FooterProps = Possible1 | Possible2
