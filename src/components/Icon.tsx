// Packages
import React from "react"
import styled from "@emotion/styled"
import { ReactSVG } from "react-svg"

// Types
interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    size: number
    color?: string
}

interface props extends styleProps {
    name: string
}

// Styles
const Container = styled.span<styleProps>`
    display: inline-flex;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    align-items: center;
    justify-content: center;

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: ${props => props.color};
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${props => props.color};
    }
`

const Icon: React.FC<props> = props => {
    return (
        <Container color={props.color || "currentColor"} {...props}>
            <ReactSVG src={`/icons/${props.name}.svg`} wrapper="span" />
        </Container>
    )
}

export default Icon
