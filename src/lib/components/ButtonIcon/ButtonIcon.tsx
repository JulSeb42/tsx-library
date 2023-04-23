/*=============================================== ButtonIcon component ===============================================*/

import React, { forwardRef, useRef, useState, useLayoutEffect } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { useTouchScreen, Icon, Loader, stringifyPx } from "../../"

import { StyledButtonIcon, TooltipContainer, Tip } from "./styles"
import type { ButtonIconProps, TipsProps } from "./types"

const Tooltip = ({
    label,
    children,
    size,
    bottom,
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
        <TooltipContainer
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className={classNames(className, "tooltip-container")}
            style={{
                ["--button-size" as any]: size && stringifyPx(size),
            }}
        >
            <Tip
                ref={ref}
                className={classNames("tip", { visible: isVisible })}
                style={{
                    ["--tip-width" as any]: stringifyPx(width),
                    ["--tip-position" as any]: stringifyPx(bottom),
                }}
                data-position={tipPosition}
            >
                {label}
            </Tip>

            {children}
        </TooltipContainer>
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
            onClick,
            ...rest
        }: ButtonIconProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        const buttonFn = () => (
            <StyledButtonIcon
                as={as ? as : to ? Link : href ? "a" : "button"}
                ref={ref}
                aria-label={label}
                onClick={onClick}
                href={href}
                to={to === "prev" ? -1 : to}
                target={(href || to) && blank && "_blank"}
                rel={(href || to) && blank && "noreferrer noopener"}
                disabled={!!isLoading || disabled}
                className={className}
                data-variant={variant}
                style={{
                    ["--button-size" as any]: size && stringifyPx(size),
                    ...style,
                }}
                $color={color}
                {...rest}
            >
                {isLoading ? (
                    <Loader
                        size={iconSize}
                        color="gray"
                        borderWidth={loaderBorder}
                        className="loader"
                    />
                ) : icon && typeof icon === "string" ? (
                    <Icon
                        src={icon}
                        size={iconSize || size * 0.7}
                        className="icon"
                    />
                ) : (
                    icon
                )}
            </StyledButtonIcon>
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
