// Packages
import React from "react"
import styled from "@emotion/styled"

// Components
import Variables from "./Variables"
import Loader from "./Loader"

// Types
interface props extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string
}

// Styles
const Container = styled.div<props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props =>
        props.backgroundColor === "primary"
            ? Variables.Colors.Primary500
            : props.backgroundColor === "secondary"
            ? Variables.Colors.Secondary500
            : props.backgroundColor === "success"
            ? Variables.Colors.Success500
            : props.backgroundColor === "danger"
            ? Variables.Colors.Danger500
            : props.backgroundColor === "warning"
            ? Variables.Colors.Warning500
            : props.backgroundColor === "white"
            ? Variables.Colors.White
            : props.backgroundColor};
    z-index: 999;
`

const PageLoading: React.FC<props> = props => {
    return (
        <Container
            backgroundColor={props.backgroundColor || "primary"}
            {...props}
        >
            <Loader
                color={
                    props.backgroundColor === "white"
                        ? Variables.Colors.Primary500
                        : Variables.Colors.White
                }
                backgroundColor={props.backgroundColor || "primary"}
                size={48}
                border={8}
            />
        </Container>
    )
}

export default PageLoading
