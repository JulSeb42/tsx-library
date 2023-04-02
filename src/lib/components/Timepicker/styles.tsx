/*=============================================== Timepicker styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import { InputBaseMixin } from "../InputComponents"
import type { ValidationTypes, ColorsHoverTypes } from "../../types"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"

import { setDefaultTheme } from "../../utils"

const StyledTimepicker = styled.div<{
    $isOpen?: boolean
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
    $variant?: InputVariantTypes
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

setDefaultTheme([StyledTimepicker, Selected])

export { StyledTimepicker, Selected }
