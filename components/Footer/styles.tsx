/*=============================================== Footer styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Image from "../Image"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

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

export { StyledFooter, LogoImg, FooterLinks }
