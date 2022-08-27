/*=============================================== Toast ===============================================*/

import React, { useState } from "react"

import Text from "../Text"
import Icon from "../Icon"
import CloseIcon from "../../icons/CloseIcon"

import * as Styles from "./styles"
import { ToastProps } from "./types"

const Toast = ({ title, close, children, icon, ...props }: ToastProps) => {
    const [isClosed, setIsClosed] = useState(false)

    const titleFunc = () => <Text tag="h5">{title}</Text>

    return (
        <Styles.StyledToast $isClosed={isClosed} {...props}>
            {icon || close ? (
                <Styles.TitleContainer>
                    {icon && (
                        <Icon
                            src={icon.name}
                            size={24}
                            color={icon.color || "primary"}
                        />
                    )}

                    {titleFunc()}

                    {close && (
                        <Styles.CloseButton onClick={() => setIsClosed(true)}>
                            {typeof close === "object" ? (
                                <Icon src={close.icon} size={24} />
                            ) : (
                                <CloseIcon size={24} />
                            )}
                        </Styles.CloseButton>
                    )}
                </Styles.TitleContainer>
            ) : (
                titleFunc()
            )}

            {children && (
                <Styles.Content
                    as={typeof children === "string" ? Text : "div"}
                >
                    {children}
                </Styles.Content>
            )}
        </Styles.StyledToast>
    )
}

export default Toast
