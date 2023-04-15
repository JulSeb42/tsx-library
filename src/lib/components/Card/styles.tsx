/*=============================================== Card styles ===============================================*/

import styled from "styled-components"

import { Flexbox, Mixins, FontFamilies } from "../.."
import type { BorderTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseCard = styled(Flexbox)`
    text-decoration: none;
    color: ${({ theme }) => theme.Font};
    background-color: ${({ theme }) => theme.Background};
    width: var(--card-width);
    height: var(--card-height);
    text-align: left;
    font-family: ${FontFamilies.Body};
    ${Mixins.BorderRadiusVar("card")};
    ${Mixins.PaddingVar("card")};
    background-image: url(var(--card-background-image));
    background-origin: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    overflow: hidden;
`

const StyledCard = styled(BaseCard)<{
    $border?: BorderTypes
}>`
    ${({ $border }) => $border && Mixins.Border({ $border })};
`

setDefaultTheme([StyledCard])

export { StyledCard }
