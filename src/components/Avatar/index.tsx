// Packages
import React from "react"

// Components
import Image from "../Image"
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
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

            {icon && <Icon src={icon} size={size ? size * 0.7 : 48 * 0.7} />}
        </Container>
    )
}

export default Avatar
