/*=============================================== Header ===============================================*/

/*==================== Imports ====================*/

import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Image from "./Image"
import Burger from "./Burger"

import { RequireAtLeastOne } from "./RequireAtLeastOne"
import { LibColorsTypes, ColorsShortTypes, ColorsHoverTypes } from "./common-types"

/*==================== Styles ====================*/

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

const LinkStyles = ({ $linkColor }: StyleProps) => css`
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

const Container = styled.header<StyleProps>`
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

const Nav = styled.nav<NavProps>`
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
        top: ${({ $headerHeight, $isOpen }) => ($isOpen ? $headerHeight : -300)}px;
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

/*==================== Component ====================*/

const Header = ({
    logoTo = "/",
    logoImg,
    logoWidth = 100,
    logoHeight = 30,
    logoAlt = "Logo",
    logoText,
    position = "relative",
    backgroundColor = "primary",
    linkColor = "white",
    children,
    burgerColor = "white",
    navColor = "primary",
    ...props
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const [headerHeight, setHeaderHeight] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight)
        }
    }, [])

    return (
        <Container
            $backgroundColor={backgroundColor}
            $isOpen={isOpen}
            $position={position}
            $linkColor={linkColor}
            $navColor={navColor}
            ref={ref}
            {...props}
        >
            <Logo to={logoTo}>
                {logoImg ? (
                    <LogoImg src={logoImg} alt={logoAlt} fit="contain" width={logoWidth} height={logoHeight} />
                ) : (
                    logoText
                )}
            </Logo>

            <HeaderBurger isOpen={isOpen} color={burgerColor} onClick={() => setIsOpen(!isOpen)} />

            <Nav
                $isOpen={isOpen}
                $headerHeight={headerHeight}
                $backgroundColor={backgroundColor}
                $navColor={navColor}
                $linkColor={linkColor}
            >
                {children}
            </Nav>
        </Container>
    )
}

export default Header

/*==================== Types ====================*/

const positions = {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
} as const

type PositionsTypes = keyof typeof positions

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isOpen: boolean
    $position?: PositionsTypes
    $backgroundColor?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?: ColorsHoverTypes
    $navColor?: LibColorsTypes | ColorsShortTypes | string
}

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    logoText?: string
    logoImg?: string
    logoWidth?: number
    logoHeight?: number
    logoTo?: string
    logoAlt?: string
    position?: PositionsTypes
    children: React.ReactNode | React.ReactNode[]
    backgroundColor?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes
    burgerColor?: ColorsHoverTypes
    burgerBorderColor?: LibColorsTypes | ColorsShortTypes | string
    burgerBorderColorHover?: LibColorsTypes | ColorsShortTypes | string
    burgerBorderColorActive?: LibColorsTypes | ColorsShortTypes | string
    navColor?: LibColorsTypes | ColorsShortTypes | string
}

type Props = RequireAtLeastOne<BaseProps, "logoText" | "logoImg">

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
    $isOpen: boolean
    $headerHeight: number
    $backgroundColor?: LibColorsTypes | ColorsShortTypes | string
    $navColor?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?: ColorsHoverTypes
}
