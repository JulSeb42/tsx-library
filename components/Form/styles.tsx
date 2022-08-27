/*=============================================== Form styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"

const StyledForm = styled.form`
    ${Mixins.Grid({
        $gap: "m",
    })};
`

export { StyledForm }
