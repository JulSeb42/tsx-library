/*=============================================== Key styles ===============================================*/

import styled from "styled-components"

import { FontSizes, Mixins, Radiuses } from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseKey = styled.span`
    border: 1px solid;
    border-bottom-width: 2px;
    width: fit-content;
    justify-self: start;
    ${Mixins.Padding({
        $padding: {
            topBottom: null,
            leftRight: "xxs",
        },
    })};
    border-radius: ${Radiuses.XS};
    font-size: ${FontSizes.Small};
`

const StyledKey = styled(BaseKey)<{
    $accentColor?: ColorsHoverTypes
}>`
    border-color: ${({ theme, $accentColor }) =>
        theme.ColorsHoverDefault({ $color: $accentColor })};
    background-color: ${({ $accentColor, theme }) =>
        theme.Colors50({ $color: $accentColor })};
`

setDefaultTheme([StyledKey])

export { StyledKey }
