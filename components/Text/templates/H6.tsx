/*=============================================== H6 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH6 } from "../styles"

const H6 = ({
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
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH6
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
    </StyledH6>
)

export default H6
