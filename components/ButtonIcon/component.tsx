/*=============================================== ButtonIcon ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import Loader from "../Loader"
import Burger from "../Burger"

import * as Styles from "./styles"
import { ButtonIconProps } from "./types"

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
            ...props
        }: ButtonIconProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
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
            $shadowHover={typeof shadow === "object" ? shadow.hover : shadow}
            $shadowActive={typeof shadow === "object" ? shadow.active : shadow}
            $position={position?.position || "relative"}
            $left={position?.left}
            $top={position?.top}
            $right={position?.right}
            $bottom={position?.bottom}
            $zIndex={position?.zIndex}
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
)

export default ButtonIcon
