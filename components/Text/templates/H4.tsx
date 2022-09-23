/*=============================================== H4 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH4 } from "../styles"

const H4 = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    display,
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH4
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        $display={display}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledH4>
)

export default H4
