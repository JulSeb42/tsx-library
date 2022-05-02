// Packages
import React, { useState } from "react"

// Types
import { props } from "./types"

// Styles
import { Container, Tip } from "./styles"

const Tooltip: React.FC<props> = ({
    textStyle = "dotted",
    text,
    children,
    color = "primary",
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <Container
            textStyle={textStyle}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            color={color}
            {...props}
        >
            <Tip isVisible={isVisible}>{text}</Tip>

            {children}
        </Container>
    )
}

export default Tooltip
