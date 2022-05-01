// Packages
import React from "react"

// Components
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Badge: React.FC<props> = props => {
    return (
        <Container
            size={props.size || 16}
            color={props.color || "primary"}
            {...props}
        >
            {props.icon && (
                <Icon
                    name={props.icon}
                    size={props.size ? props.size * 0.7 : 48 * 0.7}
                />
            )}

            {props.children && props.children}
        </Container>
    )
}

export default Badge
