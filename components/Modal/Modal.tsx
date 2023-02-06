/*=============================================== Modal component ===============================================*/

import React, { forwardRef, useEffect } from "react"

import CloseIcon from "../../icons/CloseIcon"

import * as Styles from "./styles"
import { ModalProps } from "./types"

const Modal = forwardRef(
    (
        {
            as,
            children,
            isOpen,
            close,
            iconClose,
            labelClose = "Close",
            ...rest
        }: ModalProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            isOpen
                ? document.body.classList.add("stop-scrolling")
                : document.body.classList.remove("stop-scrolling")
        })

        return (
            <Styles.StyledModal ref={ref} as={as} $isOpen={isOpen} {...rest}>
                {close &&
                    (iconClose ? (
                        <Styles.CloseButton
                            icon={iconClose}
                            onClick={close}
                            variant="transparent"
                            color="white"
                            size={48}
                            hoverBackground
                            label={labelClose}
                        />
                    ) : (
                        <Styles.CloseButton
                            libicon={<CloseIcon size={48 * 0.7} />}
                            onClick={close}
                            variant="transparent"
                            color="white"
                            size={48}
                            hoverBackground
                            label={labelClose}
                        />
                    ))}

                <Styles.Content>{children}</Styles.Content>
            </Styles.StyledModal>
        )
    }
)

export default Modal
