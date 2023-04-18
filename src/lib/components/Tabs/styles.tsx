/*=============================================== Tabs styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins, Radiuses, Spacers, Transitions } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledTabs = styled.div`
    ${Mixins.Flexbox({
        $gap: "m",
        $flexDirection: "column",
    })};
`

const ButtonsContainer = styled.div`
    position: relative;

    &.basic {
        &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: ${({ theme }) => theme.Gray200};
            z-index: 0;
        }
    }

    &.rounded {
        background-color: ${({ theme }) => theme.Gray50};
        border-radius: ${Radiuses.M};
        padding: ${Spacers.XS};
    }

    &[data-justify="start"] {
        ${Mixins.Flexbox({
            $alignItems: "center",
            $gap: "xs",
            $flexWrap: "wrap",
            $inline: true,
        })};

        @media ${Breakpoints.Mobile} {
            flex-direction: column;
        }

        &.basic {
            width: 100%;
        }

        &.rounded {
            width: fit-content;
        }
    }

    &[data-justify="stretch"] {
        ${Mixins.Grid({
            $gap: "xs",
        })};
        grid-template-columns: repeat(var(--col-number), 1fr);

        @media ${Breakpoints.Mobile} {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

const Button = styled.button`
    border: none;
    padding: 0;
    background-color: transparent;

    &.basic {
        min-width: 100px;
        text-align: left;
        padding-bottom: ${Spacers.XXS};
        border-bottom: 2px solid transparent;
        z-index: 2;
        color: ${({ theme }) => theme.Font};

        @media ${Breakpoints.Mobile} {
            width: 100%;
        }

        &.active {
            border-bottom-color: ${({ theme }) => theme.Primary500};
        }
    }

    &.rounded {
        border-radius: ${Radiuses.S};
        padding: ${Spacers.XXS};
        color: ${({ theme }) => theme.Font};
        transition: ${Transitions.Short};

        @media ${Breakpoints.Hover} {
            &:hover {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "primary" })};
                color: ${({ theme }) => theme.White};
            }

            &:active {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverActive({ $color: "primary" })};
            }
        }

        &.active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "primary" })};
            color: ${({ theme }) => theme.Background};
        }

        &[data-justify="start"] {
            min-width: 100px;
        }
    }
`

const TabItem = styled.div`
    display: none;

    &.active {
        ${Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
        })};
    }
`

setDefaultTheme([StyledTabs, ButtonsContainer, Button, TabItem])

export { StyledTabs, ButtonsContainer, Button, TabItem }
