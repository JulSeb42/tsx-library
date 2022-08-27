/*=============================================== H1 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH1 } from "../styles"

const H1 = ({
    color,
    display,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH1
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH1>
)

export default H1
