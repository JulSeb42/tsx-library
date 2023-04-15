/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledFlexbox = styled.div`
    display: var(--flex-display, flex);
    column-gap: var(--flex-column-gap);
    row-gap: var(--flex-row-gap);
    flex-direction: var(--flex-direction);
    flex-wrap: var(--flex-wrap);
    justify-content: var(--flex-justify-content);
    align-items: var(--flex-align-items);
    justify-items: var(--flex-justify-items);
    align-content: var(--flex-align-content);
    ${Mixins.PaddingVar("flex")}
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
