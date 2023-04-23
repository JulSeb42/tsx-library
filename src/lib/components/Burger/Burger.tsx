/*=============================================== Burger component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { stringifyPx } from "../../"

import { StyledBurger } from "./styles"
import type { BurgerProps } from "./types"

const Burger = forwardRef(
    (
        {
            as,
            isOpen,
            "aria-label": ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
            color = "primary",
            width,
            height,
            noHover,
            borderHeight,
            className = undefined,
            style,
            ...rest
        }: BurgerProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <StyledBurger
                ref={ref}
                as={as}
                aria-label={ariaLabel}
                className={classNames(
                    { "no-hover": noHover },
                    { open: isOpen },
                    className
                )}
                style={{
                    ["--burger-width" as any]: width && stringifyPx(width),
                    ["--burger-height" as any]: height && stringifyPx(height),
                    ["--burger-border-height" as any]:
                        borderHeight && stringifyPx(borderHeight),
                    ...style,
                }}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
            </StyledBurger>
        )
    }
)

export default Burger
