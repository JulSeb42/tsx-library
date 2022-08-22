/*=============================================== MarkdownContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import { stringifyPx } from "../utils"

import Mixins from "./Mixins"

import optionsMarkdown from "../options-markdown"

import { SpacerTypes } from "../common-types"

/*==================== Component ====================*/

const MarkdownContainer = ({
    gap = "s",
    content,
    options = optionsMarkdown,
    ...props
}: Props) => (
    <StyledMarkdownContainer $gap={gap} options={options} {...props}>
        {content}
    </StyledMarkdownContainer>
)

export default MarkdownContainer

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    gap?: SpacerTypes | string | number
    options?: any
    content: string | React.ReactNode | React.ReactNode[]
}

/*==================== Styles ====================*/

const StyledMarkdownContainer = styled(Markdown)<{
    $gap?: SpacerTypes | string | number
}>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap: typeof $gap === "number" ? stringifyPx($gap) : $gap,
        })};
`
