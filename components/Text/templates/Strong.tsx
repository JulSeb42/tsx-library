/*=============================================== Strong ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledStrong } from "../styles"

const Strong = ({
    color,
    linkColor = "primary",
    children,
    as,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledStrong $color={color} $linkColor={linkColor} as={as} {...props}>
        {children}
    </StyledStrong>
)

export default Strong
