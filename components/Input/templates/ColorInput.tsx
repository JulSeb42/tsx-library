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
            ...props
        }: ColorInputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => (
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
            {...props}
        />
    )
)

export default ColorInput
