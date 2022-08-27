/*=============================================== Breadcrumbs types ===============================================*/

import React from "react"

import {
    LibColorsTypes,
    ColorsShortTypes,
    ColorsHoverTypes,
} from "../../utils/common-types"
import { BreadcrumbsItemProps } from "../../utils/component-props"

/*==================== List possibilities ====================*/

const separators = {
    slash: "slash",
    icon: "icon",
} as const

export type SeparatorTypes = keyof typeof separators

/*==================== Component Types ====================*/

export interface BreadcrumbsProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    items: BreadcrumbsItemProps[]

    options?: {
        separator?: SeparatorTypes
        color?: LibColorsTypes | ColorsShortTypes | string
        linkColor?:
            | ColorsHoverTypes
            | {
                  default: string
                  hover: string
                  active: string
              }
    }
}
