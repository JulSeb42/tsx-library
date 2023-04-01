/*=============================================== Toast component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"

import { Text, ButtonIcon, Icon } from "../../"
import { CloseIcon } from "../../icons"
import { getLineHeight } from "../../utils/get-line-height"

import * as Styles from "./styles"
import type { ToastProps } from "./types"

const Toast = forwardRef(
    (
        {
            as,
            title,
            titleSize,
            titleTag = "h5",
            titleAs,
            titleWeight,
            maxWidth,
            shadow,
            icon,
            close,
            labelClose = "Close",
            position,
            children,
            borderRadius = "m",
            border,
            padding = "m",
            ...rest
        }: ToastProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [isClosed, setIsClosed] = useState(false)

        const titleFn = () => (
            <Styles.Title
                tag={titleTag}
                as={titleAs}
                fontWeight={titleWeight}
                fontSize={titleSize}
            >
                {title}
            </Styles.Title>
        )

        const closeProps = {
            onClick: () => setIsClosed(true),
            size: 32,
            hoverBackground: true,
        }

        return (
            <Styles.StyledToast
                ref={ref}
                as={as}
                $isClosed={isClosed}
                $maxWidth={maxWidth}
                $shadow={shadow}
                $position={position?.position || "relative"}
                $zIndex={position?.zIndex}
                $left={position?.left}
                $top={position?.top}
                $right={position?.right}
                $bottom={position?.bottom}
                $borderRadius={borderRadius}
                $borderWidth={border?.width}
                $borderColor={border?.color}
                $padding={padding}
                {...rest}
            >
                {icon || close ? (
                    <Styles.TitleContainer
                        $gap={
                            icon && typeof icon === "object" && icon.gap
                                ? icon.gap
                                : "xs"
                        }
                    >
                        {icon && (
                            <Styles.IconContainer
                                $height={getLineHeight(titleTag)}
                            >
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
                            <ButtonIcon
                                icon={
                                    typeof close === "string" ? (
                                        close
                                    ) : (
                                        <CloseIcon size={32 * 0.7} />
                                    )
                                }
                                variant="transparent"
                                label={labelClose}
                                {...closeProps}
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
