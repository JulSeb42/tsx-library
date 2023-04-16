/*=============================================== Toast component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Text, Icon, stringifyPx } from "../../"
import { CloseIcon } from "../../icons"

import * as Styles from "./styles"
import type { ToastProps } from "./types"

const Toast = forwardRef(
    (
        {
            as,
            title,
            maxWidth,
            icon,
            close,
            labelClose = "Close",
            children,
            style,
            className,
            ...rest
        }: ToastProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [isClosed, setIsClosed] = useState(false)

        const titleFn = () => <Styles.Title>{title}</Styles.Title>

        return (
            <Styles.StyledToast
                ref={ref}
                as={as}
                style={{
                    ["--toast-max-width" as any]:
                        maxWidth && stringifyPx(maxWidth),
                    ...style,
                }}
                className={classNames({ closed: isClosed }, className)}
                {...rest}
            >
                {icon || close ? (
                    <Styles.TitleContainer>
                        {icon && (
                            <Styles.IconContainer>
                                <Icon
                                    src={
                                        typeof icon === "object"
                                            ? icon.name
                                            : icon
                                    }
                                    size={
                                        typeof icon === "object" && icon.size
                                            ? icon.size
                                            : 24
                                    }
                                    color={
                                        typeof icon === "object" && icon.color
                                            ? icon.color
                                            : "primary"
                                    }
                                />
                            </Styles.IconContainer>
                        )}

                        {titleFn()}

                        {close && (
                            <Styles.CloseButton
                                icon={
                                    typeof close === "string" ? (
                                        close
                                    ) : (
                                        <CloseIcon size={32 * 0.7} />
                                    )
                                }
                                label={labelClose}
                                onClick={() => setIsClosed(true)}
                            />
                        )}
                    </Styles.TitleContainer>
                ) : (
                    titleFn()
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
)

export default Toast
