/*=============================================== ListGroup types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    ListGroupItemProps as ItemProps,
    AllColorsTypes,
    ColorsHoverTypes,
    RadiusesTypes,
} from "../../types"

export interface ListGroupItemProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    item: ItemProps
    number?: number
    borderColor?: AllColorsTypes
    color?: ColorsHoverTypes
}

export interface ListGroupProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    items: ItemProps[]
    showNumbers?: boolean
    maxHeight?: number | string
    bordersColor?: AllColorsTypes
    accentColor?: ColorsHoverTypes
    borderRadius?: RadiusesTypes
}
