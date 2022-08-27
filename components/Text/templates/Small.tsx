/*=============================================== Small ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledSmall } from "../styles"

const Small = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledSmall
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledSmall>
)

export default Small
