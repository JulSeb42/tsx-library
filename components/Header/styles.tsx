/*=============================================== Header styles ===============================================*/

import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { stringifyPx } from "ts-utils-julseb"

import {
    FontSizes,
    FontWeights,
    Breakpoints,
    Spacers,
    Transitions,
    Overlays,
} from "../../Variables"
import Mixins from "../../Mixins"
import Image from "../Image"
import Burger from "../Burger"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ColorsHoverTypes, AllColorsTypes } from "../../utils/common-types"

import {
    PositionsTypes,
    NavMobileVariantsTypes,
    NavDesktopVariantsTypes,
} from "./types"

const LogoImg = styled(Image)`
    object-position: left center;
    position: relative;
    z-index: 999;
`

const HeaderBurger = styled(Burger)`
    display: none;
    z-index: 999;

    @media ${Breakpoints.Mobile} {
        display: inherit;
    }
`

const Logo = styled(Link)``

const LinkStyles = ({ $linkColor }: { $linkColor?: ColorsHoverTypes }) => css`
    font-size: ${FontSizes.Body};
    padding: 0;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: ${({ theme }) => theme.ColorsHoverDefault({ $color: $linkColor })};
    font-weight: ${FontWeights.Regular};

    &.active,
    &${Logo} {
        font-weight: ${FontWeights.Black};
    }

    @media ${Breakpoints.Hover} {
        &:hover {
            color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: $linkColor })};
        }

        &:active {
            color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: $linkColor })};
        }
    }
`

const StyledHeader = styled.header<{
    $isOpen: boolean
    $position?: PositionsTypes
    $backgroundColor?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $navColor?: AllColorsTypes
    $burgerPosition?: "left" | "right"
    $navVariant?: NavMobileVariantsTypes
    ref?: any
}>`
    position: ${({ $position }) => $position};
    z-index: 999;
    width: 100vw;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "l",
    })};
    padding: ${Spacers.M} 5vw;
    background-color: ${({ $backgroundColor, theme }) =>
        theme.AllColors({
            $color: $backgroundColor,
        })};

    @media ${Breakpoints.Mobile} {
        background-color: ${({
            $navVariant,
            $backgroundColor,
            $navColor,
            $isOpen,
            theme,
        }) =>
            $navVariant === "top" &&
            ($backgroundColor === "transparent" && $isOpen
                ? theme.AllColors({ $color: $navColor })
                : theme.AllColors({ $color: $backgroundColor }))};
    }

    & > a,
    & > button {
        ${LinkStyles};
    }

    ${({ $burgerPosition }) =>
        $burgerPosition === "left" &&
        css`
            @media ${Breakpoints.Mobile} {
                justify-content: flex-start;
                gap: ${Spacers.XS};
            }
        `}
`

const Nav = styled.nav<{
    $isOpen: boolean
    $headerHeight: number
    $backgroundColor?: AllColorsTypes
    $navColor?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $variant?: NavMobileVariantsTypes
    $desktopVariant?: NavDesktopVariantsTypes
}>`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "s",
    })};

    flex-grow: ${({ $desktopVariant }) => $desktopVariant === "left" && 1};

    & > a,
    & > button {
        ${LinkStyles};
    }

    @media ${Breakpoints.Mobile} {
        position: absolute;
        background-color: ${({ $backgroundColor, $navColor, theme }) =>
            $backgroundColor === "transparent"
                ? theme.AllColors({ $color: $navColor })
                : theme.AllColors({
                      $color: $backgroundColor,
                  })};
        transition: ${Transitions.Short};
        z-index: 998;

        ${({ $variant, $headerHeight, $isOpen }) =>
            $variant === "full"
                ? css`
                      width: 100vw;
                      height: 100vh;
                      top: 0;
                      left: ${$isOpen ? 0 : "-600px"};
                      flex-direction: column;
                      justify-content: center;
                      padding: ${Spacers.L};

                      & > a,
                      & > button {
                          font-size: ${FontSizes.Titles.H5};
                      }
                  `
                : $variant === "drawer"
                ? css`
                      width: 70%;
                      height: 100vh;
                      top: 0;
                      left: ${$isOpen ? 0 : "-600px"};
                      flex-direction: column;
                      justify-content: flex-start;
                      align-items: flex-start;
                      padding: calc(${$headerHeight}px + ${Spacers.L}) 5vw
                          ${Spacers.S};
                  `
                : $variant === "top" &&
                  css`
                      top: ${$isOpen ? $headerHeight : -300}px;
                      left: 0;
                      padding: ${Spacers.M} 5vw;
                      width: 100%;
                      flex-direction: column;
                      align-items: flex-start;
                  `}
    }
`

const Overlay = styled.span<{ $isOpen?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${Overlays.Plain.Black80};
    z-index: 995;
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: ${Transitions.Short};
`

const SearchForm = styled.form<{ $maxWidth?: string | number }>`
    width: 100%;
    max-width: ${({ $maxWidth }) => stringifyPx($maxWidth)};

    @media ${Breakpoints.Mobile} {
        max-width: 100%;
    }
`

setDefaultTheme([
    LogoImg,
    HeaderBurger,
    Logo,
    StyledHeader,
    Nav,
    Overlay,
    SearchForm,
])

export { LogoImg, HeaderBurger, Logo, StyledHeader, Nav, Overlay, SearchForm }
