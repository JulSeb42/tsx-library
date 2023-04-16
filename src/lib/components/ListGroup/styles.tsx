/*=============================================== ListGroup styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Breakpoints,
    FontWeights,
    Mixins,
    Radiuses,
    Spacers,
    Text,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledListGroup = styled.ul`
    border: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.M};
    overflow: hidden;
    list-style: none;
    padding: 0;
`

const Item = styled.li`
    display: block;
    width: 100%;
    padding: ${Spacers.XS};
    border: none;
    text-align: left;
    background-color: transparent;
    text-decoration: none;
    font-weight: ${FontWeights.Regular};

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.Gray200};
    }

    &.is-hoverable {
        color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
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
        }

        &:disabled {
            background-color: ${({ theme }) => theme.Gray100};
            color: ${({ theme }) => theme.Gray500};
        }
    }
`

const Title = styled(Text).attrs({ tag: "h6" })`
    flex-grow: 1;
`

const ContainerBase = css`
    height: 27px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
`

const BadgeContainer = styled.span`
    ${ContainerBase};
    color: ${({ theme }) => theme.Gray500};
`

const NumberContainer = styled.span`
    ${ContainerBase};
    color: currentColor;
`

setDefaultTheme([StyledListGroup, Item, Title, NumberContainer, BadgeContainer])

export { StyledListGroup, Item, Title, NumberContainer, BadgeContainer }
