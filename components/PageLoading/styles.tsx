/*=============================================== PageLoading styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledPageLoading = styled.div<{ $backgroundColor?: AllColorsTypes }>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${({ $backgroundColor, theme }) =>
        theme.AllColors({ $color: $backgroundColor })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    z-index: 999;
`

setDefaultTheme([StyledPageLoading])

export { StyledPageLoading }
