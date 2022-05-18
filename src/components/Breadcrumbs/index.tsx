// Imports
import React from "react"
import { Link } from "react-router-dom"

import { props } from "./types"

import { Breadcrumbs, Item } from "./styles"

const BreadcrumbsItem: React.FC<props> = ({ to, children, ...props }) => {
    return (
        <Item to={to} as={to ? Link : "span"} {...props}>
            {children}
        </Item>
    )
}

export { Breadcrumbs, BreadcrumbsItem }
