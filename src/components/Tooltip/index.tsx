// Packages
import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
interface styleContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: string
    textStyle?: string
}

interface styleTipProps extends React.HTMLAttributes<HTMLSpanElement> {
    isVisible: boolean
}

interface props extends styleContainerProps {
    text: string
}

// Styles
const Container = styled.span<styleContainerProps>`
    position: relative;
    color: ${props =>
        props.color === "primary"
            ? Variables.Colors.Primary500
            : props.color === "secondary"
            ? Variables.Colors.Secondary500
            : props.color === "success"
            ? Variables.Colors.Success500
            : props.color === "danger"
            ? Variables.Colors.Danger500
            : props.color === "warning"
            ? Variables.Colors.Warning500
            : props.color === "white"
            ? Variables.Colors.White
            : props.color || "currentColor"};

    ${props =>
        (props.textStyle === "underline" || props.textStyle === "dotted") &&
        css`
            border-bottom: 1px
                ${props.textStyle === "underline" ? "solid" : "dotted"}
                currentColor;
        `}

    ${props =>
        props.textStyle === "bold" &&
        css`
            font-weight: ${Variables.FontWeights.Bold};
        `}

    &:after {
        content: "";
        position: absolute;
        bottom: 75%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        opacity: 0;
        transition: ${Variables.Transitions.Short};
        border-color: ${Variables.Overlays.Plain.Black80} transparent
            transparent transparent;
        visibility: hidden;
    }

    &:hover:before,
    &:hover:after {
        opacity: 1;
        visibility: visible;
    }
`

const Tip = styled.span<styleTipProps>`
    position: absolute;
    width: 150px;
    background-color: ${Variables.Overlays.Plain.Black80};
    color: ${Variables.Colors.White};
    text-align: center;
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.M};
    z-index: 1;
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transition: ${Variables.Transitions.Short};
    bottom: 125%;
    left: calc(50% - 150px / 2);
    font-size: ${Variables.FontSizes.Small};
    visibility: ${props => (props.isVisible ? "visible" : "hidden")};
`

const Tooltip: React.FC<props> = props => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <Container
            textStyle={props.textStyle || "dotted"}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            {...props}
        >
            <Tip isVisible={isVisible}>{props.text}</Tip>

            {props.children}
        </Container>
    )
}

export default Tooltip
