/*=============================================== Stepper styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    FontSizes,
    FontWeights,
    Breakpoints,
    Transitions,
    Mixins,
    Text,
} from "../../"
import type { ColorsHoverTypes } from "../../types"
import type { StepperDirectionType } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledStepper = styled.div<{
    $direction?: StepperDirectionType
    $accentColor?: ColorsHoverTypes
}>`
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
        background-color: ${({ $accentColor, theme }) =>
            theme.AllColors({ $color: $accentColor })};
        z-index: 0;
    }
`

const Item = styled.span<{
    $direction?: StepperDirectionType
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

const Number = styled.span<{
    $isActive?: boolean
    $accentColor?: ColorsHoverTypes
}>`
    width: ${numberSize}px;
    height: ${numberSize}px;
    border-radius: ${Radiuses.Circle};
    background-color: ${({ $isActive, $accentColor, theme }) =>
        $isActive
            ? theme.ColorsHoverDefault({ $color: $accentColor })
            : theme.ColorsHoverHover({ $color: $accentColor })};
    color: ${({ $accentColor, theme }) =>
        $accentColor === "white" ? theme.Primary500 : theme.Background};
    outline: 2px solid ${({ theme }) => theme.Background};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    font-weight: ${FontWeights.Black};
`

const StyledText = styled(Text).attrs({
    tag: "small",
})<{
    $isLink?: boolean
    $accentColor?: ColorsHoverTypes
}>`
    font-size: ${FontSizes.Small};
    text-decoration: none;
    color: ${({ theme }) => theme.Font};

    ${({ $isLink, $accentColor, theme }) =>
        $isLink &&
        css`
            transition: ${Transitions.Short};
            color: ${theme.ColorsHoverDefault({ $color: $accentColor })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${theme.ColorsHoverHover({
                        $color: $accentColor,
                    })};
                }

                &:active {
                    color: ${theme.ColorsHoverActive({
                        $color: $accentColor,
                    })};
                }
            }
        `}
`

setDefaultTheme([StyledStepper, Item, Number, StyledText])

export { StyledStepper, Item, Number, StyledText }
