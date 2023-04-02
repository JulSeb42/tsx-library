/*=============================================== NavDemo styles ===============================================*/

import styled from "styled-components"
import { NavLink } from "react-router-dom"

import {
    Spacers,
    Mixins,
    Transitions,
    Breakpoints,
    FontWeights,
} from "../../lib"

export const StyledNavDemo = styled.nav`
    background-color: ${({ theme }) => theme.Primary500};
    width: 200px;
    height: 100vh;
    position: fixed;
    padding: ${Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
        $alignContent: "start",
    })};
    overflow-y: scroll;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) =>
        theme.ColorsHoverDefault({
            $color: "background",
        })};
    transition: ${Transitions.Short};
    font-weight: ${FontWeights.Regular};

    &.active {
        font-weight: ${FontWeights.Black};
    }

    @media ${Breakpoints.Hover} {
        &:hover {
            color: ${({ theme }) =>
                theme.ColorsHoverHover({
                    $color: "background",
                })};
        }

        &:active {
            color: ${({ theme }) =>
                theme.ColorsHoverActive({
                    $color: "background",
                })};
        }
    }
`
