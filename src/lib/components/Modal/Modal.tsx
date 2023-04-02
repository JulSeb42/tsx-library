/*=============================================== Modal component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { useKeyPress } from "../../"
import { CloseIcon } from "../../icons"

import * as Styles from "./styles"
import type { ModalProps } from "./types"

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
            ...rest
        }: ModalProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
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
                        <Styles.CloseButton
                            icon={iconClose || <CloseIcon size={48 * 0.7} />}
                            variant="transparent"
                            hoverBackground
                            {...buttonProps}
                        />
                    ) : (
                        <Styles.CloseButton
                            icon={iconClose || <CloseIcon size={48 * 0.7} />}
                            variant="plain"
                            {...buttonProps}
                        />
                    ))}

                <Styles.Content>{children}</Styles.Content>
            </Styles.StyledModal>
        )
    }
)

export default Modal
