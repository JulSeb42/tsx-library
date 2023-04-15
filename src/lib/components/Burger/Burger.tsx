/*=============================================== Burger component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"

import * as Styles from "./styles"
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
        const classes = [
            className ? className : null,
            noHover ? "no-hover" : null,
            isOpen ? "open" : null,
        ].join(" ")

        const styles = {
            ["--burger-width" as any]: width && stringifyPx(width),
            ["--burger-height" as any]: height && stringifyPx(height),
            ["--burger-border-height" as any]:
                borderHeight && stringifyPx(borderHeight),
            ...style,
        }

        return (
            <Styles.StyledBurger
                ref={ref}
                as={as}
                aria-label={ariaLabel}
                className={classes}
                style={styles}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
            </Styles.StyledBurger>
        )
    }
)

export default Burger
