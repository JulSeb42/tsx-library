/*=============================================== ListInputs types ===============================================*/

import type { HTMLAttributes } from "react"
import type { Props as SVGProps } from "react-inlinesvg"

import type { ValidationTypes } from "../../types"
import type { InputBackgroundTypes } from "../InputComponents/types"

export type VariantTypes = "bordered" | "shadow"
export type ListDirectionTypes = "up" | "down"

interface InputListCommon {
    backgroundColor?: InputBackgroundTypes
    validation?: ValidationTypes
}

export interface ListInputsProps
    extends HTMLAttributes<HTMLDivElement>,
        InputListCommon {
    isOpen: boolean
    direction?: ListDirectionTypes
}

export interface ListInputsItemProps
    extends HTMLAttributes<HTMLSpanElement>,
        InputListCommon {
    isActive?: boolean
    readOnly?: boolean
}

export type ListInputsChevronProps = (SVGProps & HTMLOrSVGElement) & {
    isOpen?: boolean
    icon?: string | JSX.Element
    withAnimation?: boolean
}
