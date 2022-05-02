// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const ButtonIcon: React.FC<props> = ({
    to,
    size = 48,
    btnStyle = "plain",
    color = "primary",
    icon,
    ...props
}) => {
    return (
        <Container
            as={to ? Link : "button"}
            size={size}
            btnStyle={btnStyle}
            color={color}
            {...props}
        >
            <Icon src={icon} size={size * 0.6} />
        </Container>
    )
}

export default ButtonIcon
