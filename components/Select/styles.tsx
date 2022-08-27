/*=============================================== Select styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

const inputHeight = 32

const StyledSelect = styled.div<{
    disabled?: boolean
    onClick?: any
    $isOpen: boolean
    $isEmpty?: boolean
    ref?: any
}>`
    position: relative;
    width: 100%;
    height: ${inputHeight}px;
    border: 1px solid
        ${({ $isOpen, $isEmpty }) =>
            $isOpen && !$isEmpty
                ? Variables.Colors.Primary500
                : Variables.Colors.Gray200};
    cursor: ${({ $isEmpty }) => ($isEmpty ? "default" : "pointer")};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: 0 ${Variables.Spacers.XS};
    background-color: ${Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: ${({ $isOpen }) => ($isOpen ? 30 : 0)};

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            background-color: ${Variables.Colors.Gray50};
            color: ${Variables.Colors.Gray500};
        `}
`

const Selected = styled.span`
    padding: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    width: 100%;
    height: 100%;
    line-height: 100%;
    user-select: none;
`

const List = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: ${inputHeight}px;
    left: 0;
    width: 100%;
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Shadows.M};
    max-height: ${({ $isOpen }) => ($isOpen ? "150px" : 0)};
    transition: ${Variables.Transitions.Short};
    overflow-y: scroll;
`

const Item = styled.span<{ $isSelected: boolean }>`
    padding: 0 ${Variables.Spacers.XS};
    background-color: ${({ $isSelected }) =>
        $isSelected ? Variables.Colors.Primary500 : Variables.Colors.White};
    color: ${({ $isSelected }) =>
        $isSelected ? Variables.Colors.White : Variables.Colors.Black};
    transition: ${Variables.Transitions.Short};
    height: 40px;
    line-height: 40px;
    display: block;

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }
`

export { StyledSelect, Selected, List, Item }
