/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import { Radiuses } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledHr = styled.hr`
    border: none;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.Round};
`

setDefaultTheme([StyledHr])

export { StyledHr }
