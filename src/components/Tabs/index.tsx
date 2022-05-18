// Imports
import styled from "styled-components"

import Grid from "../Grid"
import Variables from "../Variables"

import { buttonsContainerProps, buttonProps, contentProps } from "./types"

const TabsContainer = styled(Grid)`
    width: 100%;
    position: relative;
    gap: ${Variables.Spacers.S};
`

const TabsButtonsContainer = styled(Grid)<buttonsContainerProps>`
    grid-template-columns: repeat(${({ col }) => col}, 1fr);
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
        background-color: ${({ active }) =>
            active ? Variables.Colors.Primary500 : "transparent"};
        z-index: 2;
    }
`

const TabsContent = styled.div<contentProps>`
    display: ${({ active }) => (active ? "block" : "none")};
`

export { TabsContainer, TabsButtonsContainer, TabsButton, TabsContent }
