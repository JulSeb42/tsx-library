/*=============================================== ButtonIcon component ===============================================*/

import React, { forwardRef, useRef, useState, useLayoutEffect } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { useTouchScreen, Icon, Loader, stringifyPx } from "../../"

import * as Styles from "./styles"
import type { ButtonIconProps, TipsProps } from "./types"

const Tooltip = ({
    label,
    children,
    size,
    bottom = "125%",
    tipPosition = "top",
    className,
}: TipsProps) => {
    const ref = useRef<HTMLSpanElement>(null)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        setWidth(ref?.current?.offsetWidth || 200)
    }, [])

    const [isVisible, setIsVisible] = useState(false)

    return (
        <Styles.TooltipContainer
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className={className}
            style={{
                ["--button-size" as any]: size && stringifyPx(size),
            }}
        >
            <Styles.Tip
                ref={ref}
                className={isVisible ? "visible" : ""}
                $width={width}
                $bottom={bottom}
                $position={tipPosition}
            >
                {label}
            </Styles.Tip>

            {children}
        </Styles.TooltipContainer>
    )
}

const ButtonIcon = forwardRef(
    (
        {
            as,
            isLoading,
            color = "primary",
            size = 48,
            loaderBorder = 4,
            label,
            showLabel,
            disabled,
            icon,
            variant = "plain",
            iconSize = size * 0.7,
            href,
            blank,
            className,
            to,
            style,
            ...rest
        }: ButtonIconProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        const buttonFn = () => (
            <Styles.StyledButtonIcon
                as={as ? as : to ? Link : href ? "a" : "button"}
                ref={ref}
                aria-label={label}
                href={href}
                to={to === "prev" ? -1 : to}
                target={(href || to) && blank && "_blank"}
                rel={(href || to) && blank && "noreferrer noopener"}
                disabled={!!isLoading || disabled}
                className={classNames(
                    {
                        plain: variant === "plain",
                        transparent: variant === "transparent",
                        ghost: variant === "ghost",
                    },
                    className
                )}
                style={{
                    ["--button-size" as any]: size && stringifyPx(size),
                    ...style,
                }}
                $color={color}
                $variant={variant}
                {...rest}
            >
                {isLoading ? (
                    <Loader
                        size={iconSize}
                        color="gray"
                        borderWidth={loaderBorder}
                    />
                ) : icon && typeof icon === "string" ? (
                    <Icon src={icon} size={iconSize || size * 0.7} />
                ) : (
                    icon
                )}
            </Styles.StyledButtonIcon>
        )

        const isTouchScreen = useTouchScreen()

        return showLabel && !isTouchScreen ? (
            <Tooltip
                label={label}
                size={size}
                tipPosition={
                    typeof showLabel === "object" ? showLabel?.position : "top"
                }
                bottom={
                    typeof showLabel === "object" ? showLabel?.bottom : "125%"
                }
                className={className}
            >
                {buttonFn()}
            </Tooltip>
        ) : (
            buttonFn()
        )
    }
)

export default ButtonIcon
