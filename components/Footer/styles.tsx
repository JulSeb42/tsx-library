/*=============================================== Footer styles ===============================================*/

import styled, { css } from "styled-components"

import { Breakpoints, Spacers, Mixins, Image } from "../../"
import type { AllColorsTypes, ColorsHoverTypes } from "../../types"
import type { FooterDirectionsTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledFooter = styled.footer<{
    $separator?: boolean
    $separatorColor?: AllColorsTypes
    $accentColor?: ColorsHoverTypes
    $direction?: FooterDirectionsTypes
}>`
    width: 100%;
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};
    ${({ $direction }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent:
                $direction === "vertical" ? "center" : "space-between",
            $gap: $direction === "vertical" ? "xs" : "l",
            $flexDirection: $direction === "vertical" ? "column" : "row",
        })};
    padding: ${Spacers.L} 5%;

    a,
    button {
        color: ${({ $accentColor, theme }) =>
            theme.ColorsHoverDefault({ $color: $accentColor })};
        text-decoration: none;
        border: none;
        padding: 0;
        background-color: transparent;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ $accentColor, theme }) =>
                    theme.ColorsHoverHover({ $color: $accentColor })};
            }

            &:active {
                color: ${({ $accentColor, theme }) =>
                    theme.ColorsHoverActive({ $color: $accentColor })};
            }
        }
    }

    @media ${Breakpoints.Mobile} {
        flex-direction: column;
        gap: ${Spacers.XS};
    }

    ${({ $separator, $separatorColor, theme }) =>
        $separator &&
        css`
            padding-top: ${Spacers.XXL};

            &:before {
                content: "";
                width: calc(100% - 10%);
                height: 1px;
                position: absolute;
                top: ${Spacers.L};
                left: 5%;
                background-color: ${theme.AllColors({
                    $color: $separatorColor,
                })};
            }
        `}
`

const LogoImg = styled(Image).attrs({ fit: "contain" })`
    object-position: left center;
`

const FooterLinks = styled.div<{
    $symbolSeparator?: string
    $iconSeparator?: string
    $colorSeparator?: AllColorsTypes
}>`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
        $flexWrap: "wrap",
    })};

    @media ${Breakpoints.Mobile} {
        justify-content: center;
        align-items: center;
    }
`

const SeparatorContainer = styled.span<{ $color?: AllColorsTypes }>`
    height: 24px;
    font-size: 12;
    line-height: 24px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
    color: ${({ theme }) => theme.AllColors};
`

setDefaultTheme([StyledFooter, LogoImg, FooterLinks, SeparatorContainer])

export { StyledFooter, LogoImg, FooterLinks, SeparatorContainer }
