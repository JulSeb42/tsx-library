/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, FontSizes, Mixins, Radiuses, Spacers } from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const ButtonBase = styled.button`
    border: 1px solid transparent;
    text-decoration: none;
    font-size: ${FontSizes.Body};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
        $padding: {
            topBottom: "xs",
            leftRight: "s",
        },
    })};
    border-radius: ${Radiuses.M};

    &[data-size="small"] {
        font-size: ${FontSizes.Small};
        padding: ${Spacers.XXS} ${Spacers.XS};
    }
`

const StyledButton = styled(ButtonBase)<{
    $color?: ColorsHoverTypes
}>`
    &[data-variant="plain"] {
        background-color: ${({ theme, $color }) =>
            theme.ColorsHoverDefault({ $color })};
        color: ${({ $color, theme }) =>
            $color === "white"
                ? theme.Primary500
                : $color === "background"
                ? theme.Font
                : theme.Background};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:not(:disabled):active {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &:disabled {
            background-color: ${({ theme }) => theme.Gray100};
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &[data-variant="transparent"] {
        background-color: transparent;
        color: ${({ $color, theme }) => theme.ColorsHoverDefault({ $color })};

        &.no-padding {
            padding: 0;
        }

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                color: ${({ $color, theme }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:not(:disabled):active {
                color: ${({ $color, theme }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &:disabled {
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &[data-variant="ghost"] {
        background-color: ${({ theme, $color }) =>
            theme.ColorsGhostDefault({ $color })};
        color: ${({ $color, theme }) =>
            $color === "white" || $color === "background"
                ? theme.Primary500
                : $color === "font"
                ? theme.Background
                : theme.ColorsHoverDefault({ $color })};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsGhostHover({ $color })};
            }

            &:not(:disabled):active {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsGhostActive({ $color })};
            }
        }

        &:disabled {
            background-color: ${({ theme }) => theme.Gray50};
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &[data-variant="outline"] {
        background-color: transparent;
        border-color: ${({ $color, theme }) =>
            theme.ColorsHoverDefault({ $color })};
        color: ${({ $color, theme }) => theme.ColorsHoverDefault({ $color })};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                border-color: ${({ $color, theme }) =>
                    theme.ColorsHoverHover({ $color })};
                color: ${({ $color, theme }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:not(:disabled):active {
                border-color: ${({ $color, theme }) =>
                    theme.ColorsHoverActive({ $color })};
                color: ${({ $color, theme }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &:disabled {
            color: ${({ theme }) => theme.Gray500};
            border-color: ${({ theme }) => theme.Gray500};
        }
    }
`

setDefaultTheme([StyledButton])

export { StyledButton }
