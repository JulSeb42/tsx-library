// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.div<styleProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${Variables.Overlays.Plain.Black50};
    width: 100%;
    height: 100vh;
    display: ${props => (props.open ? "flex" : "none")};
    align-items: center;
    justify-content: center;

    & > .img-container {
        width: 90%;
        height: 90%;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
    }
`

const Close = styled.button`
    background: none;
    border: none;
    --size: 48px;
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: ${Variables.Spacers.L};
    right: ${Variables.Spacers.L};
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${Variables.Colors.White};
    border-radius: 50%;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray500};
    }
`

export { Container, Close }
