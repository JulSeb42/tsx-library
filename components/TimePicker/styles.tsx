/*=============================================== Timepicker styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"
import ChevronDownIcon from "../../icons/ChevronDownIcon"
import { InputBaseMixin } from "../InputComponents"

import { ValidationTypes, ColorsHoverTypes } from "../../utils/common-types"
import { InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"

const StyledTimepicker = styled.div<{
    $isOpen?: boolean
    ref?: any
    $disabled?: boolean
}>`
    position: relative;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    z-index: ${({ $isOpen }) => ($isOpen ? 20 : 1)};
    width: 100%;
`

const Selected = styled.div<{
    $validation?: ValidationTypes
    $backgroundColor?: InputBackgroundTypes
    $accentColor?: ColorsHoverTypes
    $isOpen?: boolean
    $disabled?: boolean
    $hasIcon?: boolean
    $variant?: InputsVariantsTypes
}>`
    ${({
        $accentColor,
        $isOpen,
        $disabled,
        $backgroundColor,
        $validation,
        $hasIcon,
        $variant,
    }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $isFocus: $isOpen,
            $disabled: $disabled,
            $backgroundColor: $backgroundColor,
            $validation: $validation,
            $hasIcon: $hasIcon,
            $variant: $variant,
        })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
`

const StyledChevron = styled(ChevronDownIcon)<{ $isOpen?: boolean }>``

setDefaultTheme([StyledTimepicker, Selected, StyledChevron])

export { StyledTimepicker, Selected, StyledChevron }
