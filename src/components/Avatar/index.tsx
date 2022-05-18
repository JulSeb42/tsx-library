// Imports
import React from "react"

import Icon from "../Icon"
import Image from "../Image"

import { props } from "./types"

import { Container } from "./styles"

const Avatar: React.FC<props> = ({
    size = 48,
    background = "primary",
    color = "white",
    children,
    src,
    icon,
    ...props
}) => {
    let alt: string = props.alt!

    return (
        <Container size={size} background={background} color={color} {...props}>
            {children && children}

            {src && (
                <Image
                    src={src}
                    alt={alt}
                    width="100%"
                    height="100%"
                    fit="cover"
                />
            )}

            {icon && <Icon src={icon} size={size * 0.7} color={color} />}
        </Container>
    )
}

export default Avatar
