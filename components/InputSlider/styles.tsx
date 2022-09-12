/*=============================================== InputSlider styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Breakpoints,
    Radiuses,
    Transitions,
    ThemeDark,
    Overlays,
} from "../../Variables"
import Text from "../Text"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    AllColorsTypes,
    ColorsHoverTypes,
    ValidationTypes,
} from "../../utils/common-types"

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
`

const circleSize = 16

const StyledInputSlider = styled.input.attrs({ type: "range" })<{
    $accentColor?: ColorsHoverTypes
    $backgroundColor?: AllColorsTypes
    $rangeWidth?: number
    $validation?: ValidationTypes
}>`
    width: 100%;
    -webkit-appearance: none;
    background: ${({ $backgroundColor, $validation, theme }) =>
        $validation === "not-passed"
            ? theme.Danger50
            : theme.AllColors({ $color: $backgroundColor })};
    border-radius: ${Radiuses.Round};
    height: 8px;
    position: relative;
    -moz-appearance: initial;
    margin: 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: ${circleSize}px;
        height: ${circleSize}px;
        border-radius: ${Radiuses.Circle};
        background-color: ${({ $accentColor, $validation, theme }) =>
            $validation === "not-passed"
                ? theme.Danger500
                : theme.AllColors({ $color: $accentColor })};
        cursor: pointer;
        transition: ${Transitions.Short};
        position: relative;
        z-index: 2;

        @media ${Breakpoints.Hover} {
            &:hover {
                box-shadow: 0 0 8px 0
                    ${({ $accentColor, $validation, theme }) =>
                        $validation === "not-passed"
                            ? theme.Danger500
                            : theme.AllColors({ $color: $accentColor })};
            }
        }
    }

    &::-moz-range-thumb {
        background-color: ${({ $accentColor, $validation, theme }) =>
            $validation === "not-passed"
                ? theme.Danger500
                : theme.AllColors({ $color: $accentColor })};
        border: none;
        cursor: pointer;
    }

    &:before,
    &::before {
        content: "";
        position: absolute;
        top: 0;
        background-color: ${({ $accentColor, $validation, theme }) =>
            $validation === "not-passed"
                ? theme.Danger500
                : theme.AllColors({ $color: $accentColor })};
        height: 8px;
        width: ${({ $rangeWidth }) => $rangeWidth}%;
        border-radius: ${Radiuses.Round} 0 0 ${Radiuses.Round};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.Gray50};

        &::-webkit-slider-thumb {
            cursor: not-allowed;
            background-color: ${({ theme }) => theme.Gray500};

            &:hover {
                box-shadow: none;
            }
        }

        &::-moz-range-thumb {
            cursor: not-allowed;
            background-color: ${({ theme }) => theme.Gray500};

            &:hover {
                box-shadow: none;
            }
        }

        &:before,
        &::before {
            background-color: ${({ theme }) => theme.Gray500};
        }
    }
`

const getLeft = ($position: number) => css`
    left: calc(${$position}% + (${-8 - $position * 0.15}px));
`

const Value = styled(Text).attrs({ tag: "small" })<{
    $background?: AllColorsTypes | "overlay-black" | "overlay-white"
    $textColor?: AllColorsTypes
    $position: number
    $isVisible?: boolean
}>`
    background-color: ${({ $background, theme }) =>
        $background
            ? $background === "overlay-black"
                ? Overlays.Plain.Black80
                : $background === "overlay-white"
                ? Overlays.Plain.White80
                : theme.AllColors({ $color: $background })
            : theme === ThemeDark
            ? Overlays.Plain.White80
            : Overlays.Plain.Black80};
    color: ${({ $textColor, theme, $background }) =>
        $background === "overlay-white"
            ? theme.Black
            : $background === "overlay-black"
            ? theme.White
            : theme.AllColors({ $color: $textColor || "white" })};
    position: absolute;
    width: 32px;
    text-align: center;
    border-radius: ${Radiuses.S};
    top: -28px;
    ${({ $position }) => getLeft($position)};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity 0.2s ease;
`

setDefaultTheme([SliderContainer, StyledInputSlider, Value])

export { SliderContainer, StyledInputSlider, Value }
