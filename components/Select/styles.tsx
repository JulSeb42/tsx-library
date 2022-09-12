/*=============================================== Select styles ===============================================*/

import styled, { css } from "styled-components"

import ChevronDownIcon from "../../icons/ChevronDownIcon"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"
import { Transitions } from "../../Variables"
import Icon from "../Icon"
import { InputBaseMixin } from "../InputComponents"

import { ColorsHoverTypes } from "../../utils/common-types"
import { InputBackgroundTypes } from "../Input/types"

const inputHeight = 32

const StyledSelect = styled.div<{
    disabled?: boolean
    $isOpen: boolean
    $isEmpty?: boolean
    ref?: any
    onClick?: any
}>`
    position: relative;
    width: 100%;
    height: ${inputHeight}px;
    cursor: ${({ $isEmpty, disabled }) =>
        $isEmpty ? "default" : disabled ? "not-allowed" : "pointer"};
    z-index: ${({ $isOpen }) => ($isOpen ? 30 : 0)};
`

const Selected = styled.span<{
    $isOpen?: boolean
    $accentColor?: ColorsHoverTypes
    $disabled?: boolean
    $backgroundColor?: InputBackgroundTypes
}>`
    ${({ $accentColor, $isOpen, $disabled, $backgroundColor }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $isFocus: $isOpen,
            $disabled: $disabled,
            $backgroundColor: $backgroundColor,
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
