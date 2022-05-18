// Imports
import React from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"

import { props } from "./types"

import { Container } from "./styles"

const ButtonIcon: React.FC<props> = ({
    to,
    size = 48,
    btnStyle = "plain",
    color = "primary",
    icon,
    disabled,
    hoverBackground,
    ...props
}) => {
    return (
        <Container
            as={to ? Link : "button"}
            size={size}
            color={color}
            btnStyle={btnStyle}
            disabled={disabled}
            hoverBackground={hoverBackground}
            {...props}
        >
            <Icon src={icon} size={size * 0.6} />
        </Container>
    )
}

export default ButtonIcon
