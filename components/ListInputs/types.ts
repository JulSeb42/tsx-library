/*=============================================== ListInputs types ===============================================*/

import type { HTMLAttributes } from "react"

import type {
    // ColorsHoverTypes,
    // ValidationTypes,
    // ShadowsTypes,
    // AllColorsTypes,
    ColorsHoverTypes,
    ValidationTypes,
    ShadowsTypes,
    AllColorsTypes,
} from "../../types"
import type { InputBackgroundTypes } from "../InputComponents/types"

export type VariantTypes = "bordered" | "shadow"
export type ListDirectionTypes = "up" | "down"

interface InputListCommon {
    accentColor: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes
    validation?: ValidationTypes
}

interface ListInputsPropsBase
    extends HTMLAttributes<HTMLDivElement>,
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
    extends HTMLAttributes<HTMLSpanElement>,
        InputListCommon {
    isActive?: boolean
    readOnly?: boolean
}

export interface ListInputsChevronProps
    extends HTMLAttributes<HTMLOrSVGElement> {
    isOpen?: boolean
    color?: AllColorsTypes
    icon?: string | JSX.Element
    hasAnimation?: boolean
}
