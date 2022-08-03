/*=============================================== Fonts ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { LibColorsTypes, ColorsShortTypes, TextAlignTypes, ColorsHoverTypes } from "./common-types"

/*==================== Styles ====================*/

const FontCommon = ({ $color, $textAlign, $linkColor, $linkColorHover, $linkColorActive }: CommonStyleProps) => css`
    text-align: ${$textAlign};
    color: ${Mixins.AllColors};

    & > * {
        color: ${Mixins.AllColors};
    }

    a {
        color: ${$color || $linkColor === "white"
            ? Variables.Colors.White
            : $linkColor === "primary" ||
              $linkColor === "secondary" ||
              $linkColor === "success" ||
              $linkColor === "danger" ||
              $linkColor === "warning"
            ? Mixins.ColorsHoverDefault({ $color: $linkColor })
            : $linkColor
            ? $linkColor
            : Variables.Colors.Primary500};
        text-decoration: none;

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${$color || $linkColor === "white"
                    ? Variables.Colors.Gray300
                    : $linkColor === "primary" ||
                      $linkColor === "secondary" ||
                      $linkColor === "success" ||
                      $linkColor === "danger" ||
                      $linkColor === "warning"
                    ? Mixins.ColorsHoverHover({ $color: $linkColor })
                    : $linkColorHover
                    ? $linkColorHover
                    : Variables.Colors.Primary300};
            }

            &:active {
                color: ${$color || $linkColor === "white"
                    ? Variables.Colors.Gray100
                    : $linkColor === "primary" ||
                      $linkColor === "secondary" ||
                      $linkColor === "success" ||
                      $linkColor === "danger" ||
                      $linkColor === "warning"
                    ? Mixins.ColorsHoverActive({ $color: $linkColor })
                    : $linkColorActive
                    ? $linkColorActive
                    : Variables.Colors.Primary600};
            }
        }
    }

    code {
        font-family: ${Variables.FontFamilies.Code};
        line-height: ${Variables.LineHeights.Code};
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Spacers.XXS};
        border-radius: ${Variables.Radiuses.XS};
        background-color: ${Variables.Colors.Gray50};
    }
`

const StyledH1 = styled.h1<TitlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H1 : Variables.FontSizes.Titles.H1)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H1 : Variables.FontSizes.Titles.H1)};
    }
`

const StyledH2 = styled.h2<TitlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H2 : Variables.FontSizes.Titles.H2)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H2 : Variables.FontSizes.Titles.H2)};
    }
`

const StyledH3 = styled.h3<TitlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H3 : Variables.FontSizes.Titles.H3)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H3 : Variables.FontSizes.Titles.H3)};
    }
`

const StyledH4 = styled.h4<TitlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H4 : Variables.FontSizes.Titles.H4)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H4 : Variables.FontSizes.Titles.H4)};
    }
`

const StyledH5 = styled.h5<TitlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H5 : Variables.FontSizes.Titles.H5)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Display.H5 : Variables.FontSizes.Titles.H5)};
    }
`

const StyledH6 = styled.h6<H6StyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${Variables.FontSizes.Titles.H6};

    & > * {
        font-size: ${Variables.FontSizes.Titles.H6};
    }
`

const StyledP = styled.p<ParagraphStyleProps>`
    ${FontCommon};
    font-size: ${Variables.FontSizes.Body};

    & > * {
        font-size: ${Variables.FontSizes.Body};
    }
`

const StyledStrong = styled.strong<ParagraphStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledEm = styled.em<ParagraphStyleProps>`
    ${FontCommon};
    font-style: italic;
`

const StyledSmall = styled.small<ParagraphStyleProps>`
    ${FontCommon};
    font-size: ${Variables.FontSizes.Small};

    & > * {
        font-size: ${Variables.FontSizes.Small};
    }
`

const StyledBlockquote = styled.blockquote<QuoteStyleProps>`
    ${FontCommon};
    font-size: ${Variables.FontSizes.Titles.H6};
    font-style: italic;
`

const StyledUl = styled.ul<UlStyleProps>`
    ${FontCommon};
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};

    li {
        padding-inline-start: ${Variables.Spacers.XXS};
        line-height: ${Variables.LineHeights.Regular};
    }
`

const StyledOl = styled.ol<OlStyleProps>`
    ${FontCommon};
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};

    li {
        padding-inline-start: ${Variables.Spacers.XXS};
        line-height: ${Variables.LineHeights.Regular};
    }
`

const StyledDl = styled.dl<DlStyleProps>`
    ${FontCommon};

    dt {
        font-weight: ${Variables.FontWeights.Black};
    }

    dd {
        padding-inline-start: ${Variables.Spacers.M};

        &:not(:last-of-type) {
            margin-bottom: ${Variables.Spacers.XS};
        }
    }
`

/*==================== Component ====================*/

const H1 = ({
    color,
    display,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: TitlesProps) => (
    <StyledH1
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledH1>
)

const H2 = ({
    color,
    display,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: TitlesProps) => (
    <StyledH2
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledH2>
)

const H3 = ({
    color,
    display,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: TitlesProps) => (
    <StyledH3
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledH3>
)

const H4 = ({
    color,
    display,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: TitlesProps) => (
    <StyledH4
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledH4>
)

const H5 = ({
    color,
    display,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: TitlesProps) => (
    <StyledH5
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledH5>
)

const H6 = ({ color, textAlign, linkColor, linkColorHover, linkColorActive, children, ...props }: H6Props) => (
    <StyledH6
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledH6>
)

const P = ({ color, textAlign, linkColor, linkColorHover, linkColorActive, children, ...props }: ParagraphProps) => (
    <StyledP
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledP>
)

const Strong = ({
    color,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: ParagraphProps) => (
    <StyledStrong
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledStrong>
)

const Em = ({ color, textAlign, linkColor, linkColorHover, linkColorActive, children, ...props }: ParagraphProps) => (
    <StyledEm
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledEm>
)

const Small = ({
    color,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: ParagraphProps) => (
    <StyledSmall
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledSmall>
)

const Blockquote = ({
    color,
    textAlign,
    linkColor,
    linkColorHover,
    linkColorActive,
    children,
    ...props
}: QuoteProps) => (
    <StyledBlockquote
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledBlockquote>
)

const Ul = ({ color, textAlign, linkColor, linkColorHover, linkColorActive, children, ...props }: UlProps) => (
    <StyledUl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledUl>
)

const Ol = ({ color, textAlign, linkColor, linkColorHover, linkColorActive, children, ...props }: OlProps) => (
    <StyledOl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledOl>
)

const Dl = ({ color, textAlign, linkColor, linkColorHover, linkColorActive, children, ...props }: DlProps) => (
    <StyledDl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $linkColorHover={linkColorHover}
        $linkColorActive={linkColorActive}
        {...props}
    >
        {children}
    </StyledDl>
)

export { H1, H2, H3, H4, H5, H6, P, Strong, Em, Small, Blockquote, Ul, Ol, Dl, FontCommon }

/*==================== Types ====================*/

interface CommonStyleProps {
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?: ColorsHoverTypes | string
    $linkColorHover?: string
    $linkColorActive?: string
}

interface TitlesStyleProps extends React.HTMLAttributes<HTMLHeadingElement>, CommonStyleProps {
    $color?: LibColorsTypes | ColorsShortTypes | string
    $display?: boolean
}

interface H6StyleProps extends React.HTMLAttributes<HTMLHeadingElement>, CommonStyleProps {}

interface ParagraphStyleProps extends CommonStyleProps, React.HTMLAttributes<HTMLParagraphElement> {}

interface QuoteStyleProps extends React.HTMLAttributes<HTMLQuoteElement>, CommonStyleProps {}

interface UlStyleProps extends React.HTMLAttributes<HTMLUListElement>, CommonStyleProps {}

interface OlStyleProps extends React.HTMLAttributes<HTMLOListElement>, CommonStyleProps {}

interface DlStyleProps extends React.HTMLAttributes<HTMLDListElement>, CommonStyleProps {}

interface CommonProps {
    textAlign?: TextAlignTypes
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface TitlesProps extends React.HTMLAttributes<HTMLHeadingElement>, CommonProps {
    display?: boolean
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface H6Props extends React.HTMLAttributes<HTMLHeadingElement>, CommonProps {
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface ParagraphProps extends CommonProps, React.HTMLAttributes<HTMLParagraphElement> {
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement>, CommonProps {
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface UlProps extends React.HTMLAttributes<HTMLUListElement>, CommonProps {
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface OlProps extends React.HTMLAttributes<HTMLOListElement>, CommonProps {
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}

interface DlProps extends React.HTMLAttributes<HTMLDListElement>, CommonProps {
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?: ColorsHoverTypes | string
    linkColorHover?: string
    linkColorActive?: string
}
