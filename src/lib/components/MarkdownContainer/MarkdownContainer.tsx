/*=============================================== MarkdownContainer component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { OptionsMarkdown } from "../../"

import * as Styles from "./styles"
import type { MarkdownContainerProps } from "./types"

const MarkdownContainer = forwardRef(
    (
        {
            gap = "s",
            content,
            options = OptionsMarkdown,
            ...rest
        }: MarkdownContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledMarkdownContainer
            ref={ref}
            options={options}
            $gap={gap}
            {...rest}
        >
            {content}
        </Styles.StyledMarkdownContainer>
    )
)

export default MarkdownContainer
