/*=============================================== Lib icons styles ===============================================*/

import styled from "styled-components"

import setDefaultTheme from "../utils/setDefaultTheme"

import type { AllColorsTypes } from "../types"

const StyledIcon = styled.svg<{ $size?: number; $color?: AllColorsTypes }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${({ theme }) => theme.AllColors};

    path {
        fill: ${({ theme }) => theme.AllColors};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
