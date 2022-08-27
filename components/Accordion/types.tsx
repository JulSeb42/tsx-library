/*=============================================== Accordion types ===============================================*/

import { AccordionItemProps } from "../../utils/component-props"

/*==================== List possibilities ====================*/

const accordionStyle = {
    basic: "basic",
    rounded: "rounded",
} as const

export type AccordionStyleTypes = keyof typeof accordionStyle

const icons = {
    plus: "plus",
    chevron: "chevron",
} as const

export type IconTypes = keyof typeof icons

/*==================== Component types ====================*/

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    items: AccordionItemProps[]
    options?: {
        style?: AccordionStyleTypes
        icon?: IconTypes
        customIcon?: string
    }
}

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: IconTypes
    title: string
    isOpen?: boolean
    content?: string | React.ReactNode
    $accordionStyle?: AccordionStyleTypes
    $noBorder?: boolean
    customIcon?: string
}
