/*=============================================== Header types ===============================================*/

import React from "react"

import { ColorsHoverTypes, AllColorsTypes } from "../../utils/common-types"
import { InputBackgroundTypes } from "../Input/types"

/*==================== List possibilities ====================*/

const positions = {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
} as const

export type PositionsTypes = keyof typeof positions

const navVariants = {
    full: "full",
    top: "top",
    drawer: "drawer",
} as const

export type NavVariantsTypes = keyof typeof navVariants

/*==================== Component Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: PositionsTypes
    children: React.ReactNode | React.ReactNode[]
    backgroundColor?: AllColorsTypes
    linkColor?: ColorsHoverTypes
    burgerColor?: ColorsHoverTypes
    burgerPosition?: "left" | "right"
    navColor?: AllColorsTypes
    navVariant?: NavVariantsTypes
    search?: {
        search: string
        setSearch: (search: string) => void
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
        icon?: string
        iconClear?: string
        placeholder?: string
        id?: string
        keyboardShortcut?: string[]
        backgroundColor?: InputBackgroundTypes
    }
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
