/*=============================================== MarkdownContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import { stringifyPx } from "js-utils-julseb"

import Mixins from "./Mixins"

import optionsMarkdown from "../options-markdown"

import { SpacerTypes } from "./common-types"

/*==================== Component ====================*/

const MarkdownContainer = ({ gap = "s", children, options = optionsMarkdown, ...props }: Props) => (
    <Container $gap={gap} options={options} {...props}>
        {children}
    </Container>
)

export default MarkdownContainer

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $gap?: SpacerTypes | string | number
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    gap?: SpacerTypes | string | number
    options?: any
    children: string | React.ReactNode | React.ReactNode[]
}

/*==================== Styles ====================*/

const Container = styled(Markdown)<StyleProps>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap: typeof $gap === "number" ? stringifyPx($gap) : $gap,
        })};
`
