/*=============================================== InputPhone styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import SearchIcon from "../../icons/SearchIcon"

import { ValidationTypes } from "../../utils/common-types"

const inputHeight = 32

const StyledInputPhone = styled.div<{ $isOpen: boolean }>`
    position: relative;
    width: 100%;
    z-index: ${({ $isOpen }) => ($isOpen ? 20 : 0)};
`

const Button = styled.button`
    height: ${inputHeight}px;
    padding: 0 ${Variables.Spacers.XS};
    border: none;
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};

    & > svg:first-of-type {
        width: 20px;
    }
`

const Flag = styled.img`
    width: 16px;
`

const List = styled.div<{ $isOpen?: boolean; ref?: any }>`
    width: 100%;
    position: absolute;
    left: 0;
    top: ${inputHeight}px;
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Shadows.M};
    z-index: 50;
    max-height: ${({ $isOpen }) => ($isOpen ? "200px" : 0)};
    overflow-y: scroll;
    transition: ${Variables.Transitions.Short};
    background-color: ${Variables.Colors.White};
`

const Item = styled.span<{ $isActive: boolean }>`
    padding: ${Variables.Spacers.XS};
    cursor: pointer;
    transition: ${Variables.Transitions.Short};
    background-color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.Primary500 : Variables.Colors.White};
    color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.White : Variables.Colors.Black};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};
    height: 40px;

    & > span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }

    svg {
        width: 20px;
    }
`

const StyledIconSearch = styled(SearchIcon)`
    position: absolute;
    left: ${Variables.Spacers.XS};
    top: calc(50% - 16px / 2);
`

const SearchContainer = styled.div`
    padding: ${Variables.Spacers.XS};
    position: relative;
`

const InputSearch = styled.input`
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    width: 100%;
    height: 40px;
    padding: 0 ${Variables.Spacers.XS} 0 calc(16px + ${Variables.Spacers.XS});
    border: none;
    outline: none;
    border-bottom: 1px solid ${Variables.Colors.Gray200};
    border-radius: 0;
    transition: ${Variables.Transitions.Short};

    &:focus {
        border-bottom-color: ${Variables.Colors.Primary500};
    }
`

const CountryCode = styled.span`
    position: absolute;
    left: 48px;
    height: ${inputHeight}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};
    z-index: 1;
`

const Input = styled.input<{
    $validation?: ValidationTypes | string
    $codeLength: number
}>`
    position: relative;
    width: 100%;
    height: ${inputHeight}px;
    position: relative;
    z-index: 0;
    padding-right: ${Variables.Spacers.XS};
    padding-left: calc(
        48px +
            ${({ $codeLength }) =>
                $codeLength === 3
                    ? 28
                    : $codeLength === 4
                    ? 38
                    : $codeLength === 5
                    ? 47
                    : 19}px
    );
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed"
            ? Variables.Colors.Danger50
            : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;

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
    StyledInputPhone,
    Button,
    Flag,
    List,
    Item,
    StyledIconSearch,
    SearchContainer,
    InputSearch,
    CountryCode,
    Input,
    RightContainer,
}
