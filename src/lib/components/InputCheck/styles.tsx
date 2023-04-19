/*=============================================== InputCheck styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Breakpoints,
    FontSizes,
    FontWeights,
    Mixins,
    Radiuses,
    Spacers,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledInputCheck = styled.div``

const Tile = css`
    background-color: ${({ theme }) => theme.Background};
    border-radius: ${Radiuses.M};
    border: 1px solid ${({ theme }) => theme.Gray200};
    padding: ${Spacers.S};
    width: 100%;
    transition: ${Transitions.Short};

    @media ${Breakpoints.Hover} {
        &:hover {
            border-color: ${({ theme }) => theme.Primary300};
        }

        &.disabled:hover {
            border-color: ${({ theme }) => theme.Gray200};
        }

        &[data-validation="not-passed"]:hover {
            border-color: ${({ theme }) => theme.Danger300};
        }
    }
`

const Common = css`
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $gap: "xxs",
        $justifyContent: "flex-start",
    })};
    position: relative;
    font-size: ${FontSizes.Body};
    color: ${({ theme }) => theme.Font};
    font-weight: ${FontWeights.Regular};
`

const RADIO_SIZE = 16
const RADIO_DOT_SIZE = 8

const Radio = styled.label`
    ${Common};

    &:before {
        content: "";
        width: ${RADIO_SIZE}px;
        height: ${RADIO_SIZE}px;
        display: block;
        border-radius: ${Radiuses.Circle};
        border: 2px solid ${({ theme }) => theme.Primary500};
    }

    &:after {
        content: "";
        position: absolute;
        left: 4px;
        top: 8px;
        width: ${RADIO_DOT_SIZE}px;
        height: ${RADIO_DOT_SIZE}px;
        background-color: transparent;
        border-radius: ${Radiuses.Circle};
        transition: ${Transitions.Short};
    }

    &[data-validation="not-passed"]:before {
        border-color: ${({ theme }) => theme.Danger500};
    }

    &[data-variant="tile"] {
        ${Tile};

        &:after {
            top: 20px;
            left: 16px;
        }
    }
`

const CHECKBOX_SIZE = 16

const Checkbox = styled.label`
    ${Common};

    &:before {
        content: "";
        $size: 16px;
        width: ${CHECKBOX_SIZE}px;
        height: ${CHECKBOX_SIZE}px;
        border: 2px solid ${({ theme }) => theme.Primary500};
        border-radius: ${Radiuses.S};
        transition: ${Transitions.Short};
    }

    &:after {
        ${({ theme }) =>
            theme.LibIcon({
                $icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.707L18.293 7.293L10 15.586Z' fill='currentColor'/%3E%3C/svg%3E",
                $color: "background",
                $size: 12,
            })};
        ${Mixins.Flexbox({
            $inline: true,
            $alignItems: "center",
            $justifyContent: "center",
        })};
        position: absolute;
        left: 2px;
        top: 6px;
        opacity: 0;
    }

    &[data-validation="not-passed"]:before {
        border-color: ${({ theme }) => theme.Danger500};
    }

    &[data-variant="tile"] {
        ${Tile};

        &:after {
            left: 14px;
            top: 18px;
        }
    }
`

const TOGGLE_DOT_SIZE = 8

const Toggle = styled.label`
    ${Common};

    &:before {
        content: "";
        width: 24px;
        height: 16px;
        border-radius: ${Radiuses.Round};
        border: 2px solid ${({ theme }) => theme.Primary500};
        transition: ${Transitions.Short};
    }

    &:after {
        content: "";
        width: ${TOGGLE_DOT_SIZE}px;
        height: ${TOGGLE_DOT_SIZE}px;
        border-radius: ${Radiuses.Circle};
        position: absolute;
        background-color: ${({ theme }) => theme.Primary500};
        top: 8px;
        left: 4px;
        transition: ${Transitions.Short};
    }

    &[data-validation="not-passed"] {
        &:before {
            border-color: ${({ theme }) => theme.Danger500};
        }

        &:after {
            background-color: ${({ theme }) => theme.Danger500};
        }
    }
`

const Selector = styled.label`
    padding: ${Spacers.XXS} ${Spacers.M};
    border-radius: ${Radiuses.Round};
    transition: ${Transitions.Short};
    background-color: ${({ theme }) => theme.Gray100};
    color: ${({ theme }) => theme.Font};

    &[data-validation="not-passed"] {
        background-color: ${({ theme }) => theme.Danger50};
        color: ${({ theme }) => theme.Danger500};
    }

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "primary" })};
            color: ${({ theme }) => theme.Background};
        }

        &:active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "primary" })};
        }

        &[data-validation="not-passed"] {
            &:hover {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "danger" })};
                color: ${({ theme }) => theme.Background};
            }

            &:active {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverActive({ $color: "danger" })};
            }
        }
    }
`

const TileCheckedColors = css`
    border-color: ${({ theme }) =>
        theme.ColorsHoverDefault({ $color: "primary" })};

    &:hover {
        border-color: ${({ theme }) =>
            theme.ColorsHoverHover({ $color: "primary" })};
    }

    &:active {
        border-color: ${({ theme }) =>
            theme.ColorsHoverActive({ $color: "primary" })};
    }

    &[data-validation="not-passed"] {
        border-color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "danger" })};

        &:hover {
            border-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "danger" })};
        }

        &:active {
            border-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "danger" })};
        }
    }
`

const Input = styled.input`
    display: none;

    & ~ label {
        cursor: pointer;
    }

    &:disabled ~ label {
        color: ${({ theme }) => theme.Gray500};
        cursor: not-allowed;
    }

    &:checked {
        & ~ ${Radio} {
            &:after {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverDefault({ $color: "primary" })};
            }

            &[data-validation="not-passed"]:after {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverDefault({ $color: "danger" })};
            }

            &[data-variant="tile"] {
                ${TileCheckedColors}
            }
        }

        & ~ ${Checkbox} {
            &:before {
                background-color: ${({ theme }) => theme.Primary500};
            }

            &:after {
                opacity: 1;
            }

            &[data-validation="not-passed"]:before {
                background-color: ${({ theme }) => theme.Danger500};
            }

            &[data-variant="tile"] {
                ${TileCheckedColors}
            }
        }

        & ~ ${Toggle} {
            &:before {
                border-color: ${({ theme }) => theme.Success500};
                background-color: ${({ theme }) => theme.Success500};
            }

            &:after {
                background-color: ${({ theme }) => theme.Background};
                left: 12px;
            }

            &[data-validation="not-passed"] {
                &:before {
                    border-color: ${({ theme }) => theme.Danger500};
                    background-color: ${({ theme }) => theme.Danger500};
                }
            }
        }

        & ~ ${Selector} {
            background-color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "primary" })};
            color: ${({ theme }) => theme.Background};

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

            &[data-validation="not-passed"] {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverDefault({ $color: "danger" })};

                @media ${Breakpoints.Hover} {
                    &:hover {
                        background-color: ${({ theme }) =>
                            theme.ColorsHoverHover({ $color: "danger" })};
                    }

                    &:active {
                        background-color: ${({ theme }) =>
                            theme.ColorsHoverActive({ $color: "danger" })};
                    }
                }
            }
        }
    }

    &:disabled {
        & ~ ${Radio}:before {
            border-color: ${({ theme }) => theme.Gray500};
        }

        & ~ ${Checkbox}:before {
            border-color: ${({ theme }) => theme.Gray500};
        }

        & ~ ${Toggle},
        & ~ ${Toggle}[data-validation="not-passed"] {
            &:before {
                border-color: ${({ theme }) => theme.Gray500};
            }

            &:after {
                background-color: ${({ theme }) => theme.Gray500};
            }
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

        & ~ ${Radio}[data-variant="tile"],
        & ~ ${Checkbox}[data-variant="tile"] {
            border-color: ${({ theme }) => theme.Gray200};

            &[data-validation="not-passed"] {
                border-color: ${({ theme }) => theme.Gray200};
            }
        }

        &:checked {
            & ~ ${Radio}:after {
                background-color: ${({ theme }) => theme.Gray500};
            }

            & ~ ${Checkbox}:before {
                background-color: ${({ theme }) => theme.Gray500};
            }

            & ~ ${Toggle},
            & ~ ${Toggle}[data-validation="not-passed"] {
                &:before {
                    border-color: ${({ theme }) => theme.Gray100};
                    background-color: ${({ theme }) => theme.Gray100};
                }
            }

            & ~ ${Selector} {
                background-color: ${({ theme }) => theme.Gray100};

                &[data-validation="not-passed"] {
                    background-color: ${({ theme }) => theme.Gray100};
                }
            }

            & ~ ${Radio}[data-variant="tile"],
            & ~ ${Checkbox}[data-variant="tile"] {
                border-color: ${({ theme }) => theme.Gray500};

                &[data-validation="not-passed"] {
                    border-color: ${({ theme }) => theme.Gray500};
                }
            }
        }
    }
`

setDefaultTheme([StyledInputCheck, Radio, Checkbox, Toggle, Selector, Input])

export { StyledInputCheck, Radio, Checkbox, Toggle, Selector, Input }
