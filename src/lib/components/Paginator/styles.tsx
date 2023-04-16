/*=============================================== Paginator styles ===============================================*/

import styled from "styled-components"

import { FontFamilies, FontSizes, Mixins, Radiuses, Spacers } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledPaginator = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
    })};
`

const StyledInput = styled.input`
    height: 32px;
    line-height: 32px;
    width: 48px;
    border: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.S};
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    padding: 0 ${Spacers.XS};
    background-color: ${({ theme }) => theme.Background};
    color: ${({ theme }) => theme.Font};
    line-height: 100%;
    outline: none;
    z-index: 0;
    -moz-appearance: textfield;

    &:focus {
        border-color: ${({ theme }) => theme.AllColors({ $color: "primary" })};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

setDefaultTheme([StyledPaginator, StyledInput])

export { StyledPaginator, StyledInput }
