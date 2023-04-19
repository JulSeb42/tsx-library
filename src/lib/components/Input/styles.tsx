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
        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator {
            -webkit-appearance: none !important;
            appearance: none !important;
            background: rgba(0, 0, 0, 0);
            position: relative;
            cursor: pointer;
            transform: translateX(1px);
            transition: ${Transitions.Short};
            ${({ theme }) =>
                theme.LibIcon({
                    $icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11H7V13H9V11Z' fill='currentColor'/%3E%3Cpath d='M9 15H7V17H9V15Z' fill='currentColor'/%3E%3Cpath d='M13 11H11V13H13V11Z' fill='currentColor'/%3E%3Cpath d='M13 15H11V17H13V15Z' fill='currentColor'/%3E%3Cpath d='M17 11H15V13H17V11Z' fill='currentColor'/%3E%3Cpath d='M17 15H15V17H17V15Z' fill='currentColor'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22ZM19.001 20L19 8H5V20H19.001Z' fill='currentColor'/%3E%3C/svg%3E",
                    $color: "primary",
                    $size: 16,
                })};

            &[data-validation="not-passed"] {
                right: 24px;
            }

            @media ${Breakpoints.Hover} {
                &:hover {
                    background-color: ${({ theme }) =>
                        theme.ColorsHoverHover({ $color: "primary" })};
                }

                &:active {
                    background-color: ${({ theme }) =>
                        theme.ColorsHoverActive({ $color: "primary" })};
                }
            }
        }
    }

    &[data-type="time"] {
        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator {
            ${({ theme }) =>
                theme.LibIcon({
                    $icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 13V7H13V11H17V13H11Z' fill='currentColor'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4C7.589 4 4 7.589 4 12Z' fill='currentColor'/%3E%3C/svg%3E",
                    $color: "primary",
                    $size: 16,
                })};
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
