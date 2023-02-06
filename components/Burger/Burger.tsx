/*=============================================== Burger component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { BurgerProps } from "./types"

const Burger = forwardRef(
    (
        {
            as,
            isOpen,
            "aria-label": ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
            color = "primary",
            width = 32,
            height = 24,
            noHover,
            borderWidth = 2,
            ...rest
        }: BurgerProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.StyledBurger
            ref={ref}
            as={as}
            aria-label={ariaLabel}
            $isOpen={isOpen}
            $color={color}
            $width={width}
            $height={height}
            $noHover={noHover}
            $borderWidth={borderWidth}
            {...rest}
        >
            <span />
            <span />
            <span />
        </Styles.StyledBurger>
    )
)

export default Burger
