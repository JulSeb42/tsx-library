/*=============================================== Accordion types ===============================================*/

import type { HTMLAttributes, ElementType, ReactNode } from "react"

import type {
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

interface AccordionPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    variant?: AccordionStyleTypes
    accentColor?: ColorsHoverTypes
    separatorColor?: AllColorsTypes
}

interface AccordionPropsContent1 extends AccordionPropsBase {
    items: AccordionItemProps[]
    children?: never
}

interface AccordionPropsContent2 extends AccordionPropsBase {
    items?: never
    children: ReactNode | ReactNode[]
}

type AccordionPropsContent = AccordionPropsContent1 | AccordionPropsContent2

type AccordionIcon1 = AccordionPropsContent & {
    icon?: IconTypes
    customIcon?: never
}

type AccordionIcon2 = AccordionPropsContent & {
    icon?: never
    customIcon?: string
}

export type AccordionProps = AccordionIcon1 | AccordionIcon2

export interface AccordionContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    variant?: AccordionStyleTypes
    separatorColor?: AllColorsTypes
}

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    icon?: IconTypes
    title: string
    isOpen?: boolean
    content?: string | ReactNode
    variant?: AccordionStyleTypes
    noBorder?: boolean
    customIcon?: string | JSX.Element
    accentColor?: ColorsHoverTypes
    separatorColor?: AllColorsTypes
}
