/*=============================================== Header styles ===============================================*/

import { Link } from "react-router-dom"
import styled from "styled-components"

import {
    Breakpoints,
    Burger,
    FontSizes,
    FontWeights,
    Image,
    Mixins,
    Overlays,
    Spacers,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

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

const StyledHeader = styled.header`
    position: relative;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100vw;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "l",
    })};
    padding: ${Spacers.M} 5vw;
    background-color: ${({ theme }) => theme.Primary500};
    transition: ${Transitions.Short};

    & > a,
    & > button:not(${HeaderBurger}),
    & > nav > a,
    & > nav > button {
        font-size: ${FontSizes.Body};
        padding: 0;
        border: none;
        background-color: transparent;
        text-decoration: none;
        color: ${({ theme }) => theme.ColorsHoverDefault({ $color: "white" })};
        font-weight: ${FontWeights.Regular};

        &.active,
        &${Logo} {
            font-weight: ${FontWeights.Black};
        }

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme }) =>
                    theme.ColorsHoverHover({ $color: "white" })};
            }

            &:active {
                color: ${({ theme }) =>
                    theme.ColorsHoverActive({ $color: "white" })};
            }
        }
    }

    &[data-burger-position="left"] {
        @media ${Breakpoints.Mobile} {
            justify-content: flex-start;
            gap: ${Spacers.XS};
        }
    }

    &[data-position="absolute"] {
        position: absolute;
    }

    &[data-position="fixed"] {
        position: fixed;

        &.is-hidden {
            top: calc(var(--header-height) - 16px);
        }
    }

    &[data-variant="white"],
    &[data-variant="transparent"] {
        & > a,
        & > button:not(${HeaderBurger}),
        & > nav > a,
        & > nav > button {
            color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "primary" })};

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme }) =>
                        theme.ColorsHoverHover({ $color: "primary" })};
                }

                &:active {
                    color: ${({ theme }) =>
                        theme.ColorsHoverActive({ $color: "primary" })};
                }
            }
        }

        & > ${Logo} {
            color: ${({ theme }) =>
                theme.ColorsHoverDefault({ $color: "primary" })};
        }
    }

    &[data-variant="white"] {
        background-color: ${({ theme }) => theme.White};
    }

    &[data-variant="transparent"] {
        background-color: transparent;

        @media ${Breakpoints.Mobile} {
            &.open {
                background-color: ${({ theme }) => theme.Primary500};

                & > a,
                & > button:not(${HeaderBurger}),
                & > nav > a,
                & > nav > button {
                    color: ${({ theme }) =>
                        theme.ColorsHoverDefault({ $color: "white" })};

                    @media ${Breakpoints.Hover} {
                        &:hover {
                            color: ${({ theme }) =>
                                theme.ColorsHoverHover({ $color: "white" })};
                        }

                        &:active {
                            color: ${({ theme }) =>
                                theme.ColorsHoverActive({ $color: "white" })};
                        }
                    }
                }

                & > ${Logo} {
                    color: ${({ theme }) =>
                        theme.ColorsHoverDefault({ $color: "white" })};
                }
            }
        }
    }
`

const Nav = styled.nav`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "s",
    })};

    &[data-desktop-variant="left"] {
        flex-grow: 1;
    }

    @media ${Breakpoints.Mobile} {
        position: absolute;
        background-color: ${({ theme }) => theme.Primary500};
        transition: ${Transitions.Short};
        z-index: 998;

        &[data-nav-mobile-variant="full"] {
            width: 100vw;
            height: 100vh;
            top: 0;
            left: -600px;
            flex-direction: column;
            justify-content: center;
            padding: ${Spacers.L};

            & > a,
            & > button {
                font-size: ${FontSizes.Titles.H5};
            }

            &.open {
                left: 0;
            }
        }

        &[data-nav-mobile-variant="drawer"] {
            width: 70%;
            height: 100vh;
            top: 0;
            left: -600px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: calc(var(--header-height) + ${Spacers.L}) 5vw ${Spacers.S};

            &.open {
                left: 0;
            }
        }

        &[data-nav-mobile-variant="top"] {
            top: -300px;
            left: 0;
            padding: ${Spacers.M} 5vw;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            z-index: 997;

            &.open {
                top: var(--header-height);
            }
        }
    }

    &[data-variant="white"] {
        @media ${Breakpoints.Mobile} {
            background-color: ${({ theme }) => theme.White};
        }
    }
`

const Overlay = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${Overlays.Plain.Black80};
    z-index: 995;
    visibility: hidden;
    opacity: 0;
    transition: ${Transitions.Short};

    &.open {
        visibility: visible;
        opacity: 1;
    }
`

const SearchForm = styled.form`
    width: 100%;
    max-width: var(--search-max-width, 400px);

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
