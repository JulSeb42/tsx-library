/*=============================================== Strong ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledStrong } from "../styles"

const Strong = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledStrong
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledStrong>
)

export default Strong
