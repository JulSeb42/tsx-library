/*=============================================== Button ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import Loader from "../Loader"

import * as Styles from "./styles"
import { ButtonProps } from "./types"

const Button = forwardRef(
    (
        {
            disabled,
            children,
            to,
            type = "button",
            isLoading,
            options,
            ...props
        }: ButtonProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.StyledButton
            $color={options?.color || "primary"}
            $buttonStyle={options?.variant || "plain"}
            $noPadding={options?.noPadding}
            as={to ? Link : "button"}
            to={to ? to : undefined}
            disabled={!!isLoading || disabled}
            type={to ? undefined : type}
            ref={ref}
            {...props}
        >
            {isLoading && (
                <Loader options={{ size: 16, borderSize: 2, color: "gray" }} />
            )}

            {options?.iconLeft && !isLoading && (
                <Icon src={options.iconLeft} size={16} />
            )}

            {children}

            {options?.iconRight && <Icon src={options.iconRight} size={16} />}
        </Styles.StyledButton>
    )
)

export default Button
