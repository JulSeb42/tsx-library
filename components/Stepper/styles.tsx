/*=============================================== Stepper styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import TextComponent from "../Text"

import { DirectionTypes } from "./types"

const StyledStepper = styled.div<{ $direction?: DirectionTypes }>`
    position: relative;
    ${({ $direction }) =>
        Mixins.Flexbox({
            $alignItems: "flex-start",
            $justifyContent:
                $direction === "column" ? "flex-start" : "space-between",
            $gap: $direction === "column" ? "l" : "xs",
            $flexDirection: $direction === "row" ? "row" : "column",
        })};

    &:before {
        content: "";
        width: ${({ $direction }) =>
            $direction === "row" ? "calc(100% - 24px)" : "2px"};
        height: ${({ $direction }) =>
            $direction === "row" ? "2px" : "calc(100% - 24px)"};
        position: absolute;
        left: 12px;
        top: 12px;
        background-color: ${Variables.Colors.Primary500};
        z-index: 0;
    }
`

const Item = styled.span<{
    $direction?: DirectionTypes
    $to?: string
    icon?: string
}>`
    position: relative;
    z-index: 1;
    ${({ $direction }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: $direction === "row" ? "center" : "flex-start",
            $gap: "xxs",
            $inline: true,
        })};
    flex-direction: ${({ $direction }) =>
        $direction === "row" ? "column" : "row"};
`

const numberSize = 24

const Number = styled.span<{ $isActive?: boolean }>`
    width: ${numberSize}px;
    height: ${numberSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    background-color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.Primary500 : Variables.Colors.Primary300};
    color: ${Variables.Colors.White};
    outline: 2px solid ${Variables.Colors.White};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    font-weight: ${Variables.FontWeights.Black};
`

const Text = styled(TextComponent)<{ to?: string; tag: "small" }>`
    font-size: ${Variables.FontSizes.Small};
    text-decoration: none;
    color: ${Variables.Colors.Primary500};

    ${({ to }) =>
        to &&
        css`
            transition: ${Variables.Transitions.Short};

            @media ${Variables.Breakpoints.Hover} {
                &:hover {
                    color: ${Variables.Colors.Primary300};
                }

                &:active {
                    color: ${Variables.Colors.Primary600};
                }
            }
        `}
`

export { StyledStepper, Item, Number, Text }
