/*=============================================== Fade styles ===============================================*/

import styled from "styled-components"

import { Spacers } from "../../"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledFade = styled.div<{
    $isVisible: boolean
}>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateX(
        ${({ $isVisible }) => ($isVisible ? 0 : `calc(${Spacers.S} * -1)`)}
    );
    transition: opacity 0.4s ease-out, transform 0.8s ease-out;
`

setDefaultTheme([StyledFade])

export { StyledFade }
