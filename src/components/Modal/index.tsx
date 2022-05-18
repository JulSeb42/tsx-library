// Imports
import React from "react"

import Icon from "../Icon"

import { props } from "./types"

import { Container, Close } from "./styles"

const Modal: React.FC<props> = ({ close, icon, children, isOpen, ...props }) => {
    return (
        <Container isOpen={isOpen} {...props}>
            {close && (
                <Close onClick={close}>
                    {icon ? (
                        <Icon src={icon} size={32} />
                    ) : (
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.5893 8.45866L15.932 14.1147L10.276 8.45866L8.39066 10.344L14.0467 16L8.39066 21.656L10.276 23.5413L15.932 17.8853L21.5893 23.5413L23.4747 21.656L17.8187 16L23.4747 10.344L21.5893 8.45866Z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </Close>
            )}

            {children}
        </Container>
    )
}

export default Modal
