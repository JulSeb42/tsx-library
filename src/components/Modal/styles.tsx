// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled.div<styleProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${Variables.Overlays.Plain.Black50};
    width: 100%;
    height: 100vh;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
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
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    color: ${Variables.Colors.White};
    border-radius: 50%;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray500};
    }
`

export { Container, Close }
