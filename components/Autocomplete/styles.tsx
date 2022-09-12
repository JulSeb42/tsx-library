/*=============================================== Autocomplete styles ===============================================*/

import styled from "styled-components"

import setDefaultTheme from "../../utils/setDefaultTheme"
import { InputBaseMixin } from "../InputComponents"

import { ColorsHoverTypes, ValidationTypes } from "../../utils/common-types"
import { InputBackgroundTypes } from "../Input/types"

const InputContainer = styled.div`
    position: relative;
    z-index: 10;
`

const StyledInput = styled.input<{
    $hasIcon?: boolean
    $validation?: ValidationTypes
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    ${({ $accentColor, $backgroundColor, $hasIcon, $validation }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $backgroundColor: $backgroundColor,
            $hasIcon: $hasIcon,
            $validation: $validation,
        })};
`

setDefaultTheme([InputContainer, StyledInput])

export { InputContainer, StyledInput }
