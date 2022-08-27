/*=============================================== Autocomplete styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ValidationTypes } from "../../utils/common-types"

const InputContainer = styled.div`
    position: relative;
    z-index: 10;
`

const size = 32

const StyledInput = styled.input<{
    $icon?: boolean
    $validation?: ValidationTypes | string
}>`
    width: 100%;
    height: ${size}px;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: ${Variables.Spacers.XS};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed"
            ? Variables.Colors.Danger50
            : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: 5;
    position: relative;

    &:focus {
        border-color: ${({ $validation }) =>
            $validation && $validation === "not-passed"
                ? Variables.Colors.Danger500
                : Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${Variables.Colors.Gray50};
        color: ${Variables.Colors.Gray500};

        &::placeholder {
            color: ${Variables.Colors.Gray500};
        }
    }

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }

    ${({ $icon }) =>
        $icon &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: ${size}px;
    height: ${size}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    z-index: 6;

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const List = styled.ul<{ $isOpen: boolean }>`
    position: absolute;
    top: ${({ $isOpen }) => ($isOpen ? 0 : "4px")};
    left: 0;
    background-color: ${Variables.Colors.White};
    margin: 0;
    padding: 0;
    list-style: none;
    padding-top: ${({ $isOpen }) => ($isOpen ? `${size}px` : 0)};
    width: 100%;
    z-index: 2;
    overflow-y: scroll;
    border-radius: ${Variables.Radiuses.S};
    border: 1px solid ${Variables.Colors.Primary500};
    max-height: ${({ $isOpen }) => ($isOpen ? "150px" : 0)};
    transition: ${Variables.Transitions.Short};
`

const Item = styled.li<{ $readOnly?: boolean }>`
    padding: ${Variables.Spacers.XS};

    ${({ $readOnly }) =>
        !$readOnly
            ? css`
                  cursor: pointer;
                  transition: ${Variables.Transitions.Short};

                  @media ${Variables.Breakpoints.Hover} {
                      &:hover {
                          background-color: ${Variables.Colors.Primary500};
                          color: ${Variables.Colors.White};
                      }
                  }
              `
            : css`
                  color: ${Variables.Colors.Gray500};
              `}
`

const RightContainer = styled.span<{ $disabled?: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    padding: 0 ${Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    gap: ${Variables.Spacers.XS};
    z-index: 10;

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`

export {
    InputContainer,
    StyledInput,
    IconContainer,
    List,
    Item,
    RightContainer,
}
