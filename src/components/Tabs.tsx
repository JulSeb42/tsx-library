// Packages
import React from "react"
import styled from "@emotion/styled"

// Components
import Grid from "./Grid"
import Variables from "./Variables"

// Types
interface buttonsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    col: number
}

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

interface contentProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean
}

// Styles
const TabsContainer = styled(Grid)`
    width: 100%;
    position: relative;
    gap: ${Variables.Spacers.S};
`

const TabsButtonsContainer = styled.div<buttonsContainerProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    gap: ${Variables.Spacers.M};
    position: relative;
    padding-bottom: ${Variables.Spacers.XXS};

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${Variables.Colors.Gray100};
        z-index: 1;
    }
`

const TabsButton = styled.button<buttonProps>`
    text-align: left;
    background: none;
    border: none;
    font-size: ${Variables.FontSizes.Body};
    padding: 0;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background-color: ${props =>
            props.active ? Variables.Colors.Primary500 : "transparent"};
        z-index: 2;
    }
`

const TabsContent = styled.div<contentProps>`
    display: ${props => (props.active ? "block" : "none")};
`

export { TabsContainer, TabsButtonsContainer, TabsButton, TabsContent }
