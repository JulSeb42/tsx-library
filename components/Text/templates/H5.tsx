/*=============================================== H5 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH5 } from "../styles"

const H5 = ({
    color,
    display,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH5
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH5>
)

export default H5
