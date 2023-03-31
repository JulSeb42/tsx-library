/*=============================================== ButtonIcon component ===============================================*/

import { forwardRef, useRef, useState, useLayoutEffect } from "react"
import type { ForwardedRef } from "react"

import { useTouchScreen, Icon, Loader, Burger, Avatar } from "../../"

import * as Styles from "./styles"
import type { ButtonIconProps, TipsProps } from "./types"

const Tooltip = ({
    label,
    children,
    position,
    size,
    bottom = "125%",
    tipPosition = "up",
    className,
}: TipsProps) => {
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
            $position={position?.position}
            $left={position?.left}
            $top={position?.top}
            $right={position?.right}
            $bottom={position?.bottom}
            $zIndex={position?.zIndex}
            $size={size}
            className={className}
        >
            <Styles.Tip
                $isVisible={isVisible}
                $width={width}
                $bottom={bottom}
                ref={ref}
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
            shadow,
            position,
            label,
            showLabel,
            type,
            disabled,
            icon,
            burger,
            isBurgerOpen,
            variant = "plain",
            hoverBackground,
            borderRadius = "circle",
            iconSize = size * 0.7,
            href,
            blank,
            avatar,
            className,
            ...rest
        }: ButtonIconProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        const buttonFn = () => (
            <Styles.StyledButtonIcon
                as={as ? as : href ? "a" : "button"}
                ref={ref}
                aria-label={label}
                href={href}
                target={href && blank && "_blank"}
                rel={href && blank && "noreferrer noopener"}
                disabled={!!isLoading || disabled}
                type={type}
                $hoverBackground={hoverBackground}
                $color={color}
                $size={size}
                $variant={variant}
                $shadow={typeof shadow === "object" ? shadow.default : shadow}
                $shadowHover={
                    typeof shadow === "object" ? shadow.hover : shadow
                }
                $shadowActive={
                    typeof shadow === "object" ? shadow.active : shadow
                }
                $position={!showLabel ? position?.position : "relative"}
                $left={!showLabel ? position?.left : undefined}
                $top={!showLabel ? position?.top : undefined}
                $right={!showLabel ? position?.right : undefined}
                $bottom={!showLabel ? position?.bottom : undefined}
                $zIndex={!showLabel ? position?.zIndex : undefined}
                $borderRadius={borderRadius}
                $isAvatar={!!avatar}
                className={className}
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
                ) : icon ? (
                    icon
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
                    avatar && <Avatar img={avatar} size={size} alt={label} />
                )}
            </Styles.StyledButtonIcon>
        )

        const isTouchScreen = useTouchScreen()

        return showLabel && !isTouchScreen ? (
            <Tooltip
                label={label}
                position={position}
                size={size}
                tipPosition={
                    typeof showLabel === "object" ? showLabel?.position : "up"
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
