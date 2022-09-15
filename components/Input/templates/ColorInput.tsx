/*=============================================== ColorInput ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "../styles"
import { ColorInputProps } from "../types"

const ColorInput = forwardRef(
    (
        {
            id,
            type = "color",
            value,
            name,
            disabled,
            autoFocus,
            accentColor,
            backgroundColor,
            showColor,
            variant = "rounded",
            ...props
        }: ColorInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => (
        <Styles.StyledInputContent>
            <Styles.StyledInput
                id={id}
                type={type}
                value={value}
                name={name}
                disabled={disabled}
                ref={ref}
                $type={type}
                autoFocus={autoFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $variant={variant}
                {...props}
            />
        </Styles.StyledInputContent>
    )
)

export default ColorInput
