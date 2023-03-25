/*=============================================== Toast component ===============================================*/

import React, { forwardRef, useState } from "react"

import { Text, ButtonIcon, Icon } from "../../"
import CloseIcon from "../../icons/CloseIcon"

import * as Styles from "./styles"
import { ToastProps } from "./types"

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
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        const [isClosed, setIsClosed] = useState(false)

        const titleFn = () => (
            // @ts-expect-error
            <Text
                tag={titleTag}
                as={titleAs}
                fontWeight={titleWeight}
                fontSize={titleSize}
            >
                {title}
            </Text>
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
                    <Styles.TitleContainer>
                        {icon && (
                            <Icon
                                src={
                                    typeof icon === "object" ? icon.name : icon
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
                        )}

                        {titleFn()}

                        {close &&
                            (typeof close === "string" ? (
                                <ButtonIcon
                                    icon={close}
                                    variant="transparent"
                                    label={labelClose}
                                    {...closeProps}
                                />
                            ) : (
                                <ButtonIcon
                                    libicon={<CloseIcon size={32 * 0.7} />}
                                    variant="transparent"
                                    label={labelClose}
                                    {...closeProps}
                                />
                            ))}
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
