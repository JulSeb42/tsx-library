/*=============================================== Footer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "../Variables"
import Text from "./Text"
import Mixins from "./Mixins"
import Image from "./Image"

import { ColorsShortTypes, LibColorsTypes } from "../common-types"

/*==================== Component ====================*/

const Footer = ({ children, logo, options, ...props }: Props) => (
    <StyledFooter
        $separator={options?.separator}
        $separatorColor={options?.separatorColor || "gray-200"}
        {...props}
    >
        {logo.img ? (
            <LogoImg
                src={logo.img}
                alt={logo.alt || "Logo"}
                width={logo?.width || 100}
                height={logo?.height || 30}
                options={{
                    fit: "contain",
                }}
            />
        ) : (
            <Text tag="strong" color="primary">
                {logo.text}
            </Text>
        )}

        <FooterLinks>{children}</FooterLinks>
    </StyledFooter>
)

export default Footer

/*==================== Types ====================*/

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[] | string

    options?: {
        separator?: boolean
        separatorColor?: ColorsShortTypes | LibColorsTypes | string
    }
}

interface Possible1 extends BaseProps {
    logo: {
        img: string
        alt?: string
        width?: number
        height?: number
        text?: never
    }
}

interface Possible2 extends BaseProps {
    logo: {
        img?: never
        alt?: never
        width?: never
        height?: never
        text: string
    }
}

type Props = Possible1 | Possible2

/*==================== Styles ====================*/

const StyledFooter = styled.footer<{
    $separator?: boolean
    $separatorColor?: ColorsShortTypes | LibColorsTypes | string
}>`
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
                background-color: ${Mixins.AllColors({
                    $color: $separatorColor,
                })};
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
