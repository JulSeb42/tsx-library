/*=============================================== Form styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledForm = styled.form`
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "m",
    })};
`

setDefaultTheme([StyledForm])

export { StyledForm }
