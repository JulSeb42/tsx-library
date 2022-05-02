// Packages
import React from "react"
import { Link } from "react-router-dom"

// Styles
import { Breadcrumbs, Item } from "./styles"

// Types
import { itemProps } from "./types"

const BreadcrumbsItem: React.FC<itemProps> = ({ to, children, ...props }) => {
    return (
        <Item as={to ? Link : "span"} to={to} {...props}>
            {children}
        </Item>
    )
}

export { Breadcrumbs, BreadcrumbsItem }
