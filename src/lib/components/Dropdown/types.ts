/*=============================================== Dropdown types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"

import type { DropdownItemProps as ItemProps } from "../../types"
import type { FlexboxProps } from "../Flexbox/types"
import type { ListDirectionTypes } from "../ListInputs/types"

const justify = { left: "left", right: "right" } as const

export type DropdownJustifyTypes = keyof typeof justify

export type DropdownContainerProps = FlexboxProps

interface DropdownPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    direction?: ListDirectionTypes
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
    }
