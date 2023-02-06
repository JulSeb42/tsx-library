/*=============================================== ListInputs types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    ValidationTypes,
    ShadowsTypes,
    AllColorsTypes,
} from "../../types"
import { InputBackgroundTypes } from "../InputComponents/types"

export type VariantTypes = "bordered" | "shadow"
export type ListDirectionTypes = "up" | "down"

interface InputListCommon {
    accentColor: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes
    validation?: ValidationTypes
}

interface ListInputsPropsBase
    extends React.HTMLAttributes<HTMLDivElement>,
        InputListCommon {
    isOpen: boolean
    direction?: ListDirectionTypes
}

interface ListInputsPropsVariants1 extends ListInputsPropsBase {
    variant?: "shadow"
    shadow?: ShadowsTypes
}

interface ListInputsPropsVariants2 extends ListInputsPropsBase {
    variant?: "bordered"
    shadow?: never
}

export type ListInputsProps =
    | ListInputsPropsVariants1
    | ListInputsPropsVariants2

export interface ListInputsItemProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        InputListCommon {
    isActive?: boolean
    readOnly?: boolean
}

export interface ListInputsChevronProps
    extends React.HTMLAttributes<HTMLOrSVGElement> {
    isOpen?: boolean
    color?: AllColorsTypes
    icon?: string
    hasAnimation?: boolean
}
