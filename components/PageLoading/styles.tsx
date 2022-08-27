/*=============================================== PageLoading styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

const StyledPageLoading = styled.div<{
    $backgroundColor?: LibColorsTypes | ColorsShortTypes | string
}>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${({ $backgroundColor }) =>
        Mixins.AllColors({ $color: $backgroundColor })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    z-index: 999;
`

export { StyledPageLoading }
