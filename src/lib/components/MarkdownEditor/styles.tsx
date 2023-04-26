/*=============================================== MarkdownEditor styles ===============================================*/

import Markdown from "markdown-to-jsx"
import styled from "styled-components"

import {
    Breakpoints,
    ButtonIcon,
    Flexbox,
    FontFamilies,
    FontSizes,
    LineHeights,
    Mixins,
    Radiuses,
    Spacers,
    ThemeDark,
    ThemeLight,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledMarkdownEditor = styled.div`
    border-radius: ${Radiuses.M};
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.Gray200};
    background-color: ${({ theme }) => theme.Background};
    color: ${({ theme }) => theme.Font};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &.is-focused {
        border-color: ${({ theme }) => theme.Primary500};
    }

    &[data-background="light"] {
        background-color: ${ThemeLight.Background};
        color: ${ThemeLight.Font};
    }

    &[data-background="dark"] {
        background-color: ${ThemeDark.Background};
        color: ${ThemeDark.Font};
    }
`

const ButtonsContainer = styled(Flexbox)`
    background-color: ${({ theme }) => theme.Gray50};
    border-radius: ${Radiuses.M} ${Radiuses.M} 0 0;
`

const TitlesDropdownContainer = styled.div`
    position: relative;
`

const TitlesDropdown = styled.div`
    position: absolute;
    width: fit-content;
    background-color: ${({ theme }) => theme.Gray50};
    border-radius: 0 0 ${Radiuses.M} ${Radiuses.M};
    overflow: hidden;
    top: calc(24px + ${Spacers.XS});
    max-height: 0;
    transition: ${Transitions.Bezier};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &.open {
        max-height: 180px;
    }
`

const TitleButton = styled.button`
    padding: 0;
    border: none;
    text-align: left;
    min-width: 100px;
    line-height: ${LineHeights.Regular};
    background-color: transparent;
    padding: ${Spacers.XXS};
    transition: ${Transitions.Short};
    color: ${({ theme }) => theme.ColorsHoverDefault({ $color: "primary" })};
    font-size: var(--title-size);

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "primary" })};
            color: ${({ theme }) => theme.Background};
        }

        &:active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "primary" })};
        }
    }
`

const IconButton = styled(ButtonIcon)`
    display: none;
    border-radius: ${Radiuses.S};

    &.visible {
        display: flex;
    }
`

const ContainerGrid = styled.div`
    display: grid;
    gap: ${Spacers.XS};
    flex-grow: 1;

    &[data-col="1"] {
        grid-template-columns: 1fr;
    }

    &[data-col="3"] {
        grid-template-columns: 1fr 2px 1fr;
    }
`

const Separator = styled.span`
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.Gray200};
`

const Input = styled.textarea`
    font-family: ${FontFamilies.Body};
    font-size: ${FontSizes.Body};
    width: 100%;
    border: none;
    resize: none;
    border-radius: 0 0 0 ${Radiuses.M};
    background-color: transparent;
    outline: none;
    height: 100%;
    display: none;
    padding: ${Spacers.XS};
    height: var(--input-height);
    min-height: 250px;
    color: currentColor;

    &.visible {
        display: block;
    }
`

const MarkdownContainer = styled(Markdown)`
    height: var(--input-height);
    min-height: 250px;
    border-radius: 0 0 ${Radiuses.M} 0;
    display: none;
    flex-direction: column;
    gap: ${Spacers.S};
    align-items: stretch;
    padding: ${Spacers.XS};
    overflow-y: scroll;
    color: currentColor;

    &.visible {
        display: flex;
    }
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
    TitlesDropdown,
])

export {
    TitlesDropdown,
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
