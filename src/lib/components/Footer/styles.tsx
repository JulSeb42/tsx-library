/*=============================================== Footer styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Image, Mixins, Spacers, Text } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledFooter = styled.footer`
    width: 100%;
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};
    padding: ${Spacers.L} 5%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "l",
    })}

    a,
    button {
        color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
        text-decoration: none;
        border: none;
        padding: 0;
        background-color: transparent;

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

    @media ${Breakpoints.Mobile} {
        flex-direction: column;
        gap: ${Spacers.XS};
    }

    &.with-separator {
        padding-top: ${Spacers.XXL};

        &:before {
            content: "";
            width: calc(100% - 10%);
            height: 1px;
            position: absolute;
            top: ${Spacers.L};
            left: 5%;
            background-color: ${({ theme }) => theme.Gray200};
        }
    }

    &[data-direction="vertical"] {
        flex-direction: column;
        justify-content: center;
        gap: ${Spacers.XS};
    }
`

const LogoImg = styled(Image).attrs({ fit: "contain" })`
    object-position: left center;
`

const TextLogo = styled(Text).attrs({ tag: "strong" })`
    color: ${({ theme }) => theme.Primary500};
`

const FooterLinks = styled.div`
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

const SeparatorContainer = styled.span`
    height: 24px;
    font-size: 12;
    line-height: 24px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
    color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([
    StyledFooter,
    LogoImg,
    FooterLinks,
    SeparatorContainer,
    TextLogo,
])

export { StyledFooter, LogoImg, FooterLinks, SeparatorContainer, TextLogo }
