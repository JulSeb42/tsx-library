/*=============================================== Input components styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Breakpoints,
    FontFamilies,
    FontSizes,
    Mixins,
    Radiuses,
    Spacers,
    ThemeDark,
    ThemeLight,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

export const CONSTANT_VALUES = {
    InputHeight: 32,
    ListItemHeight: 40,
}

const InputBaseMixin = css`
    width: 100%;
    height: ${CONSTANT_VALUES.InputHeight}px;
    position: relative;
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    line-height: 100%;
    outline: none;
    position: relative;
    z-index: 2;
    border: 1px solid ${({ theme }) => theme.Gray200};
    background-color: ${({ theme }) => theme.Background};
    color: ${({ theme }) => theme.Font};
    border-radius: ${Radiuses.S};
    padding: 0 ${Spacers.XS};

    &[data-variant="pill"] {
        border-radius: ${Radiuses.Round};
        padding: 0 ${Spacers.S};
    }

    &[data-validation="not-passed"] {
        background-color: ${({ theme }) => theme.Danger50};
        color: ${({ theme }) => theme.Font};
    }

    &::placeholder {
        color: ${({ theme }) => theme.Gray400};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.Gray100};
        color: ${({ theme }) => theme.Gray500};

        &::placeholder {
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &[data-background="light"] {
        background-color: ${ThemeLight.Background};
        color: ${ThemeLight.Font};

        &[data-validation="not-passed"] {
            background-color: ${ThemeLight.Danger50};
            color: ${ThemeLight.Font};
        }

        &::placeholder {
            color: ${ThemeLight.Gray400};
        }

        &:disabled {
            background-color: ${ThemeLight.Gray100};
            color: ${ThemeLight.Gray500};

            &::placeholder {
                color: ${ThemeLight.Gray500};
            }
        }
    }

    &[data-background="dark"] {
        background-color: ${ThemeDark.Background};
        color: ${ThemeDark.Font};

        &[data-validation="not-passed"] {
            background-color: ${ThemeDark.Danger50};
            color: ${ThemeDark.Font};
        }

        &::placeholder {
            color: ${ThemeDark.Gray400};
        }

        &:disabled {
            background-color: ${ThemeDark.Gray100};
            color: ${ThemeDark.Gray500};

            &::placeholder {
                color: ${ThemeDark.Gray500};
            }
        }
    }

    &.with-icon {
        padding-left: calc(${CONSTANT_VALUES.InputHeight}px + ${Spacers.XS});

        &[data-variant="pill"] {
            padding-left: calc(40px + ${Spacers.XS});
        }
    }

    &:focus,
    &.is-focused {
        border-color: ${({ theme }) => theme.Primary500};

        &[data-validation="not-passed"] {
            border-color: ${({ theme }) => theme.Danger500};
        }
    }
`

const StyledRightContainer = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    height: ${CONSTANT_VALUES.InputHeight}px;
    padding: 0 ${Spacers.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    gap: ${Spacers.XS};
    z-index: 10;

    &[data-variant="pill"] {
        padding: 0 ${Spacers.S};
    }

    &.disabled {
        cursor: not-allowed;
    }
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: ${CONSTANT_VALUES.InputHeight}px;
    height: ${CONSTANT_VALUES.InputHeight}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    color: ${({ theme }) => theme.Primary500};

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${({ theme }) => theme.Gray200};
    }

    &[data-variant="pill"] {
        width: calc(${Spacers.XS} + ${CONSTANT_VALUES.InputHeight}px);
    }

    &[data-validation="not-passed"] {
        color: ${({ theme }) => theme.Danger500};
    }
`

const RightButton = styled.button`
    height: 32px;
    font-size: ${FontSizes.Small};
    color: ${({ theme }) => theme.ColorsHoverDefault({ $color: "primary" })};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })}

    &.is-clickable {
        cursor: pointer;
        border: none;
        padding: 0;
        background-color: transparent;
        transition: ${Transitions.Short};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "primary" })};
            }

            &:not(:disabled):active {
                color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "primary" })};
            }
        }
    }

    &:disabled,
    &.disabled {
        color: ${({ theme }) => theme.Gray500};
        cursor: not-allowed;
    }
`

setDefaultTheme([
    InputBaseMixin,
    StyledRightContainer,
    IconContainer,
    RightButton,
])

export { InputBaseMixin, StyledRightContainer, IconContainer, RightButton }
