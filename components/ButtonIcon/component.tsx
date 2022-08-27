/*=============================================== ButtonIcon ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import Loader from "../Loader"

import * as Styles from "./styles"
import { ButtonIconProps } from "./types"

const ButtonIcon = forwardRef(
    (
        { icon, disabled, isLoading, to, options, ...props }: ButtonIconProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.StyledButtonIcon
            $buttonStyle={options?.variant || "plain"}
            $size={options?.size || 48}
            $color={options?.color || "primary"}
            to={to ? to : undefined}
            as={to ? Link : "button"}
            disabled={isLoading ? true : disabled}
            $hoverBackground={options?.hoverBackground}
            ref={ref}
            {...props}
        >
            {isLoading ? (
                <Loader
                    options={{
                        size: options?.size ? options?.size * 0.6 : 48 * 0.6,
                        color: "gray",
                        borderSize: options?.loaderBorder || 4,
                    }}
                />
            ) : (
                <Icon
                    src={icon}
                    size={options?.size ? options?.size * 0.6 : 48 * 0.6}
                />
            )}
        </Styles.StyledButtonIcon>
    )
)

export default ButtonIcon
