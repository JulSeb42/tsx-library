/*=============================================== Button component ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import { Loader, Icon } from "../../"

import * as Styles from "./styles"
import { ButtonProps } from "./types"

const Button = forwardRef(
    (
        {
            as,
            color = "primary",
            shadow,
            to,
            disabled,
            type = "button",
            children,
            libicon,
            icons,
            variant = "plain",
            noPadding,
            isLoading,
            loaderVariant = 1,
            borderRadius = "m",
            href,
            blank,
            ...rest
        }: ButtonProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.StyledButton
            ref={ref}
            as={as ? as : to ? Link : href ? "a" : "button"}
            to={to}
            href={href}
            target={(to || href) && blank && "_blank"}
            rel={(to || href) && blank && "noreferrer noopener"}
            type={to ? undefined : type}
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

            {!isLoading && libicon?.left && libicon.left}

            {!isLoading &&
                icons?.left &&
                (typeof icons.left === "string" ? (
                    <Icon src={icons.left} size={16} />
                ) : (
                    icons.left
                ))}

            {children}

            {icons?.right &&
                (typeof icons.right === "string" ? (
                    <Icon src={icons.right} size={16} />
                ) : (
                    icons.right
                ))}

            {libicon?.right && libicon.right}
        </Styles.StyledButton>
    )
)

export default Button
