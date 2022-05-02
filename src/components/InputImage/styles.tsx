// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"
import Image from "../Image"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.label<styleProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    cursor: pointer;

    &:hover .hover {
        opacity: 1;
    }
`

const Input = styled.input`
    display: none;
`

const Img = styled(Image)`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    object-fit: cover;
`

const EmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background-color: ${Variables.Colors.Gray200};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const HoverContainer = styled.span`
    position: absolute;
    z-index: 2;
    background-color: ${Variables.Overlays.Plain.White50};
    color: ${Variables.Colors.Primary500};
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: ${Variables.Transitions.Short};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

export { Container, Input, Img, EmptyContainer, HoverContainer }
