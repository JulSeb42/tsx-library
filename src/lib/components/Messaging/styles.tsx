/*=============================================== Messaging styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    ButtonIcon,
    FontFamilies,
    FontSizes,
    LineHeights,
    Linkify,
    Mixins,
    Radiuses,
    Spacers,
    Text,
} from "../.."

import { setDefaultTheme } from "../../utils"

const VAR_INPUT_HEIGHT = "var(--input-height, 24px)"

const StyledMessaging = styled.div`
    border: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.L};
    min-height: 400px;
    max-height: 60vh;
    padding: ${Spacers.S};
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "xs",
    })};
`

const EmptyContainer = styled.div`
    width: 100%;
    height: 40vh;
    flex-grow: 1;
    color: ${({ theme }) => theme.Gray500};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const MessagesContainer = styled.div`
    overflow-y: scroll;
    scroll-behavior: smooth;
    flex-grow: 1;
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "s",
    })}
    ${Mixins.HideScrollbar}
`

const InputContainer = styled.form`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}
`

const Input = styled.textarea`
    flex-grow: 1;
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    line-height: ${LineHeights.Regular};
    resize: none;
    border: none;
    color: ${({ theme }) => theme.Font};
    background-color: transparent;
    height: ${VAR_INPUT_HEIGHT};
    max-height: calc(24px * 3);
    padding: ${Spacers.XXS} ${Spacers.XS};
    outline: none;
    border-radius: ${Radiuses.S};

    &::placeholder {
        color: ${({ theme }) => theme.Gray200};
    }

    &:focus {
        background-color: ${({ theme }) => theme.Primary50};
    }
`

const StyledMessage = styled(Linkify)`
    padding: ${Spacers.XS};
    border-radius: ${Radiuses.S};
    width: fit-content;
    max-width: 70%;

    &[data-message-type="sent"] {
        background-color: ${({ theme }) => theme.Primary500};
        color: ${({ theme }) => theme.Background};

        & > * {
            color: ${({ theme }) => theme.Background};
        }

        a {
            color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "background" })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme }) =>
                        theme.ColorsHoverHover({ $color: "background" })};
                }

                &:active {
                    color: ${({ theme }) =>
                        theme.ColorsHoverActive({ $color: "background" })};
                }
            }
        }
    }

    &[data-message-type="received"] {
        background-color: ${({ theme }) => theme.Gray100};
        color: ${({ theme }) => theme.Font};

        & > * {
            color: ${({ theme }) => theme.Font};
        }

        a {
            color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "primary" })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme }) =>
                        theme.ColorsHoverHover({ $color: "primary" })};
                }

                &:active {
                    color: ${({ theme }) =>
                        theme.ColorsHoverActive({ $color: "primary" })};
                }
            }
        }
    }
`

const Bottom = styled.div`
    width: 100%;
    height: 0;
`

const ScrollButton = styled(ButtonIcon)`
    position: absolute;
    bottom: calc(
        ${VAR_INPUT_HEIGHT} + ${Spacers.XXS} + ${Spacers.S} +
            (${Spacers.XS} * 2)
    );
    right: ${Spacers.XXS};
    opacity: 0;
    visibility: hidden;

    &.visible {
        opacity: 1;
        visibility: visible;
    }
`

const DateTime = styled(Text).attrs({ tag: "small" })`
    color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    StyledMessage,
    Bottom,
    ScrollButton,
    DateTime,
])

export {
    StyledMessaging,
    EmptyContainer,
    MessagesContainer,
    InputContainer,
    Input,
    StyledMessage,
    Bottom,
    ScrollButton,
    DateTime,
}
