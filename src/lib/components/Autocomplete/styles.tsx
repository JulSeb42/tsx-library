/*=============================================== Autocomplete styles ===============================================*/

import styled from "styled-components"

import { InputBaseMixin } from "../InputComponents/styles"

import { setDefaultTheme } from "../../utils"

const AutocompleteContainer = styled.div`
    position: relative;
    z-index: 10;
`

const StyledAutocomplete = styled.input`
    ${InputBaseMixin};

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
    }
`

setDefaultTheme([StyledAutocomplete, AutocompleteContainer])

export { StyledAutocomplete, AutocompleteContainer }
