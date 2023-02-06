/*=============================================== Breadcrumbs types ===============================================*/

import React from "react"

import {
    BreadcrumbsItemProps,
    AllColorsTypes,
    ColorsHoverTypes,
} from "../../types"

enum separators {
    slash,
    icon,
}

export type SeparatorTypes = keyof typeof separators

interface BreadcrumbsPropsBase
    extends React.HTMLAttributes<HTMLParagraphElement> {
    as?: React.ElementType
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
