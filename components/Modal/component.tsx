/*=============================================== Modal ===============================================*/

import React, { useEffect, forwardRef } from "react"

import CloseIcon from "../../icons/CloseIcon"

import * as Styles from "./styles"
import { ModalProps } from "./types"

const Modal = forwardRef(
    (
        { children, isOpen, close, iconClose, ...props }: ModalProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            isOpen
                ? document.body.classList.add("stop-scrolling")
                : document.body.classList.remove("stop-scrolling")
        })

        return (
            <Styles.StyledModal $isOpen={isOpen} ref={ref} {...props}>
                {close &&
                    (iconClose ? (
                        <Styles.CloseButton
                            icon={iconClose}
                            onClick={close}
                            variant="transparent"
                            color="white"
                            size={48}
                            hoverBackground
                        />
                    ) : (
                        <Styles.CloseButton
                            libicon={<CloseIcon size={48 * 0.7} />}
                            onClick={close}
                            variant="transparent"
                            color="white"
                            size={48}
                            hoverBackground
                        />
                    ))}

                <Styles.Content>{children}</Styles.Content>
            </Styles.StyledModal>
        )
    }
)

export default Modal
