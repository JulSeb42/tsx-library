/*=============================================== Accordion types ===============================================*/

import { AccordionItemProps } from "../../utils/component-props"
import { ColorsHoverTypes, AllColorsTypes } from "../../utils/common-types"

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

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    items: AccordionItemProps[]
    variant?: AccordionStyleTypes
    accentColor?: ColorsHoverTypes
    separatorColor?: AllColorsTypes
}

interface Possible1 extends BaseProps {
    icon?: IconTypes
    customIcon?: never
}

interface Possible2 extends BaseProps {
    icon?: never
    customIcon?: string
}

export type AccordionProps = Possible1 | Possible2

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: IconTypes
    title: string
    isOpen?: boolean
    content?: string | React.ReactNode
    $variant?: AccordionStyleTypes
    $noBorder?: boolean
    customIcon?: string
    accentColor?: ColorsHoverTypes
    separatorColor?: AllColorsTypes
}
