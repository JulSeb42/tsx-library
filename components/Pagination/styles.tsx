/*=============================================== Pagination styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { JustifyTypes } from "./types"

const StyledPagination = styled.div<{ $justify?: JustifyTypes }>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent:
                $justify === "center"
                    ? "center"
                    : $justify === "right"
                    ? "flex-end"
                    : "flex-start",
            $gap: "xs",
        })};
`

const Button = styled.button<{ $isActive?: boolean; $more?: boolean }>`
    --button-size: 32px;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.White : Variables.Colors.Primary500};
    background-color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.Primary500 : "transparent"};
    text-decoration: none;

    ${({ $more, disabled }) =>
        !$more &&
        !disabled &&
        css`
            transition: ${Variables.Transitions.Short};

            @media ${Variables.Breakpoints.Hover} {
                &:hover {
                    background-color: ${Variables.Colors.Primary300};
                    color: ${Variables.Colors.White};
                }

                &:active {
                    background-color: ${Variables.Colors.Primary600};
                }
            }
        `}

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }

    @media ${Variables.Breakpoints.Mobile} {
        --button-size: 24px;
    }
`

export { StyledPagination, Button }
