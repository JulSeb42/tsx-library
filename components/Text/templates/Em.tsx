/*=============================================== Em ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledEm } from "../styles"

const Em = ({
    color,
    linkColor = "primary",
    children,
    as,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledEm $color={color} $linkColor={linkColor} as={as} {...props}>
        {children}
    </StyledEm>
)

export default Em
