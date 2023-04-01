/*=============================================== Form styles ===============================================*/

import styled from "styled-components"

import { Mixins, stringifyPx } from "../../"
import type { SpacersTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledForm = styled.form<{
    $gap?: SpacersTypes
    $maxWidth?: string | number
}>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })};
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};
`

setDefaultTheme([StyledForm])

export { StyledForm }
