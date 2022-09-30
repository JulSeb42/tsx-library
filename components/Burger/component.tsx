/*=============================================== Burger ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { BurgerProps } from "./types"

const Burger = forwardRef(
    (
        {
            isOpen,
            ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
            color = "primary",
            width = 32,
            height = 24,
            noHover,
            borderWidth = 2,
            ...props
        }: BurgerProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.StyledBurger
            $isOpen={isOpen}
            aria-label={ariaLabel}
            $color={color}
            $width={width}
            $height={height}
            ref={ref}
            $noHover={noHover}
            $borderWidth={borderWidth}
            {...props}
        >
            <span />
            <span />
            <span />
        </Styles.StyledBurger>
    )
)

export default Burger