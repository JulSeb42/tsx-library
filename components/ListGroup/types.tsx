/*=============================================== ListGroup types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"
import { ListGroupItemProps as ItemTypes } from "../../utils/component-props"

export interface ListGroupItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: ItemTypes
    number?: number
    borderColor?: AllColorsTypes
    color?: ColorsHoverTypes
}

export interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ItemTypes[]
    showNumbers?: boolean
    maxHeight?: number
    bordersColor?: AllColorsTypes
    accentColor?: ColorsHoverTypes
}