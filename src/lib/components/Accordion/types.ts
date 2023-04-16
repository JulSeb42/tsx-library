/*=============================================== Accordion types ===============================================*/

import type { HTMLAttributes, ElementType, ReactNode } from "react"

import type { AccordionItemProps } from "../../types"

enum accordionStyle {
    basic,
    rounded,
}

export type AccordionStyleTypes = keyof typeof accordionStyle

interface AccordionPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    variant?: AccordionStyleTypes
}

interface AccordionPropsContent1 extends AccordionPropsBase {
    items: AccordionItemProps[]
    children?: never
}

interface AccordionPropsContent2 extends AccordionPropsBase {
    items?: never
    children: ReactNode | ReactNode[]
}

export type AccordionProps = AccordionPropsContent1 | AccordionPropsContent2

export interface AccordionContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    variant?: AccordionStyleTypes
}

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    title: string
    isOpen?: boolean
    children?: string | ReactNode | ReactNode[]
    variant?: AccordionStyleTypes
    noBorder?: boolean
}
