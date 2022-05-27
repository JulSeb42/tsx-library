// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import Grid from "../Grid"
import * as Mixins from "../Mixins"
import * as Font from "../Font"

import { styleProps } from "./types"

const Container = styled(Grid)`
    gap: ${Variables.Spacers.XXS};
`

const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`

const Helper = styled(Font.P)`
    position: relative;
    z-index: 0;
`

const InputContainer = styled.div<{ index?: number }>`
    position: relative;
    z-index: ${({ index }) => index};
`

const IconContainer = styled.span<{ disabled?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    height: 100%;
    width: 32px;
    color: ${({ disabled }) =>
        disabled ? Variables.Colors.Gray800 : Variables.Colors.Primary500};

    &:after {
        content: "";
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(100% - 2px);
        width: 1px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const Input = styled.input<styleProps>`
    position: relative;
    z-index: 1;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    outline: none;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    height: 35px;
    width: 100%;

    &:focus {
        border-color: ${Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        color: ${Variables.Colors.Gray800};
        border-color: ${Variables.Colors.Gray200};
        background-color: ${Variables.Colors.Gray50};
    }

    ${({ icon }) =>
        icon &&
        css`
            padding-left: calc(${Variables.Spacers.XS} + 32px);
        `}
`

const List = styled.ul<{ isOpen: boolean }>`
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    z-index: 0;
    background-color: ${Variables.Colors.White};
    width: 100%;
    top: 0;
    border-radius: ${Variables.Radiuses.S};
    border: 1px solid ${Variables.Colors.Primary500};
    max-height: ${({ isOpen }) => (isOpen ? "200px" : 0)};
    transition: ${Variables.Transitions.Long};
    overflow: hidden;
    padding-top: ${({ isOpen }) => (isOpen ? "28px" : 0)};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    overflow-y: scroll;

    li {
        padding: ${Variables.Spacers.XS};
        transition: ${Variables.Transitions.Short};

        &:hover {
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};
            cursor: pointer;
        }
    }
`

export { Container, Label, Helper, InputContainer, IconContainer, Input, List }
