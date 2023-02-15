/*=============================================== ListGroup types ===============================================*/

import React from "react"

import {
    ListGroupItemProps as ItemProps,
    AllColorsTypes,
    ColorsHoverTypes,
    RadiusesTypes
} from "../../types"

export interface ListGroupItemProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    as?: React.ElementType
    item: ItemProps
    number?: number
    borderColor?: AllColorsTypes
    color?: ColorsHoverTypes
}

export interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    items: ItemProps[]
    showNumbers?: boolean
    maxHeight?: number | string
    bordersColor?: AllColorsTypes
    accentColor?: ColorsHoverTypes
    borderRadius?: RadiusesTypes
}
