/*=============================================== Fallback ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const Fallback = styled.div`
    position: relative;
    ${Mixins.ImgSizeVar("fallback")};
    background-color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([Fallback])

export default Fallback
