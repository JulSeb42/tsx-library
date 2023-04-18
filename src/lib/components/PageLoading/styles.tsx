/*=============================================== PageLoading styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type { AllColorsTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BasePageLoading = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const StyledPageLoading = styled(BasePageLoading)<{
    $backgroundColor?: AllColorsTypes
}>`
    background-color: ${({ $backgroundColor, theme }) =>
        theme.AllColors({ $color: $backgroundColor })};
`

setDefaultTheme([StyledPageLoading])

export { StyledPageLoading }
