/*=============================================== ButtonIcon ===============================================*/

import React, { forwardRef, useRef, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import Loader from "../Loader"
import Burger from "../Burger"
import { useTouchScreen } from "../../hooks"

import * as Styles from "./styles"
import { ButtonIconProps, TipsProps } from "./types"

const Tooltip = ({ label, children, position, size }: TipsProps) => {
    const ref = useRef<any>(null)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth)
    }, [])

    const [isVisible, setIsVisible] = useState(false)

    return (
        <Styles.TooltipContainer
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            $position={position?.position || "relative"}
            $left={position?.left}
            $top={position?.top}
            $right={position?.right}
            $bottom={position?.bottom}
            $zIndex={position?.zIndex}
            $size={size}
        >
            <Styles.Tip $isVisible={isVisible} $width={width} ref={ref}>
                {label}
            </Styles.Tip>

            {children}
        </Styles.TooltipContainer>
    )
}

const ButtonIcon = forwardRef(
    (
        {
            type = "button",
            isLoading,
            to,
            disabled,
            color = "primary",
            size = 48,
            loaderBorder = 4,
            icon,
            libicon,
            variant = "plain",
            hoverBackground,
            shadow,
            position,
            burger,
            isBurgerOpen,
            label,
            showLabel,
            ...props
        }: ButtonIconProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => {
        const buttonFunc = () => (
            <Styles.StyledButtonIcon
                $hoverBackground={hoverBackground}
                $color={color}
                $size={size}
                $variant={variant}
                to={to ? to : undefined}
                as={to ? Link : "button"}
                disabled={!!isLoading || disabled}
                ref={ref}
                type={type}
                $shadow={typeof shadow === "object" ? shadow.default : shadow}
                $shadowHover={
                    typeof shadow === "object" ? shadow.hover : shadow
                }
                $shadowActive={
                    typeof shadow === "object" ? shadow.active : shadow
                }
                $position={position?.position || "relative"}
                $left={position?.left}
                $top={position?.top}
                $right={position?.right}
                $bottom={position?.bottom}
                $zIndex={position?.zIndex}
                aria-label={label}
                {...props}
            >
                {isLoading ? (
                    <Loader
                        size={size * 0.7}
                        color="gray"
                        borderSize={loaderBorder}
                    />
                ) : icon ? (
                    <Icon src={icon} size={size * 0.7} />
                ) : burger ? (
                    <Burger
                        isOpen={isBurgerOpen}
                        color={color === "white" ? "primary" : "white"}
                        width={size * 0.5}
                        height={size * 0.4}
                        noHover
                        as="span"
                    />
                ) : (
                    libicon
                )}
            </Styles.StyledButtonIcon>
        )

        const isTouchScreen = useTouchScreen()

        return showLabel && !isTouchScreen ? (
            <Tooltip label={label} position={position} size={size}>
                {buttonFunc()}
            </Tooltip>
        ) : (
            buttonFunc()
        )
    }
)

export default ButtonIcon
