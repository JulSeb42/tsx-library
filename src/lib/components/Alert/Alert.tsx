/*=============================================== Alert component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Text } from "../../"

import * as Styles from "./styles"
import type { AlertProps } from "./types"

const Alert = forwardRef(
    (
        {
            as,
            children,
            fontSize = "body",
            customFontSize,
            fontWeight = "regular",
            color = "primary",
            backgroundColor,
            textColor = color === "white" ? "black" : "font",
            padding = "m",
            borderRadius = "m",
            maxWidth,
            gap = "xs",
            border = {
                width: 1,
                style: "solid",
            },
            ...rest
        }: AlertProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledAlert
            ref={ref}
            as={as ? as : typeof children === "string" ? Text : "div"}
            $maxWidth={maxWidth}
            $padding={padding}
            $borderRadius={borderRadius}
            $border={border}
            $fontSize={fontSize}
            $customFontSize={customFontSize}
            $fontWeight={fontWeight}
            $gap={gap}
            $color={color}
            $backgroundColor={backgroundColor}
            $textColor={textColor}
            {...rest}
        >
            {children}
        </Styles.StyledAlert>
    )
)

export default Alert
