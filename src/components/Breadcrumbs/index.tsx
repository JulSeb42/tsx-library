// Packages
import React from "react"
import { Link } from "react-router-dom"

// Styles
import { Breadcrumbs, Item } from "./styles"

// Types
import { itemProps } from "./types"

const BreadcrumbsItem: React.FC<itemProps> = props => {
    return (
        <Item as={props.to ? Link : "span"} to={props.to} {...props}>
            {props.children}
        </Item>
    )
}

export { Breadcrumbs, BreadcrumbsItem }
