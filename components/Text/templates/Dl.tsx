/*=============================================== Dl ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledDl } from "../styles"

const Dl = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLDListElement>) => (
    <StyledDl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledDl>
)

export default Dl
