/*=============================================== Small ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledSmall } from "../styles"

const Small = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    children,
    as,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledSmall
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        as={as}
        {...props}
    >
        {children}
    </StyledSmall>
)

export default Small
