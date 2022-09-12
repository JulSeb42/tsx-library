/*=============================================== Tooltip styles ===============================================*/

import styled, { css } from "styled-components"

import {
    FontWeights,
    Overlays,
    FontSizes,
    Spacers,
    Transitions,
    ThemeDark,
    Radiuses,
} from "../../Variables"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes } from "../../utils/common-types"

import { TextStylesTypes } from "./types"

const StyledTooltip = styled.span<{
    $textStyle?: TextStylesTypes
    $color?: AllColorsTypes
}>`
    display: inline;
    position: relative;
    color: ${({ theme }) => theme.AllColors};

    ${({ $textStyle }) =>
        $textStyle === "dotted" || $textStyle === "underline"
            ? css`
                  border-bottom: 1px
                      ${$textStyle === "dotted"
                          ? "dotted"
                          : $textStyle === "underline" && "solid"}
                      currentColor;
              `
            : css`
                  font-weight: ${FontWeights.Black};
              `}
`

const Tip = styled.span<{ $isVisible: boolean }>`
    width: 150px;
    background-color: ${({ theme }) =>
        theme === ThemeDark ? Overlays.Plain.White80 : Overlays.Plain.Black80};
    color: ${({ theme }) => theme.Background};
    text-align: center;
    padding: ${Spacers.XS};
    border-radius: ${Radiuses.S};
    bottom: 125%;
    left: calc(50% - 150px / 2);
    font-size: ${FontSizes.Small};
    font-weight: ${FontWeights.Regular};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    z-index: 1;
    transition: ${Transitions.Short};
    position: absolute;

    &:after {
        content: "";
        bottom: calc(${Spacers.XS} * -1 - 2px);
        left: 50%;
        margin-left: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: ${({ theme }) =>
                theme === ThemeDark
                    ? Overlays.Plain.White80
                    : Overlays.Plain.Black80}
            transparent transparent transparent;
        opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
        visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
        z-index: 1;
        transition: ${Transitions.Short};
        position: absolute;
    }
`

setDefaultTheme([StyledTooltip, Tip])

export { StyledTooltip, Tip }
