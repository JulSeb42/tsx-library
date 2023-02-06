/*=============================================== InputCheck styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    Spacers,
    Transitions,
    Breakpoints,
    Mixins,
    FontSizes,
    FontWeights,
} from "../../"
import { ValidationTypes, ColorsHoverTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledInputCheck = styled.div``

const Tile = ({
    $validation,
    $disabled,
}: {
    $tile?: boolean
    $validation?: ValidationTypes
    $disabled?: boolean
    $iconCheck?: string
}) => css`
    background-color: ${({ theme }) => theme.Background};
    border-radius: ${Radiuses.M};
    border: 1px solid ${({ theme }) => theme.Gray200};
    padding: ${Spacers.S};
    width: 100%;
    transition: ${Transitions.Short};

    @media ${Breakpoints.Hover} {
        &:hover {
            border-color: ${({ theme }) =>
                $validation === "not-passed" && !$disabled
                    ? theme.Danger300
                    : $disabled
                    ? theme.Gray200
                    : theme.Primary300};
        }
    }
`

const Common = ({ $accentColor }: { $accentColor?: ColorsHoverTypes }) => css`
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $gap: "xxs",
        $justifyContent: "flex-start",
    })};
    position: relative;
    font-size: ${FontSizes.Body};
    color: ${({ theme }) =>
        theme
            ? theme.Font
            : $accentColor === "white"
            ? theme.White
            : theme.Black};
    font-weight: ${FontWeights.Regular};
`

const radioSize = 16
const radioDotSize = 8

const Radio = styled.label<{
    $tile?: boolean
    $validation?: ValidationTypes
    $disabled?: boolean
    $accentColor?: ColorsHoverTypes
}>`
    ${Common};

    &:before {
        content: "";
        width: ${radioSize}px;
        height: ${radioSize}px;
        border: 2px solid
            ${({ $validation, $disabled, $accentColor, theme }) =>
                $disabled
                    ? theme.Gray500
                    : $validation === "not-passed"
                    ? theme.Danger500
                    : theme.AllColors({ $color: $accentColor })};
        display: block;
        border-radius: ${Radiuses.Circle};
    }

    &:after {
        content: "";
        position: absolute;
        left: 4px;
        top: 8px;
        width: ${radioDotSize}px;
        height: ${radioDotSize}px;
        background-color: transparent;
        border-radius: ${Radiuses.Circle};
        transition: ${Transitions.Short};
    }

    ${({ $tile }) =>
        $tile &&
        css`
            ${Tile};

            &:after {
                top: 20px;
                left: 16px;
            }
        `}
`

const checkboxSize = 16

const Checkbox = styled.label<{
    $tile?: boolean
    $validation?: ValidationTypes
    $disabled?: boolean
    $iconCheck?: string
    $accentColor?: ColorsHoverTypes
}>`
    ${Common};

    &:before {
        content: "";
        $size: 16px;
        width: ${checkboxSize}px;
        height: ${checkboxSize}px;
        border: 2px solid
            ${({ $validation, $accentColor, theme }) =>
                $validation === "not-passed"
                    ? theme.Danger500
                    : theme.AllColors({ $color: $accentColor })};
        border-radius: ${Radiuses.S};
        transition: ${Transitions.Short};
    }

    &:after {
        ${({ $iconCheck, $accentColor, theme }) =>
            $iconCheck
                ? theme.Icon({
                      $name: $iconCheck,
                      $color:
                          $accentColor === "white" ? "primary" : "background",
                      $size: 8,
                  })
                : theme.LibIcon({
                      $icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.707L18.293 7.293L10 15.586Z' fill='currentColor'/%3E%3C/svg%3E",
                      $color:
                          $accentColor === "white" ? "primary" : "background",
                      $size: 12,
                  })};
        ${Mixins.Flexbox({
            $inline: true,
            $alignItems: "center",
            $justifyContent: "center",
        })};
        position: absolute;
        left: ${({ $iconCheck }) => ($iconCheck ? 4 : 2)}px;
        top: ${({ $iconCheck }) => ($iconCheck ? 8 : 6)}px;
        opacity: 0;
    }

    ${({ $tile }) =>
        $tile &&
        css`
            ${Tile};

            &:after {
                left: ${({ $iconCheck }) => ($iconCheck ? 20 : 14)}px;
                top: ${({ $iconCheck }) => ($iconCheck ? 16 : 18)}px;
            }
        `}
`

const toggleDotSize = 8

const Toggle = styled.label<{
    $validation?: ValidationTypes
    $disabled?: boolean
    $accentColor?: ColorsHoverTypes
}>`
    ${Common};

    &:before {
        content: "";
        width: 24px;
        height: 16px;
        border-radius: ${Radiuses.Round};
        border: 2px solid
            ${({ $validation, $disabled, $accentColor, theme }) =>
                $validation === "not-passed" && !$disabled
                    ? theme.Danger500
                    : $disabled
                    ? theme.Gray500
                    : theme.AllColors({ $color: $accentColor })};
        transition: ${Transitions.Short};
    }

    &:after {
        content: "";
        width: ${toggleDotSize}px;
        height: ${toggleDotSize}px;
        border-radius: ${Radiuses.Circle};
        position: absolute;
        background-color: ${({ $validation, $disabled, $accentColor, theme }) =>
            $validation === "not-passed" && !$disabled
                ? theme.Danger500
                : $disabled
                ? theme.Gray500
                : theme.AllColors({ $color: $accentColor })};
        top: 8px;
        left: 4px;
        transition: ${Transitions.Short};
    }
`

const Selector = styled.label<{
    $validation?: ValidationTypes
    $disabled?: boolean
    $accentColor?: ColorsHoverTypes
}>`
    padding: ${Spacers.XXS} ${Spacers.M};
    border-radius: ${Radiuses.Round};
    transition: ${Transitions.Short};
    background-color: ${({ $validation, theme }) =>
        $validation === "not-passed" ? theme.Danger50 : theme.Gray100};
    color: ${({ $validation, theme }) =>
        $validation === "not-passed" ? theme.Danger500 : theme.Font};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $validation, $accentColor, theme }) =>
                $validation === "not-passed"
                    ? theme.Danger300
                    : theme.ColorsHoverHover({ $color: $accentColor })};
            color: ${({ $accentColor, theme }) =>
                $accentColor === "white" ? theme.Primary500 : theme.Background};
        }

        &:active {
            background-color: ${({ $validation, $accentColor, theme }) =>
                $validation === "not-passed"
                    ? theme.Danger600
                    : theme.ColorsHoverActive({ $color: $accentColor })};
        }
    }
`

const Input = styled.input<{
    $tile?: boolean
    $validation?: ValidationTypes
    $accentColor?: ColorsHoverTypes
}>`
    display: none;

    & ~ label {
        cursor: pointer;
    }

    &:disabled ~ label {
        color: ${({ theme }) => theme.Gray500};
        cursor: not-allowed;
    }

    &:checked {
        & ~ ${Radio}:after {
            background-color: ${({ $validation, $accentColor, theme }) =>
                $validation === "not-passed"
                    ? theme.Danger500
                    : theme.AllColors({ $color: $accentColor })};
        }

        & ~ ${Checkbox} {
            &:before {
                background-color: ${({ $validation, $accentColor, theme }) =>
                    $validation === "not-passed"
                        ? theme.Danger500
                        : theme.AllColors({ $color: $accentColor })};
            }

            &:after {
                opacity: 1;
            }
        }

        & ~ ${Toggle} {
            &:before {
                border-color: ${({ $validation, disabled, theme }) =>
                    $validation === "not-passed" && !disabled
                        ? theme.Danger500
                        : disabled
                        ? theme.Gray100
                        : theme.Success500};
                background-color: ${({ $validation, disabled, theme }) =>
                    $validation === "not-passed" && !disabled
                        ? theme.Danger500
                        : disabled
                        ? theme.Gray100
                        : theme.Success500};
            }

            &:after {
                background-color: ${({ disabled, theme }) =>
                    !disabled && theme.Background};
                left: 12px;
            }
        }

        & ~ ${Selector} {
            background-color: ${({ $validation, $accentColor, theme }) =>
                $validation === "not-passed"
                    ? theme.Danger500
                    : theme.AllColors({ $color: $accentColor })};
            color: ${({ $accentColor, theme }) =>
                $accentColor === "white" ? theme.Primary500 : theme.Background};

            @media ${Breakpoints.Hover} {
                &:hover {
                    background-color: ${({
                        $validation,
                        $accentColor,
                        theme,
                    }) =>
                        $validation === "not-passed"
                            ? theme.Danger300
                            : theme.ColorsHoverHover({
                                  $color: $accentColor,
                              })};
                    color: ${({ $accentColor, theme }) =>
                        $accentColor === "white"
                            ? theme.Primary500
                            : theme.Background};
                }

                &:active {
                    background-color: ${({
                        $validation,
                        $accentColor,
                        theme,
                    }) =>
                        $validation === "not-passed"
                            ? theme.Danger300
                            : theme.ColorsHoverActive({
                                  $color: $accentColor,
                              })};
                }
            }
        }
    }

    &:disabled {
        & ~ ${Checkbox}:before {
            border-color: ${({ theme }) => theme.Gray500};
        }

        & ~ ${Selector} {
            background-color: ${({ theme }) => theme.Gray50};
            color: ${({ theme }) => theme.Gray500};

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme }) => theme.Gray500};
                }
            }
        }

        &:checked {
            & ~ ${Radio}:after {
                background-color: ${({ theme }) => theme.Gray500};
            }

            & ~ ${Checkbox}:before {
                background-color: ${({ theme }) => theme.Gray500};
            }

            & ~ ${Selector} {
                background-color: ${({ theme }) => theme.Gray100};
            }
        }
    }

    ${({ $tile, $validation, disabled, $accentColor, theme }) =>
        $tile &&
        css`
            &:checked ~ ${Radio}, &:checked ~ ${Checkbox} {
                border-color: ${$validation === "not-passed" && !disabled
                    ? theme.Danger500
                    : disabled
                    ? theme.Gray500
                    : theme.AllColors({ $color: $accentColor })};
            }

            @media ${Breakpoints.Hover} {
                &:not(:disabled)
                    ~ ${Radio}:hover,
                    &:not(:disabled)
                    ~ ${Checkbox}:hover {
                    border-color: ${$validation === "not-passed" && !disabled
                        ? theme.Danger300
                        : theme.ColorsHoverHover({ $color: $accentColor })};
                }
            }
        `}
`

setDefaultTheme([StyledInputCheck, Radio, Checkbox, Toggle, Selector, Input])

export { StyledInputCheck, Radio, Checkbox, Toggle, Selector, Input }
