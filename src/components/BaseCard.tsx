/*=============================================== BaseCard ===============================================*/

import styled from "styled-components"

import { Mixins, Radiuses } from "../lib"
import { setDefaultTheme } from "../lib/utils/setDefaultTheme"

const BaseCard = styled.div`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.M};
    overflow: hidden;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "s",
        $padding: "s",
    })};
`

setDefaultTheme([BaseCard])

export default BaseCard
