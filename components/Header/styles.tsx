/*=============================================== Header styles ===============================================*/

import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import {
    stringifyPx,
    FontSizes,
    FontWeights,
    Breakpoints,
    Spacers,
    Transitions,
    Overlays,
    Mixins,
    Image,
    Burger,
} from "../../"
import {
    ColorsHoverTypes,
    AllColorsTypes,
    ShadowsTypes,
    PositionsTypes,
} from "../../types"
import { NavMenuVariantsTypes, NavMobileVariantsTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

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

const Logo = styled(Link)`
    position: relative;
    z-index: 999;
`

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
    $burgerPosition?: NavMenuVariantsTypes
    $navVariant?: NavMobileVariantsTypes
    $shadow?: ShadowsTypes
    $isHidden?: boolean
    $headerHeight: number
}>`
    position: ${({ $position }) => $position};
    left: 0;
    top: ${({ $isHidden, $headerHeight }) =>
        $isHidden ? `-${$headerHeight + 16}px` : 0};
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
    ${Mixins.Shadow};
    transition: ${Transitions.Short};

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
    $desktopVariant?: NavMenuVariantsTypes
    $shadow?: ShadowsTypes
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
        ${({ $shadow }) => $shadow && Mixins.Shadow({ $shadow: $shadow })};

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
                      z-index: 997;
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
