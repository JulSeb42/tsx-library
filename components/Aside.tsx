/*=============================================== Aside ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "../utils"

import Variables from "./Variables"
import Mixins from "./Mixins"

/*==================== Component ====================*/

const Aside = ({ size, position, children, ...props }: Props) => (
    <StyledAside $size={size} $position={position} {...props}>
        {children}
    </StyledAside>
)

export default Aside

/*==================== Types ====================*/

const sizes = {
    default: "default",
    small: "small",
} as const

type SizeTypes = keyof typeof sizes

const positions = {
    1: 1,
    2: 2,
    3: 3,
} as const

type PositionsTypes = keyof typeof positions

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $size?: SizeTypes | number
    $position?: PositionsTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizeTypes | number
    position?: PositionsTypes
}

/*==================== Styles ====================*/

const StyledAside = styled.aside<StyleProps>`
    width: ${({ $size }) =>
        $size === "small"
            ? Variables.Layouts.Aside.Small
            : typeof $size === "number"
            ? stringifyPx($size)
            : Variables.Layouts.Aside.Default};
    ${Mixins.Grid({
        $alignContent: "start",
        $justifyItems: "start",
        $gap: "l",
        $padding: `${Variables.Spacers.XXL} 0`,
    })};
    min-height: 100vh;
    grid-column: ${({ $position }) => ($position === 2 ? 3 : $position === 3 ? 4 : 2)};

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
