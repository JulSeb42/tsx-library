/*=============================================== Burger ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { BurgerProps } from "./types"

const Burger = ({
    isOpen,
    ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
    color = "primary",
    width = 32,
    height = 24,
    ...props
}: BurgerProps) => (
    <Styles.StyledBurger
        $isOpen={isOpen}
        aria-label={ariaLabel}
        $color={color}
        $width={width}
        $height={height}
        {...props}
    >
        <span />
        <span />
        <span />
    </Styles.StyledBurger>
)

export default Burger
