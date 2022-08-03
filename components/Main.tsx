/*=============================================== Main ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"
import Mixins from "./Mixins"

/*==================== Component ====================*/

const Main = ({ size, position, children, ...props }: Props) => (
    <Container $size={size} $position={position} {...props}>
        {children}
    </Container>
)

export default Main

/*==================== Types ====================*/

const sizes = {
    default: "default",
    large: "large",
    form: "form,",
} as const

type SizesTypes = keyof typeof sizes

const positions = { 1: 1, 2: 2 } as const

type PositionsTypes = keyof typeof positions

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $size?: SizesTypes | number
    $position?: PositionsTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizesTypes | number
    position?: PositionsTypes
}

/*==================== Styles ====================*/

const Container = styled.main<StyleProps>`
    width: ${({ $size }) =>
        $size === "large"
            ? Variables.Layouts.Main.Large
            : $size === "form"
            ? Variables.Layouts.Main.Form
            : typeof $size === "number"
            ? stringifyPx($size)
            : Variables.Layouts.Main.Default};
    ${Mixins.Grid({
        $alignContent: "start",
        $justifyItems: "start",
        $gap: "l",
        $padding: `${Variables.Spacers.XXL} 0`,
    })};
    min-height: 100vh;
    grid-column: ${({ $position }) => ($position === 2 ? 3 : 2)};

    @media ${Variables.Breakpoints.Tablet} {
        min-height: inherit;
        grid-column: 2;
    }

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
