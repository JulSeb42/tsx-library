/*=============================================== P ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledP } from "../styles"

const P = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledP
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledP>
)

export default P
