/*=============================================== Modal component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

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
            showCloseButton,
            setIsOpen,
            disableEsc,
            iconClose,
            labelClose = "Close",
            className,
            ...rest
        }: ModalProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const closeModal = () => isOpen && setIsOpen(false)

        useKeyPress(() => {
            if (!disableEsc && isOpen) {
                closeModal()
            }
        }, ["Escape"])

        return (
            <Styles.StyledModal
                ref={ref}
                as={as}
                $isOpen={isOpen}
                className={classNames({ "modal-open": isOpen }, className)}
                {...rest}
            >
                {showCloseButton && (
                    <Styles.CloseButton
                        icon={iconClose || <CloseIcon size={48 * 0.7} />}
                        variant="transparent"
                        color="white"
                        size={48}
                        onClick={closeModal}
                        label={labelClose}
                    />
                )}

                <Styles.Content>{children}</Styles.Content>
            </Styles.StyledModal>
        )
    }
)

export default Modal
