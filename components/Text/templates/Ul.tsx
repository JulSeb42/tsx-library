/*=============================================== Ul ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledUl } from "../styles"

const Ul = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLUListElement>) => (
    <StyledUl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledUl>
)

export default Ul
