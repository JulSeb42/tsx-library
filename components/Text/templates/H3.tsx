/*=============================================== H3 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH3 } from "../styles"

const H3 = ({
    color,
    display,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH3
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH3>
)
export default H3
