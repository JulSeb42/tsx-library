/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledFlexbox = styled.div`
    display: var(--flex-display, flex);
    column-gap: var(--column-gap);
    row-gap: var(--row-gap);
    flex-direction: var(--flex-direction);
    flex-wrap: var(--flex-wrap);
    justify-content: var(--justify-content);
    align-items: var(--align-items);
    justify-items: var(--justify-items);
    align-content: var(--align-content);
    ${Mixins.PaddingVar()}
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
