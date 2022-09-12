/*=============================================== Form styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledForm = styled.form`
    ${Mixins.Grid({
        $gap: "m",
    })};
`

setDefaultTheme([StyledForm])

export { StyledForm }
