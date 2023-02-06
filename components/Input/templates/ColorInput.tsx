/*=============================================== ColorInput ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "../styles"
import { ColorInputProps } from "../types"

const ColorInput = forwardRef(
    (
        {
            type = "color",
            accentColor = "primary",
            backgroundColor,
            variant = "rounded",
            ...rest
        }: ColorInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => (
        <Styles.StyledInput
            ref={ref}
            type={type}
            $type={type}
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            $variant={variant}
            {...rest}
        />
    )
)

export default ColorInput
