// Imports
import React from "react"

import Icon from "../Icon"

import { props } from "./types"

import { Container } from "./styles"

const Badge: React.FC<props> = ({
    size = 16,
    color = "primary",
    textColor,
    icon,
    children,
    ...props
}) => {
    return (
        <Container size={size} color={color} textColor={textColor} {...props}>
            {icon && <Icon src={icon} size={size * 0.7} />}

            {children && children}
        </Container>
    )
}

export default Badge
