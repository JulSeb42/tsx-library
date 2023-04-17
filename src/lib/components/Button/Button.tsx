/*=============================================== Button component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { Loader, Icon } from "../../"

import * as Styles from "./styles"
import type { ButtonProps } from "./types"

const Button = forwardRef(
    (
        {
            as,
            color = "primary",
            disabled,
            type = "button",
            children,
            icons,
            variant = "plain",
            isLoading,
            loaderVariant = 1,
            href,
            blank,
            size = "default",
            to,
            className,
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
            className={classNames(
                {
                    plain: variant === "plain",
                    transparent: variant === "transparent",
                    ghost: variant === "ghost",
                    outline: variant === "outline",
                },
                { small: size === "small" },
                className
            )}
            $color={color}
            {...rest}
        >
            {isLoading &&
                (loaderVariant !== 4 ? (
                    <Loader
                        variant={loaderVariant}
                        size={16}
                        color="gray"
                        borderWidth={2}
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
