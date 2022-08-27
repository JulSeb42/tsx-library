/*=============================================== Header styles ===============================================*/

import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Image from "../Image"
import Burger from "../Burger"

import {
    ColorsHoverTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

import { PositionsTypes } from "./types"

const LogoImg = styled(Image)`
    object-position: left center;
`

const HeaderBurger = styled(Burger)`
    display: none;

    @media ${Variables.Breakpoints.Mobile} {
        display: inherit;
    }
`

const Logo = styled(Link)``

const LinkStyles = ({ $linkColor }: { $linkColor?: ColorsHoverTypes }) => css`
    font-size: ${Variables.FontSizes.Body};
    padding: 0;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: ${Mixins.ColorsHoverDefault({ $color: $linkColor })};
    font-weight: ${Variables.FontWeights.Regular};

    &.active,
    &${Logo} {
        font-weight: ${Variables.FontWeights.Black};
    }

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            color: ${Mixins.ColorsHoverHover({ $color: $linkColor })};
        }

        &:active {
            color: ${Mixins.ColorsHoverActive({ $color: $linkColor })};
        }
    }
`

const StyledHeader = styled.header<{
    $isOpen: boolean
    $position?: PositionsTypes
    $backgroundColor?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?: ColorsHoverTypes
    $navColor?: LibColorsTypes | ColorsShortTypes | string
}>`
    position: ${({ $position }) => $position};
    z-index: 999;
    width: 100vw;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "l",
    })};
    padding: ${Variables.Spacers.M} 5vw;
    background-color: ${({ $backgroundColor }) =>
        Mixins.AllColors({
            $color: $backgroundColor,
        })};

    @media ${Variables.Breakpoints.Mobile} {
        background-color: ${({ $backgroundColor, $navColor, $isOpen }) =>
            $backgroundColor === "transparent" && $isOpen
                ? Mixins.AllColors({ $color: $navColor })
                : Mixins.AllColors({ $color: $backgroundColor })};
    }

    & > a,
    & > button {
        ${LinkStyles};
    }
`

const Nav = styled.nav<{
    $isOpen: boolean
    $headerHeight: number
    $backgroundColor?: LibColorsTypes | ColorsShortTypes | string
    $navColor?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?: ColorsHoverTypes
}>`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "s",
    })};

    & > a,
    & > button {
        ${LinkStyles};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        top: ${({ $headerHeight, $isOpen }) =>
            $isOpen ? $headerHeight : -300}px;
        background-color: ${({ $backgroundColor, $navColor }) =>
            $backgroundColor === "transparent"
                ? Mixins.AllColors({ $color: $navColor })
                : Mixins.AllColors({
                      $color: $backgroundColor,
                  })};
        left: 0;
        padding: ${Variables.Spacers.M} 5vw;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        transition: ${Variables.Transitions.Short};
    }
`

export { LogoImg, HeaderBurger, Logo, StyledHeader, Nav }
