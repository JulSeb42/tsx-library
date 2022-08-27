/*=============================================== Modal ===============================================*/

import React, { useEffect } from "react"

import Variables from "../../Variables"
import Icon from "../Icon"
import CloseIcon from "../../icons/CloseIcon"

import * as Styles from "./styles"
import { ModalProps } from "./types"

const Modal = ({
    children,
    isOpen,
    close,
    iconClose,
    ...props
}: ModalProps) => {
    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling")
            : document.body.classList.remove("stop-scrolling")
    })

    return (
        <Styles.StyledModal $isOpen={isOpen} {...props}>
            {close && (
                <Styles.CloseButton onClick={close}>
                    {iconClose ? (
                        <Icon
                            src={iconClose}
                            size={32}
                            color={Variables.Colors.White}
                        />
                    ) : (
                        <CloseIcon size={32} color={Variables.Colors.White} />
                    )}
                </Styles.CloseButton>
            )}

            <Styles.Content>{children}</Styles.Content>
        </Styles.StyledModal>
    )
}

export default Modal
