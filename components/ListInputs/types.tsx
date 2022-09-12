/*=============================================== ListInputs types ===============================================*/

import React from "react"

import { InputBackgroundTypes } from "../Input/types"
import {
    ColorsHoverTypes,
    ValidationTypes,
    ShadowsTypes,
    AllColorsTypes,
} from "../../utils/common-types"

/*==================== List possibilities ====================*/

export type VariantTypes = "bordered" | "shadow"
export type ListDirectionTypes = "up" | "down"

/*==================== Component Types ====================*/

interface Common {
    accentColor: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes
    validation?: ValidationTypes
}

interface BaseListInputs extends React.HTMLAttributes<HTMLDivElement>, Common {
    isOpen: boolean
    children?: any
    direction?: ListDirectionTypes
}

interface PossibleListVariant1 extends BaseListInputs {
    variant?: "shadow"
    shadow?: ShadowsTypes
}

interface PossibleListVariant2 extends BaseListInputs {
    variant?: "bordered"
    shadow?: never
}

export type ListInputsProps = PossibleListVariant1 | PossibleListVariant2

export interface ItemProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        Common {
    children?: any
    onClick?: any
    isActive?: boolean
    readOnly?: boolean
}

export interface ChevronProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    isOpen?: boolean
    color?: AllColorsTypes
    icon?: string
    hasAnimation?: boolean
}
