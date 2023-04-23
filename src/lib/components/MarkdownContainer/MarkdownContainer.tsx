/*=============================================== MarkdownContainer component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { OptionsMarkdown } from "../../utils/options-markdown"

import { StyledMarkdownContainer } from "./styles"
import type { MarkdownContainerProps } from "./types"

const MarkdownContainer = forwardRef(
    (
        {
            children,
            options = OptionsMarkdown,
            ...rest
        }: MarkdownContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledMarkdownContainer ref={ref} options={options} {...rest}>
            {children}
        </StyledMarkdownContainer>
    )
)

export default MarkdownContainer
