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
import type { FontWeightTypes } from "../../types"

const FontCommon = ({
    $fontWeight = "regular",
}: {
    $fontWeight?: FontWeightTypes
}) => css`
    font-family: ${FontFamilies.Body};
    line-height: ${LineHeights.Regular};
    ${Mixins.FontWeight({ $fontWeight })};

    a,
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        font-family: ${FontFamilies.Body};
        transition: ${Transitions.Short};
        text-decoration: none;
        font-weight: ${FontWeights.Black};
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

    code {
        font-family: ${FontFamilies.Code};
        line-height: ${LineHeights.Code};
        color: ${({ theme }) => theme.Primary500};
        padding: ${Spacers.XXS};
        background-color: ${({ theme }) => theme.Gray50};
        border-radius: ${Radiuses.S};
    }
`

const StyledH1 = styled.h1`
    font-size: ${FontSizes.Titles.H1};
    ${FontCommon({
        $fontWeight: "black",
    })};

    &.display {
        font-size: ${FontSizes.Display.H1};
    }
`

const StyledH2 = styled.h2`
    font-size: ${FontSizes.Titles.H2};
    ${FontCommon({
        $fontWeight: "black",
    })};

    &.display {
        font-size: ${FontSizes.Display.H2};
    }
`

const StyledH3 = styled.h3`
    font-size: ${FontSizes.Titles.H3};
    ${FontCommon({
        $fontWeight: "black",
    })};

    &.display {
        font-size: ${FontSizes.Display.H3};
    }
`

const StyledH4 = styled.h4`
    font-size: ${FontSizes.Titles.H4};
    ${FontCommon({
        $fontWeight: "black",
    })};

    &.display {
        font-size: ${FontSizes.Display.H4};
    }
`

const StyledH5 = styled.h5`
    font-size: ${FontSizes.Titles.H5};
    ${FontCommon({
        $fontWeight: "black",
    })};

    &.display {
        font-size: ${FontSizes.Display.H5};
    }
`

const StyledH6 = styled.h6`
    font-size: ${FontSizes.Titles.H6};
    ${FontCommon({
        $fontWeight: "black",
    })};
`

const StyledP = styled.p`
    font-size: ${FontSizes.Body};
    ${FontCommon({
        $fontWeight: "regular",
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
    font-size: ${FontSizes.Small};
    ${FontCommon({
        $fontWeight: "regular",
    })};
`

const StyledBlockquote = styled.blockquote`
    font-size: ${FontSizes.Titles.H6};
    ${FontCommon({
        $fontWeight: "regular",
    })};
    font-style: italic;
`

const ListStyles = css`
    font-size: ${FontSizes.Body};
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
    })};

    dt {
        font-size: ${FontSizes.Titles.H6};
        ${Mixins.FontWeight({ $fontWeight: "black" })};
    }

    dd {
        font-size: ${FontSizes.Body};
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
