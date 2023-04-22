/*=============================================== Input styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    FontSizes,
    LineHeights,
    Radiuses,
    Spacers,
    Transitions,
} from "../../"
import { InputBaseMixin } from "../InputComponents"
import { CONSTANT_VALUES } from "../InputComponents/styles"

import { setDefaultTheme } from "../../utils"

const StyledInputContent = styled.div`
    width: 100%;
    position: relative;
    height: fit-content;
    display: inline-block;
    height: ${CONSTANT_VALUES.InputHeight}px;
`

const TEXTAREA_MIN_HEIGHT = `calc(${FontSizes.Body} * ${LineHeights.Regular} * 4 + ${Spacers.XXS} * 2)`

const StyledInput = styled.input`
    ${InputBaseMixin};

    &[data-type="file"],
    &[data-type="color"] {
        cursor: pointer;
    }

    &[data-type="color"] {
        padding: ${Spacers.XS};
        overflow: hidden;

        &::-webkit-color-swatch-wrapper {
            padding: 0;
            margin: 0;
            width: 100%;
            border-radius: ${Radiuses.S};
        }

        &::-webkit-color-swatch {
            padding: 0;
            margin: 0;
            width: 100%;
            border-radius: ${Radiuses.S};
        }

        &[data-variant="pill"] {
            &::-webkit-color-swatch-wrapper {
                border-radius: ${Radiuses.Round};
            }

            &::-webkit-color-swatch {
                border-radius: ${Radiuses.Round};
            }
        }
    }

    &[data-type="search"] {
        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            appearance: none;
        }
    }

    &[data-type="file"] {
        padding: 0;

        &::file-selector-button {
            height: 100%;
            background-color: ${({ theme }) => theme.Gray100};
            color: ${({ theme }) => theme.Font};
            border: none;
            height: 100%;
            padding: 0 ${Spacers.XS};
            line-height: 100%;
            transition: ${Transitions.Short};
            cursor: pointer;
        }

        @media ${Breakpoints.Hover} {
            &:hover::file-selector-button {
                background-color: ${({ theme }) => theme.Gray300};
            }

            &:disabled:hover::file-selector-button {
                background-color: ${({ theme }) => theme.Gray100};
                color: ${({ theme }) => theme.Gray500};
                cursor: not-allowed;
            }
        }

        &:disabled::file-selector-button {
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &[data-type="date"],
    &[data-type="datetime-local"],
    &[data-type="month"],
    &[data-type="week"],
    &[data-type="time"] {
        cursor: pointer;

        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator {
            -webkit-appearance: none !important;
            appearance: none !important;
            background: rgba(0, 0, 0, 0);
            position: relative;
            transform: translateX(1px);
            transition: ${Transitions.Short};

            &[data-validation="not-passed"] {
                right: 24px;
            }
        }
    }

    &[data-type="select"] {
        appearance: none;
        cursor: pointer;

        &::-ms-expand {
            display: none;
        }

        &.disabled {
            cursor: not-allowed;
        }
    }

    &[data-type="textarea"] {
        height: inherit;
        min-height: ${TEXTAREA_MIN_HEIGHT};
        resize: vertical;
        padding-top: ${Spacers.XS};
        padding-bottom: ${Spacers.XS};
    }
`

setDefaultTheme([StyledInput, StyledInputContent])

export { StyledInput, StyledInputContent }
