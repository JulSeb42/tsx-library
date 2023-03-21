/*=============================================== Modal component ===============================================*/

import React, { forwardRef, useEffect } from "react"

import CloseIcon from "../../icons/CloseIcon"
import { useKeyPress } from "../../"

import * as Styles from "./styles"
import { ModalProps } from "./types"

const Modal = forwardRef(
    (
        {
            as,
            children,
            isOpen,
            close,
            setIsOpen,
            disableEsc,
            iconClose,
            labelClose = "Close",
            colorClose = "white",
            variantClose = "transparent",
            stopScroll,
            ...rest
        }: ModalProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            if (stopScroll) {
                isOpen
                    ? document.body.classList.add("stop-scrolling")
                    : document.body.classList.remove("stop-scrolling")
            }
        }, [isOpen, stopScroll])

        useKeyPress(() => {
            if (!disableEsc) {
                setIsOpen(false)
            }
        }, ["Escape"])

        const buttonProps = {
            onClick: close,
            label: labelClose,
            size: 48,
            color: colorClose,
        }

        return (
            <Styles.StyledModal ref={ref} as={as} $isOpen={isOpen} {...rest}>
                {close &&
                    (variantClose === "transparent" ? (
                        iconClose ? (
                            <Styles.CloseButton
                                icon={iconClose}
                                variant="transparent"
                                hoverBackground
                                {...buttonProps}
                            />
                        ) : (
                            <Styles.CloseButton
                                libicon={<CloseIcon size={48 * 0.7} />}
                                variant="transparent"
                                hoverBackground
                                {...buttonProps}
                            />
                        )
                    ) : iconClose ? (
                        <Styles.CloseButton
                            icon={iconClose}
                            variant="plain"
                            {...buttonProps}
                        />
                    ) : (
                        <Styles.CloseButton
                            libicon={<CloseIcon size={48 * 0.7} />}
                            {...buttonProps}
                        />
                    ))}

                <Styles.Content>{children}</Styles.Content>
            </Styles.StyledModal>
        )
    }
)

export default Modal
