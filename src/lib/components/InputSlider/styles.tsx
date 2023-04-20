/*=============================================== InputSlider styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Overlays, Radiuses, Text, Transitions } from "../../"

import { setDefaultTheme } from "../../utils"

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
`

const CIRCLE_SIZE = 16

const StyledInputSlider = styled.input.attrs({ type: "range" })`
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: initial;
    border-radius: ${Radiuses.Round};
    height: 8px;
    position: relative;
    margin: 0;
    background: ${({ theme }) => theme.Gray100};

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: ${CIRCLE_SIZE}px;
        height: ${CIRCLE_SIZE}px;
        border-radius: ${Radiuses.Circle};
        background-color: ${({ theme }) => theme.Primary500};
        cursor: pointer;
        transition: ${Transitions.Short};
        position: relative;
        z-index: 2;

        @media ${Breakpoints.Hover} {
            &:hover {
                box-shadow: 0 0 8px 0 ${({ theme }) => theme.Primary500};
            }
        }
    }

    &::-moz-range-thumb {
        background-color: ${({ theme }) => theme.Primary500};
        border: none;
        cursor: pointer;
    }

    &:before,
    &::before {
        content: "";
        position: absolute;
        top: 0;
        background-color: ${({ theme }) => theme.Primary500};
        height: 8px;
        width: var(--range-width);
        border-radius: ${Radiuses.Round} 0 0 ${Radiuses.Round};
    }

    &[data-validation="not-passed"] {
        background: ${({ theme }) => theme.Danger50};

        &::-webkit-slider-thumb {
            background-color: ${({ theme }) => theme.Danger500};

            &:hover {
                box-shadow: 0 0 8px 0 ${({ theme }) => theme.Danger500};
            }
        }

        &::-moz-range-thumb {
            background-color: ${({ theme }) => theme.Danger500};
        }

        &:before,
        &::before {
            background-color: ${({ theme }) => theme.Danger500};
        }
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

const MinMax = styled(Text).attrs({ tag: "small" })`
    color: ${({ theme }) => theme.Gray500};
`

const Value = styled(Text).attrs({ tag: "small" })`
    background-color: ${Overlays.Plain.Black80};
    color: ${({ theme }) => theme.White};
    position: absolute;
    width: 32px;
    text-align: center;
    border-radius: ${Radiuses.S};
    top: -28px;
    opacity: 0;
    transition: opacity 0.2s ease;
    left: var(--cursor-position);

    &.visible {
        opacity: 1;
    }
`

setDefaultTheme([SliderContainer, StyledInputSlider, Value, MinMax])

export { SliderContainer, StyledInputSlider, Value, MinMax }
