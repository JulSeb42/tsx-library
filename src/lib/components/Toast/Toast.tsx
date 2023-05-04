/*=============================================== Toast component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Text, Icon, stringifyPx } from "../../"
import { CloseIcon } from "../../icons"

import {
    StyledToast,
    Title,
    TitleContainer,
    IconContainer,
    Content,
    CloseButton,
} from "./styles"
import type { ToastProps } from "./types"

const Toast = forwardRef(
    (
        {
            as,
            title,
            maxWidth,
            icon,
            withCloseButton,
            labelClose = "Close",
            children,
            style,
            className,
            ...rest
        }: ToastProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [isClosed, setIsClosed] = useState(false)

        const titleFn = () => <Title>{title}</Title>

        return (
            <StyledToast
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
                {icon || withCloseButton ? (
                    <TitleContainer>
                        {icon && (
                            <IconContainer>
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
                            </IconContainer>
                        )}

                        {titleFn()}

                        {withCloseButton && (
                            <CloseButton
                                icon={
                                    typeof withCloseButton === "string" ? (
                                        withCloseButton
                                    ) : (
                                        <CloseIcon size={32 * 0.7} />
                                    )
                                }
                                label={labelClose}
                                onClick={() => setIsClosed(true)}
                            />
                        )}
                    </TitleContainer>
                ) : (
                    titleFn()
                )}

                {children && (
                    <Content as={typeof children === "string" ? Text : "div"}>
                        {children}
                    </Content>
                )}
            </StyledToast>
        )
    }
)

export default Toast
