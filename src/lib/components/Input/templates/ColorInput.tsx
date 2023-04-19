/*=============================================== ColorInput ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { StyledInput } from "../styles"
import type { ColorInputProps } from "../types"

const ColorInput = forwardRef(
    (
        {
            type = "color",
            backgroundColor,
            variant = "rounded",
            className,
            ...rest
        }: ColorInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => (
        <StyledInput
            ref={ref}
            type={type}
            data-type={type}
            data-variant={variant}
            data-background={backgroundColor}
            className={classNames("input input-color", className)}
            {...rest}
        />
    )
)

export default ColorInput
