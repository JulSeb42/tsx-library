/*=============================================== Section ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "../utils"

import Mixins from "./Mixins"

/*==================== Component ====================*/

const Section = ({ gap = "large", children, div, ...props }: Props) => (
    <Container $gap={gap} as={div ? "div" : "section"} {...props}>
        {children}
    </Container>
)

export default Section

/*==================== Types ====================*/

const sizes = {
    large: "large",
    medium: "medium",
    small: "small",
} as const

type SizesTypes = keyof typeof sizes

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $gap?: SizesTypes | number
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    gap?: SizesTypes | number
    div?: boolean
}

/*==================== Styles ====================*/

const Container = styled.section<StyleProps>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap: $gap === "large" ? "m" : $gap === "medium" ? "s" : $gap === "small" ? "xs" : stringifyPx($gap),
        })};
    align-content: start;
    justify-items: start;

    & > div,
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6,
    & > p,
    & > ul,
    & > ol,
    & > dl,
    & > section,
    & > input,
    & > article,
    & > hr,
    & > pre,
    & > table,
    & > header,
    & > footer,
    & > iframe,
    & > nav,
    & > noscript,
    & > picture,
    & > select,
    & > textarea,
    & > form {
        justify-self: stretch;
    }
`
