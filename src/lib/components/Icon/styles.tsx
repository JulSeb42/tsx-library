/*=============================================== Icon styles ===============================================*/

import styled from "styled-components"
import SVG from "react-inlinesvg"

import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseIcon = styled(SVG)`
    width: var(--icon-size, 16px);
    height: var(--icon-size, 16px);
`

const StyledIcon = styled(BaseIcon)<{
    $color?: AllColorsTypes
}>`
    fill: ${({ theme, $color }) => theme.AllColors({ $color: $color })};

    path {
        fill: ${({ theme, $color }) => theme.AllColors({ $color: $color })};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
