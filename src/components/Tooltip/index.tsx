// Imports
import React, { useState } from "react"

import { props } from "./types"

import { Container, Tip } from "./styles"

const Tooltip: React.FC<props> = ({
    color = "primary",
    textStyle = "dotted",
    text,
    children,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <Container
            textStyle={textStyle}
            color={color}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            {...props}
        >
            <Tip isVisible={isVisible}>{text}</Tip>

            {children}
        </Container>
    )
}

export default Tooltip
