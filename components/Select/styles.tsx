/*=============================================== Select styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, Transitions, Icon } from "../../"
import { ChevronDownIcon } from "../../icons"
import { InputBaseMixin } from "../InputComponents"
import { ConstantValues } from "../InputComponents/styles"
import type { ColorsHoverTypes } from "../../types"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"

import { setDefaultTheme } from "../../utils"

const StyledSelect = styled.div<{
    disabled?: boolean
    $isOpen: boolean
    $isEmpty?: boolean
}>`
    position: relative;
    width: 100%;
    height: ${ConstantValues.InputHeight}px;
    cursor: ${({ $isEmpty, disabled }) =>
        $isEmpty ? "default" : disabled ? "not-allowed" : "pointer"};
    z-index: ${({ $isOpen }) => ($isOpen ? 30 : 0)};
`

const Selected = styled.span<{
    $isOpen?: boolean
    $accentColor?: ColorsHoverTypes
    $disabled?: boolean
    $backgroundColor?: InputBackgroundTypes
    $variant?: InputVariantTypes
}>`
    ${({ $accentColor, $isOpen, $disabled, $backgroundColor, $variant }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $isFocus: $isOpen,
            $disabled: $disabled,
            $backgroundColor: $backgroundColor,
            $variant: $variant,
        })};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
`

const IconAnim = ({
    $isOpen,
    $hasAnimation,
}: {
    $isOpen: boolean
    $hasAnimation?: boolean
}) => css`
    transform: ${$isOpen && $hasAnimation && "rotate(180deg)"};
    transition: ${Transitions.Short};
`

const StyledChevronDown = styled(ChevronDownIcon)<{ $isOpen: boolean }>`
    ${({ $isOpen }) => IconAnim({ $isOpen: $isOpen, $hasAnimation: true })}
`

const StyledIcon = styled(Icon)<{ $isOpen: boolean; $hasAnimation?: boolean }>`
    ${({ $isOpen, $hasAnimation }) =>
        IconAnim({ $isOpen: $isOpen, $hasAnimation: $hasAnimation })}
`

setDefaultTheme([StyledSelect, Selected, StyledChevronDown, StyledIcon])

export { StyledSelect, Selected, StyledChevronDown, StyledIcon }
