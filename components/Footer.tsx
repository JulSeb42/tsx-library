/*=============================================== Footer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import { Strong } from "./Font"
import Mixins from "./Mixins"
import Image from "./Image"

import { RequireAtLeastOne } from "./RequireAtLeastOne"
import { ColorsShortTypes, LibColorsTypes } from "./common-types"

/*==================== Component ====================*/

const Footer = ({
    separator,
    children,
    logoImg,
    logoAlt = "Logo",
    logoText,
    logoWidth,
    logoHeight,
    separatorColor = "gray-200",
    ...props
}: Props) => (
    <Container $separator={separator} $separatorColor={separatorColor} {...props}>
        {logoImg ? (
            <LogoImg src={logoImg} alt={logoAlt} width={logoWidth} height={logoHeight} fit="contain" />
        ) : (
            <Strong color="primary">{logoText}</Strong>
        )}

        <FooterLinks>{children}</FooterLinks>
    </Container>
)

export default Footer

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $separator?: boolean
    $separatorColor?: ColorsShortTypes | LibColorsTypes | string
}

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    separator?: boolean
    children: React.ReactNode | React.ReactNode[] | string
    logoImg?: string
    logoAlt?: string
    logoText?: string
    logoWidth?: number
    logoHeight?: number
    separatorColor?: ColorsShortTypes | LibColorsTypes | string
}

type Props = RequireAtLeastOne<BaseProps, "logoImg" | "logoText">

/*==================== Styles ====================*/

const Container = styled.footer<StyleProps>`
    width: 100%;
    position: relative;
    z-index: 10;
    background-color: ${Variables.Colors.Background};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    padding: ${Variables.Spacers.L} 5%;

    a,
    button {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        border: none;
        padding: 0;
        background-color: transparent;

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${Variables.Colors.Primary300};
            }

            &:active {
                color: ${Variables.Colors.Primary600};
            }
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
        gap: ${Variables.Spacers.L};
    }

    ${({ $separator, $separatorColor }) =>
        $separator &&
        css`
            padding-top: ${Variables.Spacers.XXL};

            &:before {
                content: "";
                width: calc(100% - 10%);
                height: 1px;
                position: absolute;
                top: ${Variables.Spacers.L};
                left: 5%;
                background-color: ${Mixins.AllColors({ $color: $separatorColor })};
            }
        `}
`

const LogoImg = styled(Image)`
    object-position: left center;
`

const FooterLinks = styled.div`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
        $flexWrap: "wrap",
    })};

    & > *:not(:last-child):after {
        content: "•";
        color: ${Variables.Colors.Black};
        margin-left: ${Variables.Spacers.XS};
        font-size: 12px;
        position: relative;
        top: -2px;
    }

    @media ${Variables.Breakpoints.Mobile} {
        justify-content: center;
        align-items: center;
    }
`
