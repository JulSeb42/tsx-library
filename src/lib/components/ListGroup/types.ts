/*=============================================== ListGroup types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { ListGroupItemProps as ItemProps } from "../../types"

export interface ListGroupItemProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    item: ItemProps
    number?: number
}

export interface ListGroupProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    items: ItemProps[]
    showNumbers?: boolean
}
