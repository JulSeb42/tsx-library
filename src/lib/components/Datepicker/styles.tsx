/*=============================================== Datepicker styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    FontSizes,
    FontWeights,
    Mixins,
    Radiuses,
    Spacers,
    ThemeDark,
    ThemeLight,
} from "../../"
import { InputBaseMixin } from "../InputComponents"

import { setDefaultTheme } from "../../utils"

const BUTTON_SIZE = 32
const BUTTON_MOBILE = 24

const DatepickerContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${BUTTON_SIZE}px;
    cursor: default;
    z-index: 0;

    &.open {
        z-index: 30;
    }

    &.disabled {
        cursor: not-allowed;
    }
`

const Selected = styled.button`
    font-weight: ${FontWeights.Regular};
    cursor: pointer;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    ${InputBaseMixin};

    &.disabled {
        cursor: not-allowed;
    }
`

const StyledDatepicker = styled.div`
    border-radius: ${Radiuses.M};
    width: 100%;
    max-width: 400px;
    overflow: hidden;
    display: none;
    position: absolute;
    left: 0;
    overflow-x: scroll;
    border: 1px solid ${({ theme }) => theme.Primary500};
    ${Mixins.HideScrollbar}

    &.open {
        display: block;
    }

    &[data-direction="up"] {
        bottom: ${BUTTON_SIZE}px;
    }

    &[data-direction="bottom"] {
        top: ${BUTTON_SIZE}px;
    }

    &[data-validation="not-passed"] {
        border-color: ${({ theme }) => theme.Danger500};
    }
`

const Header = styled.div`
    padding: ${Spacers.XS};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    text-align: center;
    background-color: ${({ theme }) => theme.Primary500};
    color: ${({ theme }) => theme.Background};

    &[data-validation="not-passed"] {
        background-color: ${({ theme }) => theme.Danger500};
    }
`

const NavButton = styled.button`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${Radiuses.Circle};
    padding: 0;
    border: none;
    background-color: transparent;
    color: currentColor;

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "primary" })};
        }

        &:not(:disabled):active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "primary" })};
        }
    }

    &[data-validation="not-passed"] {
        &:not(:disabled):hover {
            background-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "danger" })};
        }

        &:not(:disabled):active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "danger" })};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }
`

const Empty = styled.span`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
`

const DaysContainer = styled.div`
    ${Mixins.Grid({
        $col: 7,
        $gap: "xs",
        $padding: "xs",
        $justifyItems: "center",
    })};
    background-color: ${({ theme }) => theme.Background};
    color: ${({ theme }) => theme.Font};

    &[data-background="light"] {
        background-color: ${ThemeLight.Background};
        color: ${ThemeLight.Font};
    }

    &[data-background="dark"] {
        background-color: ${ThemeDark.Background};
        color: ${ThemeDark.Font};
    }
`

const Day = styled.button`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: ${Radiuses.Circle};
    background-color: transparent;
    color: ${({ theme }) => theme.Font};
    font-size: ${FontSizes.Small};

    &.today {
        border-color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
    }

    &.active {
        background-color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
        color: ${({ theme }) => theme.Background};
    }

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "primary" })};
            color: ${({ theme }) => theme.Background};
        }

        &:not(:disabled):active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "primary" })};
        }
    }

    &[data-validation="not-passed"] {
        &.today {
            border-color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "danger" })};
        }

        &.active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "danger" })};
        }

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "danger" })};
            }

            &:not(:disabled):active {
                background-color: ${({ theme }) =>
                    theme.ColorsHoverActive({ $color: "danger" })};
            }
        }
    }

    &[data-background="light"] {
        color: ${ThemeLight.Font};

        &[data-validation="not-passed"].active {
            color: ${ThemeLight.Background};
        }
    }

    &[data-background="dark"] {
        color: ${ThemeDark.Font};

        &[data-validation="not-passed"].active {
            color: ${ThemeDark.Background};
        }

        &.active {
            color: ${ThemeDark.Background};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }

    @media ${Breakpoints.Mobile} {
        width: ${BUTTON_MOBILE}px;
        height: ${BUTTON_MOBILE}px;
    }
`

setDefaultTheme([
    DatepickerContainer,
    Selected,
    StyledDatepicker,
    Header,
    NavButton,
    Empty,
    DaysContainer,
    Day,
])

export {
    DatepickerContainer,
    Selected,
    StyledDatepicker,
    Header,
    NavButton,
    Empty,
    DaysContainer,
    Day,
}
