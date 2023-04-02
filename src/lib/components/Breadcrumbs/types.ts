/*=============================================== Breadcrumbs types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    BreadcrumbsItemProps,
    AllColorsTypes,
    ColorsHoverTypes,
} from "../../types"

enum separators {
    slash,
    icon,
}

export type SeparatorTypes = keyof typeof separators

interface BreadcrumbsPropsBase extends HTMLAttributes<HTMLParagraphElement> {
    as?: ElementType
    items: BreadcrumbsItemProps[]
    color?: AllColorsTypes
    linkColor?: ColorsHoverTypes
}

interface BreadcrumbsSeparator1 extends BreadcrumbsPropsBase {
    separator?: SeparatorTypes
    customIcon?: never
}

interface BreadcrumbsSeparator2 extends BreadcrumbsPropsBase {
    separator?: never
    customIcon?: string | JSX.Element
}

export type BreadcrumbsProps = BreadcrumbsSeparator1 | BreadcrumbsSeparator2
