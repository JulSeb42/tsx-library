/*=============================================== Pagination styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    FontSizes,
    Mixins,
    Radiuses,
    Spacers,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledPagination = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};

    @media ${Breakpoints.Mobile} {
        gap: ${Spacers.XXS};
    }
`

const Button = styled.button`
    --button-size: 32px;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: ${Radiuses.Circle};
    border: none;
    font-size: ${FontSizes.Small};
    cursor: pointer;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    color: ${({ theme }) => theme.ColorsHoverDefault({ $color: "primary" })};
    transition: ${Transitions.Short};
    background-color: transparent;

    &.active {
        background-color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
        color: ${({ theme }) => theme.Background};
    }

    &.more {
        cursor: default;
    }

    &:not(.more) {
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
    }

    &:disabled {
        color: ${({ theme }) => theme.Gray500};
    }

    @media ${Breakpoints.Mobile} {
        --button-size: 24px;
    }
`

setDefaultTheme([StyledPagination, Button])

export { StyledPagination, Button }
