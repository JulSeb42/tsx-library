// Imports
import React from "react"

import { props } from "./types"

import { Container } from "./styles"

const Icon: React.FC<props> = ({ src, color, size, ...props }) => {
    return (
        <Container
            src={`/icons/${src}.svg`}
            color={color}
            size={size}
            {...props}
        />
    )
}

export default Icon
