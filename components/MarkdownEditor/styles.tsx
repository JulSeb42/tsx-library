/*=============================================== MarkdownEditor styles ===============================================*/

import styled from "styled-components"
import Markdown from "markdown-to-jsx"

import {
    FontFamilies,
    FontSizes,
    Flexbox,
    Mixins,
    Radiuses,
    Spacers,
    ThemeDark,
    ThemeLight,
    LineHeights,
    Transitions,
    Breakpoints,
    ButtonIcon,
} from "../../"
import type { ColorsHoverTypes } from "../../types"
import type { InputBackgroundTypes } from "../InputComponents/types"

import { getFontSizeButton } from "./buttons"
import type { titleNames } from "./buttons"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledMarkdownEditor = styled.div<{
    $isFocused: boolean
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: InputBackgroundTypes
}>`
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    border: 1px solid
        ${({ theme, $isFocused, $accentColor }) =>
            $isFocused
                ? theme.AllColors({ $color: $accentColor })
                : theme.Gray200};
    border-radius: ${Radiuses.M};
    height: fit-content;
    background-color: ${({ theme, $backgroundColor }) =>
        $backgroundColor === "dark"
            ? ThemeDark.Background
            : $backgroundColor === "light"
            ? ThemeLight.Background
            : theme.Background};
    color: ${({ theme, $backgroundColor }) =>
        $backgroundColor === "dark"
            ? ThemeDark.Font
            : $backgroundColor === "light"
            ? ThemeLight.Font
            : theme.Font};
`

const ButtonsContainer = styled(Flexbox)`
    background-color: ${({ theme }) => theme.Gray50};
    border-radius: ${Radiuses.M} ${Radiuses.M} 0 0;
`

const TitlesDropdownContainer = styled.div`
    position: relative;
`

export const TitlesDropdown = styled.div<{
    $isOpen: boolean
    $backgroundColor?: InputBackgroundTypes
}>`
    position: absolute;
    width: fit-content;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    background-color: ${({ theme }) => theme.Gray50};
    border-radius: 0 0 ${Radiuses.M} ${Radiuses.M};
    overflow: hidden;
    top: calc(24px + ${Spacers.XS});
    max-height: ${({ $isOpen }) => ($isOpen ? "180px" : 0)};
    transition: ${Transitions.Bezier};
`

const TitleButton = styled.button<{
    $tag: keyof typeof titleNames
    $accentColor?: ColorsHoverTypes
}>`
    padding: 0;
    border: none;
    text-align: left;
    min-width: 100px;
    font-size: ${({ $tag }) => getFontSizeButton($tag)}px;
    line-height: ${LineHeights.Regular};
    background-color: transparent;
    color: ${({ theme, $accentColor }) =>
        theme.ColorsHoverDefault({ $color: $accentColor })};
    padding: ${Spacers.XXS};
    transition: ${Transitions.Short};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme, $accentColor }) =>
                theme.ColorsHoverHover({ $color: $accentColor })};
            color: ${({ theme }) => theme.Background};
        }

        &:active {
            background-color: ${({ theme, $accentColor }) =>
                theme.ColorsHoverActive({ $color: $accentColor })};
        }
    }
`

const IconButton = styled(ButtonIcon)<{ $isVisible?: boolean }>`
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
`

const ContainerGrid = styled.div<{ $col?: 1 | 3 }>`
    display: grid;
    grid-template-columns: ${({ $col }) =>
        $col === 3 ? "1fr 2px 1fr" : "1fr"};
    gap: ${Spacers.XS};
    flex-grow: 1;
`

const Separator = styled.span`
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.Gray200};
`

const Input = styled.textarea<{ $isVisible?: boolean; $height: number }>`
    font-family: ${FontFamilies.Body};
    font-size: ${FontSizes.Body};
    width: 100%;
    border: none;
    resize: none;
    border-radius: 0 0 0 ${Radiuses.M};
    background-color: transparent;
    outline: none;
    height: 100%;
    display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
    padding: ${Spacers.XS};
    height: ${({ $height }) => $height}px;
    min-height: 250px;
    color: currentColor;
`

const MarkdownContainer = styled(Markdown)<{
    $isVisible?: boolean
    $height: number
}>`
    height: ${({ $height }) => $height}px;
    min-height: 250px;
    border-radius: 0 0 ${Radiuses.M} 0;
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
    flex-direction: column;
    gap: ${Spacers.S};
    align-items: stretch;
    padding: ${Spacers.XS};
    overflow-y: scroll;
    color: currentColor;
`

setDefaultTheme([
    StyledMarkdownEditor,
    ButtonsContainer,
    TitlesDropdownContainer,
    TitleButton,
    ContainerGrid,
    Separator,
    Input,
    MarkdownContainer,
    IconButton,
])

export {
    StyledMarkdownEditor,
    ButtonsContainer,
    TitlesDropdownContainer,
    TitleButton,
    ContainerGrid,
    Separator,
    Input,
    MarkdownContainer,
    IconButton,
}
