// Packages
import React from "react"

// Components
import Variables from "../Variables"
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Badge: React.FC<props> = ({
    size = 16,
    color = "primary",
    icon,
    children,
    textColor = Variables.Colors.White,
    ...props
}) => {
    return (
        <Container size={size} color={color} textColor={textColor} {...props}>
            {icon && <Icon src={icon} size={size ? size * 0.7 : 16 * 0.7} />}

            {children && children}
        </Container>
    )
}

export default Badge
