/*=============================================== Alert component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Text, stringifyPx } from "../../"

import { StyledAlert } from "./styles"
import type { AlertProps } from "./types"

const Alert = forwardRef(
    (
        {
            as,
            children,
            color = "primary",
            maxWidth,
            style,
            ...rest
        }: AlertProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledAlert
                ref={ref}
                as={as ? as : typeof children === "string" ? Text : "div"}
                style={{
                    ["--alert-max-width" as any]:
                        maxWidth && stringifyPx(maxWidth),
                    ...style,
                }}
                $color={color}
                {...rest}
            >
                {children}
            </StyledAlert>
        )
    }
)

export default Alert
