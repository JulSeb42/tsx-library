// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const ButtonIcon: React.FC<props> = props => {
    return (
        <Container
            as={props.to ? Link : "button"}
            size={props.size || 48}
            btnStyle={props.btnStyle || "plain"}
            color={props.color || "primary"}
            {...props}
        >
            <Icon
                name={props.icon}
                size={props.size ? props.size * 0.6 : 48 * 0.6}
            />
        </Container>
    )
}

export default ButtonIcon
