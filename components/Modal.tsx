/*=============================================== Modal ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect } from "react"
import styled from "styled-components"

import Variables from "../Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import CloseIcon from "../icons/CloseIcon"

/*==================== Component ====================*/

const Modal = ({ children, isOpen, close, iconClose, ...props }: Props) => {
    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling")
            : document.body.classList.remove("stop-scrolling")
    })

    return (
        <StyledModal $isOpen={isOpen} {...props}>
            {close && (
                <CloseButton onClick={close}>
                    {iconClose ? (
                        <Icon
                            src={iconClose}
                            size={32}
                            color={Variables.Colors.White}
                        />
                    ) : (
                        <CloseIcon size={32} color={Variables.Colors.White} />
                    )}
                </CloseButton>
            )}

            <Content>{children}</Content>
        </StyledModal>
    )
}

export default Modal

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    isOpen: boolean
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClose?: string
}

/*==================== Styles ====================*/

const StyledModal = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background-color: ${Variables.Overlays.Plain.Black80};
`

const Content = styled.div`
    width: 90%;
    height: 90%;
    position: relative;
    z-index: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const buttonSize = 48

const CloseButton = styled.button`
    position: absolute;
    top: ${Variables.Spacers.XXL};
    right: ${Variables.Spacers.XXL};
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    background-color: transparent;
    transition: ${Variables.Transitions.Short};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    z-index: 20;

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Gray800};
        }
    }
`
