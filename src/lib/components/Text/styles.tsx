/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"

import { setDefaultTheme } from "../../utils"
import {
    LineHeights,
    FontFamilies,
    Spacers,
    Breakpoints,
    Mixins,
    Transitions,
    FontWeights,
    Radiuses,
    FontSizes,
} from "../../"
import type { FontSizeTypes, FontWeightTypes } from "../../types"

const FontCommon = ({
    $fontWeight = "regular",
    $fontSize,
}: {
    $fontWeight?: FontWeightTypes
    $fontSize?: FontSizeTypes
}) => css`
    font-family: ${FontFamilies.Body};
    line-height: ${LineHeights.Regular};
    ${Mixins.FontWeight({ $fontWeight })};
    ${Mixins.FontSize({ $fontSize })};

    &[data-align="left"] {
        text-align: left;
    }

    &[data-align="center"] {
        text-align: center;
    }

    &[data-align="right"] {
        text-align: right;
    }

    &[data-align="justify"] {
        text-align: justify;
    }

    &[data-align="inherit"] {
        text-align: inherit;
    }

    &[data-align="initial"] {
        text-align: initial;
    }

    &[data-align="revert"] {
        text-align: revert;
    }

    &[data-align="revert-layer"] {
        text-align: revert-layer;
    }

    &[data-align="unset"] {
        text-align: unset;
    }

    a {
        padding: 0;
        border: none;
        background-color: transparent;
        font-family: ${FontFamilies.Body};
        transition: ${Transitions.Short};
        text-decoration: none;
        font-weight: ${FontWeights.Black};
        color: ${({ theme }) =>
            theme.ColorsHoverDefault({ $color: "primary" })};
        ${Mixins.FontSize({ $fontSize })};

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

    code {
        font-family: ${FontFamilies.Code};
        line-height: ${LineHeights.Code};
        color: ${({ theme }) => theme.Primary500};
        padding: ${Spacers.XXS};
        background-color: ${({ theme }) => theme.Gray50};
        border-radius: ${Radiuses.S};
        ${Mixins.FontSize({ $fontSize })};
    }
`

const StyledH1 = styled.h1`
    ${FontCommon({
        $fontWeight: "black",
        $fontSize: "title-h1",
    })};

    &.display {
        font-size: ${FontSizes.Display.H1};

        a,
        button,
        code {
            ${Mixins.FontSize({ $fontSize: "display-h1" })};
        }
    }
`

const StyledH2 = styled.h2`
    ${FontCommon({
        $fontWeight: "black",
        $fontSize: "title-h2",
    })};

    &.display {
        font-size: ${FontSizes.Display.H2};

        a,
        button,
        code {
            ${Mixins.FontSize({ $fontSize: "display-h2" })};
        }
    }
`

const StyledH3 = styled.h3`
    ${FontCommon({
        $fontWeight: "black",
        $fontSize: "title-h3",
    })};

    &.display {
        font-size: ${FontSizes.Display.H3};

        a,
        button,
        code {
            ${Mixins.FontSize({ $fontSize: "display-h3" })};
        }
    }
`

const StyledH4 = styled.h4`
    ${FontCommon({
        $fontWeight: "black",
        $fontSize: "title-h4",
    })};

    &.display {
        font-size: ${FontSizes.Display.H4};

        a,
        button,
        code {
            ${Mixins.FontSize({ $fontSize: "display-h4" })};
        }
    }
`

const StyledH5 = styled.h5`
    ${FontCommon({
        $fontWeight: "black",
        $fontSize: "title-h5",
    })};

    &.display {
        font-size: ${FontSizes.Display.H5};

        a,
        button,
        code {
            ${Mixins.FontSize({ $fontSize: "display-h5" })};
        }
    }
`

const StyledH6 = styled.h6`
    ${FontCommon({
        $fontWeight: "black",
        $fontSize: "title-h6",
    })};
`

const StyledP = styled.p`
    ${FontCommon({
        $fontWeight: "regular",
        $fontSize: "body",
    })};
`

const StyledStrong = styled.strong`
    ${FontCommon({
        $fontWeight: "black",
    })};
`

const StyledEm = styled.em`
    ${FontCommon({
        $fontWeight: "regular",
    })};
    font-style: italic;
`

const StyledSmall = styled.small`
    ${FontCommon({
        $fontWeight: "regular",
        $fontSize: "small",
    })};
`

const StyledBlockquote = styled.blockquote`
    ${FontCommon({
        $fontWeight: "regular",
        $fontSize: "title-h6",
    })};
    font-style: italic;
`

const ListStyles = css`
    padding: 0;
    margin: 0;
    padding-left: ${Spacers.S};
    ${Mixins.Flexbox({
        $gap: "xxs",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    ${FontCommon({
        $fontWeight: "regular",
        $fontSize: "body",
    })};

    li {
        padding-inline-start: ${Spacers.XXS};
    }
`

const StyledUl = styled.ul`
    ${ListStyles};
`

const StyledOl = styled.ol`
    ${ListStyles};
`

const StyledDl = styled.dl`
    ${FontCommon({
        $fontWeight: "regular",
        $fontSize: "body",
    })};

    dt {
        font-size: ${FontSizes.Titles.H6};
        ${Mixins.FontWeight({ $fontWeight: "black" })};
    }

    dd {
        ${Mixins.FontWeight({ $fontWeight: "regular" })};
        padding-inline-start: ${Spacers.M};

        &:not(:last-of-type) {
            margin-bottom: ${Spacers.XS};
        }
    }
`

setDefaultTheme([
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
    StyledH6,
    StyledP,
    StyledStrong,
    StyledEm,
    StyledSmall,
    StyledBlockquote,
    StyledUl,
    StyledOl,
    StyledDl,
    FontCommon,
])

export {
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
    StyledH6,
    StyledP,
    StyledStrong,
    StyledEm,
    StyledSmall,
    StyledBlockquote,
    StyledUl,
    StyledOl,
    StyledDl,
    FontCommon,
}
