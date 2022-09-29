/*=============================================== Toast ===============================================*/

import React, { useState } from "react"

import Text from "../Text"
import Icon from "../Icon"
import CloseIcon from "../../icons/CloseIcon"
import ButtonIcon from "../ButtonIcon"

import * as Styles from "./styles"
import { ToastProps } from "./types"

const Toast = ({
    title,
    close,
    children,
    icon,
    maxWidth = 400,
    shadow = "m",
    ...props
}: ToastProps) => {
    const [isClosed, setIsClosed] = useState(false)

    const titleFunc = () => <Text tag="h5">{title}</Text>

    const closeProps = {
        onClick: () => setIsClosed(true),
        size: 32,
        hoverBackground: true,
    }

    return (
        <Styles.StyledToast
            $isClosed={isClosed}
            $maxWidth={maxWidth}
            $shadow={shadow}
            {...props}
        >
            {icon || close ? (
                <Styles.TitleContainer>
                    {icon && (
                        <Icon
                            src={typeof icon === "object" ? icon.name : icon}
                            size={24}
                            color={
                                typeof icon === "object" && icon.color
                                    ? icon.color
                                    : "primary"
                            }
                        />
                    )}

                    {titleFunc()}

                    {close &&
                        (typeof close === "string" ? (
                            <ButtonIcon
                                icon={close}
                                variant="transparent"
                                {...closeProps}
                            />
                        ) : (
                            <ButtonIcon
                                libicon={<CloseIcon size={32 * 0.7} />}
                                variant="transparent"
                                {...closeProps}
                            />
                        ))}
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
