/*=============================================== Autocomplete styles ===============================================*/

import styled from "styled-components"

import type { ColorsHoverTypes, ValidationTypes } from "../../types"
import { InputBaseMixin } from "../InputComponents/styles"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"

import { setDefaultTheme } from "../../utils"

const InputContainer = styled.div`
    position: relative;
    z-index: 10;
`

const StyledAutocomplete = styled.input<{
    $hasIcon?: boolean
    $validation?: ValidationTypes
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
    $variant?: InputVariantTypes
}>`
    ${({ $accentColor, $backgroundColor, $hasIcon, $validation, $variant }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $backgroundColor: $backgroundColor,
            $hasIcon: $hasIcon,
            $validation: $validation,
            $variant: $variant,
        })};
`

setDefaultTheme([StyledAutocomplete, InputContainer])

export { StyledAutocomplete, InputContainer }
