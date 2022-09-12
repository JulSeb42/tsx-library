/*=============================================== Breadcrumbs types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"
import { BreadcrumbsItemProps } from "../../utils/component-props"

/*==================== List possibilities ====================*/

const separators = {
    slash: "slash",
    icon: "icon",
} as const

export type SeparatorTypes = keyof typeof separators

/*==================== Component Types ====================*/

export interface BaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
    items: BreadcrumbsItemProps[]
    color?: AllColorsTypes
    linkColor?: ColorsHoverTypes
}

interface Possible1 extends BaseProps {
    separator?: SeparatorTypes
    customIcon?: never
}

interface Possible2 extends BaseProps {
    separator?: never
    customIcon?: string | JSX.Element
}

export type BreadcrumbsProps = Possible1 | Possible2
