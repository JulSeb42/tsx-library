/*=============================================== Button component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { Loader, Icon } from "../../"

import * as Styles from "./styles"
import type { ButtonProps } from "./types"

const Button = forwardRef(
    (
        {
            as,
            color = "primary",
            shadow,
            disabled,
            type = "button",
            children,
            icons,
            variant = "plain",
            noPadding,
            isLoading,
            loaderVariant = 1,
            borderRadius = "m",
            href,
            blank,
            size = "default",
            gap = "xs",
            to,
            ...rest
        }: ButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.StyledButton
            ref={ref}
            as={as ? as : to ? Link : href ? "a" : "button"}
            to={to === "prev" ? -1 : to}
            href={href}
            target={(href || to) && blank && "_blank"}
            rel={(href || to) && blank && "noreferrer noopener"}
            type={href || to ? undefined : type}
            disabled={!!isLoading || disabled}
            $variant={variant}
            $color={color}
            $noPadding={noPadding}
            $shadow={typeof shadow === "string" ? shadow : undefined}
            $shadowDefault={
                typeof shadow === "object" ? shadow.default : undefined
            }
            $shadowHover={typeof shadow === "object" ? shadow.hover : shadow}
            $shadowActive={typeof shadow === "object" ? shadow.active : shadow}
            $borderRadius={borderRadius}
            $size={size}
            $gap={gap}
            {...rest}
        >
            {isLoading &&
                (loaderVariant !== 4 ? (
                    <Loader
                        variant={loaderVariant}
                        size={16}
                        color="gray"
                        borderWidth={2}
                        speed={loaderVariant === 3 ? 1200 : 1000}
                    />
                ) : (
                    <Loader variant={4} size={16} color="gray" />
                ))}

            {!isLoading &&
                icons?.left &&
                (typeof icons.left === "string" ? (
                    <Icon src={icons.left} size={icons?.size || 16} />
                ) : (
                    icons.left
                ))}

            {children}

            {icons?.right &&
                (typeof icons.right === "string" ? (
                    <Icon src={icons.right} size={icons?.size || 16} />
                ) : (
                    icons.right
                ))}
        </Styles.StyledButton>
    )
)

export default Button
