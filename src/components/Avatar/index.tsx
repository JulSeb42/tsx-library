// Packages
import React from "react"

// Components
import Variables from "../Variables"
import Image from "../Image"
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Avatar: React.FC<props> = props => {
    let alt: string = props.alt!

    return (
        <Container
            size={props.size || 48}
            background={props.background || Variables.Colors.Primary500}
            color={props.color || Variables.Colors.White}
            {...props}
        >
            {props.children && props.children}

            {props.src && (
                <Image
                    src={props.src}
                    alt={alt}
                    width="100%"
                    height="100%"
                    fit="cover"
                />
            )}

            {props.icon && (
                <Icon
                    name={props.icon}
                    size={props.size ? props.size * 0.7 : 48 * 0.7}
                />
            )}
        </Container>
    )
}

export default Avatar
