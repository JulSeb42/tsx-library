/*=============================================== H4 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH4 } from "../styles"

const H4 = ({
    color,
    display,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH4
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH4>
)

export default H4
