/*=============================================== Fade styles ===============================================*/

import styled from "styled-components"

import { Spacers } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledFade = styled.div`
    opacity: 0;
    transform: translateX(calc(${Spacers.S} * -1));
    transition: opacity 0.4s ease-out, transform 0.8s ease-out;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }
`

setDefaultTheme([StyledFade])

export { StyledFade }
