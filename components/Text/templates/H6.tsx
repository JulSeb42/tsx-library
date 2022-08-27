/*=============================================== H6 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH6 } from "../styles"

const H6 = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH6
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH6>
)

export default H6
