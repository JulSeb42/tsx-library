/*=============================================== MarkdownContainer ===============================================*/

import React from "react"

import optionsMarkdown from "../../utils/options-markdown"

import * as Styles from "./styles"
import { MarkdownContainerProps } from "./types"

const MarkdownContainer = ({
    gap = "s",
    content,
    options = optionsMarkdown,
    as,
    ...props
}: MarkdownContainerProps) => (
    <Styles.StyledMarkdownContainer
        $gap={gap}
        options={options}
        as={as}
        {...props}
    >
        {content}
    </Styles.StyledMarkdownContainer>
)

export default MarkdownContainer