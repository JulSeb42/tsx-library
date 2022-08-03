/*=============================================== Wrapper ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"

/*==================== Component ====================*/

const Wrapper = ({ template, children, ...props }: Props) => (
    <Container $template={template} {...props}>
        {children}
    </Container>
)

export default Wrapper

/*==================== Types ====================*/

const common = {
    "1col": "1col",
    "2cols": "2cols",
    "3cols": "3cols",
} as const

type CommonTypes = keyof typeof common

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $template?: CommonTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    template?: CommonTypes
}

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    display: grid;
    grid-template-columns: ${({ $template }) =>
        $template === "2cols"
            ? Variables.Layouts.Wrapper.TwoCols
            : $template === "3cols"
            ? Variables.Layouts.Wrapper.ThreeCols
            : Variables.Layouts.Wrapper.OneCol};
    gap: ${Variables.Spacers.L};
    position: relative;
    z-index: 10;
    background-color: ${Variables.Colors.Background};
`
