/*=============================================== H2 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH2 } from "../styles"

const H2 = ({
    color,
    display,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH2
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH2>
)

export default H2
