/*=============================================== MarkdownContainer component ===============================================*/

import React, { forwardRef } from "react"

import { OptionsMarkdown } from "../../"

import * as Styles from "./styles"
import { MarkdownContainerProps } from "./types"

const MarkdownContainer = forwardRef(
    (
        {
            as,
            gap = "s",
            content,
            options = OptionsMarkdown,
            ...rest
        }: MarkdownContainerProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledMarkdownContainer
            ref={ref}
            as={as}
            options={options}
            $gap={gap}
            {...rest}
        >
            {content}
        </Styles.StyledMarkdownContainer>
    )
)

export default MarkdownContainer
