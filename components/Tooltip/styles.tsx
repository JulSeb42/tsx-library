/*=============================================== Tooltip styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

import { TextStylesTypes } from "./types"

const StyledTooltip = styled.span<{
    $textStyle?: TextStylesTypes
    $color?: ColorsShortTypes | LibColorsTypes | string
}>`
    display: inline;
    position: relative;
    color: ${Mixins.AllColors};

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
                  font-weight: ${Variables.FontWeights.Black};
              `}
`

const Tip = styled.span<{ $isVisible: boolean }>`
    width: 150px;
    background-color: ${Variables.Overlays.Plain.Black80};
    color: ${Variables.Colors.White};
    text-align: center;
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.S};
    bottom: 125%;
    left: calc(50% - 150px / 2);
    font-size: ${Variables.FontSizes.Small};
    font-weight: ${Variables.FontWeights.Regular};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    z-index: 1;
    transition: ${Variables.Transitions.Short};
    position: absolute;

    &:after {
        content: "";
        bottom: calc(${Variables.Spacers.XS} * -1 - 2px);
        left: 50%;
        margin-left: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: ${Variables.Overlays.Plain.Black80} transparent
            transparent transparent;
        opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
        visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
        z-index: 1;
        transition: ${Variables.Transitions.Short};
        position: absolute;
    }
`

export { StyledTooltip, Tip }
