/*=============================================== Lib icons styles ===============================================*/

import styled from "styled-components"

import { setDefaultTheme } from "../utils"

import type { AllColorsTypes } from "../types"

const StyledIcon = styled.svg<{ $size?: number; $color?: AllColorsTypes }>`
    width: var(--icon-size, 64px);
    height: var(--icon-size, 64px);
    fill: ${({ theme }) => theme.AllColors};

    path {
        fill: ${({ theme }) => theme.AllColors};
    }

    &.is-clickable {
        cursor: pointer;
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
