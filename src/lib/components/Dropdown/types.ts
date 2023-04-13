/*=============================================== Dropdown types ===============================================*/

import type { HTMLAttributes, ElementType, ReactNode } from "react"

import type {
    ColorsHoverTypes,
    DropdownItemProps as ItemProps,
    RadiusesTypes,
} from "../../types"
import type { ListDirectionTypes } from "../ListInputs/types"

enum justify {
    left,
    right,
}

export type DropdownJustifyTypes = keyof typeof justify

export interface DropdownContainerProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    justify?: DropdownJustifyTypes
}

interface DropdownPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    accentColor?: ColorsHoverTypes
    direction?: ListDirectionTypes
    maxHeightOpen?: number
    borderRadius?: RadiusesTypes
}

interface DropdownPropsContent1 extends DropdownPropsBase {
    items: ItemProps[]
    children?: never
}

interface DropdownPropsContent2 extends DropdownPropsBase {
    items?: never
    children?: ReactNode | ReactNode[]
}

export type DropdownProps = DropdownPropsContent1 | DropdownPropsContent2

export type DropdownItemProps = HTMLAttributes<HTMLAnchorElement> &
    ItemProps & {
        as?: ElementType
        color?: ColorsHoverTypes
    }
