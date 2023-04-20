/*=============================================== ListInputs styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Breakpoints,
    Icon,
    Mixins,
    Radiuses,
    Spacers,
    ThemeDark,
    ThemeLight,
    Transitions,
} from "../../"
import { ChevronDownIcon } from "../../icons"
import { CONSTANT_VALUES } from "../InputComponents/styles"

import { setDefaultTheme } from "../../utils"

const StyledListInputs = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 0;
    border-radius: ${Radiuses.M};
    transition: ${Transitions.Short};
    overflow-y: scroll;
    max-height: 0;
    background-color: ${({ theme }) => theme.Background};
    border: 1px solid ${({ theme }) => theme.Primary500};
    ${Mixins.HideScrollbar}

    &.open {
        max-height: ${CONSTANT_VALUES.ListItemHeight * 4 +
        CONSTANT_VALUES.InputHeight / 2}px;
    }

    &[data-direction="up"] {
        bottom: 16px;
        padding-bottom: 0;

        &.open {
            bottom: 12px;
            padding-bottom: 19px;
        }
    }

    &[data-direction="down"] {
        top: 16px;
        padding-top: 0;

        &.open {
            top: 12px;
            padding-top: 19px;
        }
    }

    &[data-validation="not-passed"] {
        background-color: ${({ theme }) => theme.Danger50};
        border-color: ${({ theme }) => theme.Danger500};
    }

    &[data-background="light"] {
        background-color: ${ThemeLight.Background};

        &[data-validation="not-passed"] {
            background-color: ${ThemeLight.Danger50};
        }
    }

    &[data-background="dark"] {
        background-color: ${ThemeDark.Background};

        &[data-validation="not-passed"] {
            background-color: ${ThemeDark.Danger50};
        }
    }
`

const Item = styled.span`
    padding: 0 ${Spacers.XS};
    background-color: transparent;
    color: ${({ theme }) => theme.Font};
    transition: ${Transitions.Short};
    height: 40px;
    line-height: 40px;
    display: block;

    &.read-only {
        color: ${({ theme }) => theme.Gray500};
    }

    &.active {
        background-color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
        color: ${({ theme }) => theme.Background};

        &[data-validation="not-passed"] {
            background-color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "danger" })};
        }
    }

    &:not(.read-only) {
        cursor: pointer;
        transition: ${Transitions.Short};

        @media ${Breakpoints.Hover} {
            &:hover {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverHover({
                        $color: "primary",
                    })};
                color: ${({ theme }) => theme.Background};
            }

            &:active {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverActive({
                        $color: "primary",
                    })};
            }

            &[data-validation="not-passed"] {
                &:hover {
                    background-color: ${({ theme }) =>
                        theme.ColorsHoverHover({
                            $color: "danger",
                        })};
                }

                &:active {
                    background-color: ${({ theme }) =>
                        theme.ColorsHoverActive({
                            $color: "danger",
                        })};
                }
            }
        }
    }

    &[data-background="light"] {
        color: ${ThemeLight.Font};

        &.read-only {
            color: ${ThemeLight.Gray500};
        }

        &.active {
            color: ${ThemeLight.Background};
        }

        &:not(.read-only) {
            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${ThemeLight.Background};
                }
            }
        }
    }

    &[data-background="dark"] {
        color: ${ThemeDark.Font};

        &.read-only {
            color: ${ThemeDark.Gray500};
        }

        &.active {
            color: ${ThemeDark.Background};
        }

        &:not(.read-only) {
            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${ThemeDark.Background};
                }
            }
        }
    }
`

const IconAnim = css`
    transition: ${Transitions.Short};

    &.with-animation.open {
        transform: rotate(180deg);
    }
`

const StyledChevronDown = styled(ChevronDownIcon).attrs({
    size: 16,
    color: "primary",
})`
    ${IconAnim}
`

const StyledIcon = styled(Icon).attrs({ color: "primary", size: 16 })`
    ${IconAnim}
`

setDefaultTheme([StyledListInputs, Item, StyledChevronDown, StyledIcon])

export { StyledListInputs, Item, StyledChevronDown, StyledIcon }
