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
} from "../../"
import type { AllColorsTypes } from "../../types"
import type { TextStylesTypes } from "./types"

import { setDefaultTheme } from "../../utils"

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

const Tip = styled.span<{ $isVisible: boolean; $width: number }>`
    width: ${({ $width }) => $width}px;
    min-width: 60px;
    background-color: ${({ theme }) =>
        theme === ThemeDark ? Overlays.Plain.White80 : Overlays.Plain.Black80};
    color: ${({ theme }) => theme.Background};
    text-align: center;
    padding: ${Spacers.XS};
    border-radius: ${Radiuses.S};
    bottom: 125%;
    left: ${({ $width }) => `calc(50% - ${$width}px / 2)`};
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
        left: ${({ $width }) => `calc(${$width}px / 2 - 5px)`};
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
