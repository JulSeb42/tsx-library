// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

const Container = styled.form`
    ${Mixins.Grid({
        gap: Variables.Spacers.S,
    })}
`

export { Container }
