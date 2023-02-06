/*=============================================== Accordion types ===============================================*/

import React from "react"

import {
    AccordionItemProps,
    ColorsHoverTypes,
    AllColorsTypes,
} from "../../types"

enum accordionStyle {
    basic,
    rounded,
}

export type AccordionStyleTypes = keyof typeof accordionStyle

enum icons {
    plus,
    chevron,
}

export type IconTypes = keyof typeof icons

interface AccordionPropsBase extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    items: AccordionItemProps[]
    variant?: AccordionStyleTypes
    accentColor?: ColorsHoverTypes
    separatorColor?: AllColorsTypes
}

interface AccordionIcon1 extends AccordionPropsBase {
    icon?: IconTypes
    customIcon?: never
}

interface AccordionIcon2 extends AccordionPropsBase {
    icon?: never
    customIcon?: string
}

export type AccordionProps = AccordionIcon1 | AccordionIcon2

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: IconTypes
    title: string
    isOpen?: boolean
    content?: string | React.ReactNode
    variant?: AccordionStyleTypes
    noBorder?: boolean
    customIcon?: string
    accentColor?: ColorsHoverTypes
    separatorColor?: AllColorsTypes
}
