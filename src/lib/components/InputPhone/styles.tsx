/*=============================================== InputPhone styles ===============================================*/

import styled from "styled-components"

import {
    FontFamilies,
    FontSizes,
    Mixins,
    Spacers,
    ThemeDark,
    ThemeLight,
    Transitions,
} from "../../"
import { SearchIcon } from "../../icons"
import { InputBaseMixin } from "../InputComponents"
import { CONSTANT_VALUES } from "../InputComponents/styles"

import { setDefaultTheme } from "../../utils"

const StyledInputPhone = styled.div`
    position: relative;
    width: 100%;
    z-index: 0;

    &.open {
        z-index: 20;
    }
`

const Button = styled.button`
    height: ${CONSTANT_VALUES.InputHeight}px;
    padding: 0 ${Spacers.XS};
    border: none;
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};

    &[data-variant="pill"] {
        padding: 0 ${Spacers.S};
    }

    & > svg:first-of-type {
        width: 20px;
    }
`

const Flag = styled.img`
    width: 16px;
`

const StyledIconSearch = styled(SearchIcon)`
    position: absolute;
    left: ${Spacers.XS};
    top: calc(50% - 16px / 2);
`

const SearchContainer = styled.div`
    padding: ${Spacers.XS};
    position: relative;
`

const InputSearch = styled.input`
    font-family: ${FontFamilies.Body};
    font-size: ${FontSizes.Body};
    width: 100%;
    height: 40px;
    padding: 0 ${Spacers.XS} 0 calc(16px + ${Spacers.XS});
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: 0;
    transition: ${Transitions.Short};
    background-color: transparent;
    color: ${({ theme }) => theme.Font};

    &:focus {
        border-bottom-color: ${({ theme }) => theme.Primary500};
    }

    &[data-validation="not-passed"]:focus {
        border-bottom-color: ${({ theme }) => theme.Danger500};
    }

    &[data-background="light"] {
        border-bottom-color: ${ThemeLight.Gray200};
        color: ${ThemeLight.Font};

        &[data-validation="not-passed"]:focus {
            border-bottom-color: ${ThemeLight.Danger500};
        }
    }

    &[data-background="dark"] {
        border-bottom-color: ${ThemeDark.Gray200};
        color: ${ThemeDark.Font};

        &[data-validation="not-passed"]:focus {
            border-bottom-color: ${ThemeDark.Danger500};
        }
    }
`

const CountryCode = styled.span`
    position: absolute;
    left: 48px;
    height: ${CONSTANT_VALUES.InputHeight}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};
    z-index: 10;
    color: ${({ theme }) => theme.Font};

    &[data-background="light"] {
        color: ${ThemeLight.Font};
    }

    &[data-background="dark"] {
        color: ${ThemeDark.Font};
    }
`

const Input = styled.input`
    ${InputBaseMixin};
    padding-left: calc(48px + var(--country-code-length, 19px));

    &.list-open {
        border-color: ${({ theme }) => theme.Primary500};
    }

    &[data-validation="not-passed"].list-open {
        border-color: ${({ theme }) => theme.Danger500};
    }

    &[data-background="light"].list-open {
        border-color: ${ThemeLight.Primary500};

        &[data-validation="not-passed"] {
            border-color: ${ThemeLight.Danger500};
        }
    }

    &[data-background="dark"].list-open {
        border-color: ${ThemeDark.Primary500};

        &[data-validation="not-passed"] {
            border-color: ${ThemeDark.Danger500};
        }
    }
`

setDefaultTheme([
    StyledInputPhone,
    Button,
    Flag,
    StyledIconSearch,
    SearchContainer,
    InputSearch,
    CountryCode,
    Input,
])

export {
    StyledInputPhone,
    Button,
    Flag,
    StyledIconSearch,
    SearchContainer,
    InputSearch,
    CountryCode,
    Input,
}
