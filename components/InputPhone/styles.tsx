/*=============================================== InputPhone styles ===============================================*/

import styled from "styled-components"

import SearchIcon from "../../icons/SearchIcon"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"
import {
    FontFamilies,
    FontSizes,
    Spacers,
    ThemeDark,
    ThemeLight,
    Transitions,
} from "../../Variables"
import { InputBaseMixin } from "../InputComponents"

import { ColorsHoverTypes, ValidationTypes } from "../../utils/common-types"
import { InputBackgroundTypes } from "../Input/types"

const inputHeight = 32

const StyledInputPhone = styled.div<{ $isOpen: boolean; ref?: any }>`
    position: relative;
    width: 100%;
    z-index: ${({ $isOpen }) => ($isOpen ? 20 : 0)};
`

const Button = styled.button`
    height: ${inputHeight}px;
    padding: 0 ${Spacers.XS};
    border: none;
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
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

const StyledIconSearch = styled(SearchIcon)`
    position: absolute;
    left: ${Spacers.XS};
    top: calc(50% - 16px / 2);
`

const SearchContainer = styled.div`
    padding: ${Spacers.XS};
    position: relative;
`

const InputSearch = styled.input<{
    $accentColor?: ColorsHoverTypes
    $validation?: ValidationTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    font-family: ${FontFamilies.Body};
    font-size: ${FontSizes.Body};
    width: 100%;
    height: 40px;
    padding: 0 ${Spacers.XS} 0 calc(16px + ${Spacers.XS});
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: 0;
    transition: ${Transitions.Short};
    background-color: transparent;
    color: ${({ theme, $backgroundColor }) =>
        $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};

    &:focus {
        border-bottom-color: ${({ $accentColor, $validation, theme }) =>
            $validation === "not-passed"
                ? theme.Danger500
                : theme.AllColors({ $color: $accentColor })};
    }
`

const CountryCode = styled.span<{ $backgroundColor?: InputBackgroundTypes }>`
    position: absolute;
    left: 48px;
    height: ${inputHeight}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};
    z-index: 10;
    color: ${({ $backgroundColor, theme }) =>
        $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};
`

const Input = styled.input<{
    $validation?: ValidationTypes
    $codeLength: number
    $isListOpen?: boolean
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    ${({ $accentColor, $backgroundColor, $validation }) =>
        InputBaseMixin({
            $accentColor: $accentColor,
            $backgroundColor: $backgroundColor,

            $validation: $validation,
        })};
    border-color: ${({
        $accentColor,
        $isListOpen,
        $validation,
        theme,
        $backgroundColor,
    }) =>
        $isListOpen
            ? $validation === "not-passed"
                ? $backgroundColor === "dark"
                    ? ThemeDark.Danger500
                    : $backgroundColor === "light"
                    ? ThemeLight.Danger500
                    : theme.Danger500
                : theme.AllColors({ $color: $accentColor })
            : theme.Gray200};
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
`

setDefaultTheme([
    StyledInputPhone,
    Button,
    Flag,

    StyledIconSearch,
    SearchContainer,
    InputSearch,
    CountryCode,
    Input,
])

export {
    StyledInputPhone,
    Button,
    Flag,
    StyledIconSearch,
    SearchContainer,
    InputSearch,
    CountryCode,
    Input,
}
