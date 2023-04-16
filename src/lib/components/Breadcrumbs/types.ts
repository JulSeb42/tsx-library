/*=============================================== Breadcrumbs types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"

import type { BreadcrumbsItemProps, ColorsHoverTypes } from "../../types"

enum separators {
    slash,
    icon,
}

export type SeparatorTypes = keyof typeof separators

interface BreadcrumbsPropsBase extends HTMLAttributes<HTMLParagraphElement> {
    as?: ElementType
    color?: ColorsHoverTypes
}

interface BreadcrumbsSeparator1 extends BreadcrumbsPropsBase {
    separator?: SeparatorTypes
    customIcon?: never
}

interface BreadcrumbsSeparator2 extends BreadcrumbsPropsBase {
    separator?: never
    customIcon?: string | JSX.Element
}

type BreadcrumbsSeparator = BreadcrumbsSeparator1 | BreadcrumbsSeparator2

type BreadcrumbsContent1 = BreadcrumbsSeparator & {
    items: BreadcrumbsItemProps[]
    children?: never
}

type BreadcrumbsContent2 = BreadcrumbsSeparator & {
    items?: never
    children: ReactNode | ReactNode[]
}

export type BreadcrumbsProps = BreadcrumbsContent1 | BreadcrumbsContent2
