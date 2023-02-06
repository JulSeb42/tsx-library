/*=============================================== Form styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import { SpacersTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledForm = styled.form<{ $gap?: SpacersTypes }>`
    ${Mixins.Grid};
`

setDefaultTheme([StyledForm])

export { StyledForm }
