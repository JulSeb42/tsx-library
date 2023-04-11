/*=============================================== Pagination styles ===============================================*/

import styled, { css } from "styled-components"

import { Radiuses, Transitions, Breakpoints, Mixins } from "../../"
import type { ColorsHoverTypes, SpacersTypes, FontSizeTypes } from "../../types"
import type { JustifyType } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledPagination = styled.div<{
    $justify?: JustifyType
    $gap?: SpacersTypes
}>`
    ${({ $justify, $gap }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent:
                $justify === "center"
                    ? "center"
                    : $justify === "right"
                    ? "flex-end"
                    : "flex-start",
            $gap,
        })};
`

const Button = styled.button<{
    $isActive?: boolean
    $more?: boolean
    $color?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $buttonSize?: number
}>`
    width: ${({ $buttonSize }) => $buttonSize}px;
    height: ${({ $buttonSize }) => $buttonSize}px;
    border-radius: ${Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    color: ${({ $isActive, $color, theme }) =>
        $isActive && $color === "white"
            ? theme.Primary500
            : $isActive
            ? theme.Background
            : theme.ColorsHoverDefault};
    background-color: ${({ $isActive, $color, theme }) =>
        $isActive ? theme.ColorsHoverDefault({ $color }) : "transparent"};
    text-decoration: none;
    cursor: ${({ $more }) => $more && "default"};

    ${({ $more, disabled, theme, $color }) =>
        !$more &&
        !disabled &&
        css`
            transition: ${Transitions.Short};

            @media ${Breakpoints.Hover} {
                &:hover {
                    background-color: ${theme.ColorsHoverHover({ $color })};
                    color: ${$color === "white"
                        ? theme.Primary500
                        : theme.Background};
                }

                &:active {
                    background-color: ${theme.ColorsHoverActive({ $color })};
                }
            }
        `}

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }

    @media ${Breakpoints.Mobile} {
        --button-size: 24px;
    }
`

setDefaultTheme([StyledPagination, Button])

export { StyledPagination, Button }
