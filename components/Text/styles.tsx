/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import {
    TextAlignTypes,
    LibColorsTypes,
    ColorsShortTypes,
    ColorsHoverTypes,
} from "../../utils/common-types"

import { FontSizeTypes } from "./types"

const FontCommon = ({
    $color,
    $textAlign,
    $linkColor,
    $lineHeight = Variables.LineHeights.Regular,
    $defaultSize,
    $fontSize,
}: {
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: number | string
    $defaultSize?: any
}) => css`
    line-height: ${stringifyPx($lineHeight)};
    text-align: ${$textAlign};
    color: ${Mixins.AllColors};

    font-size: ${$fontSize === "display-h1"
        ? Variables.FontSizes.Display.H1
        : $fontSize === "display-h2"
        ? Variables.FontSizes.Display.H2
        : $fontSize === "display-h3"
        ? Variables.FontSizes.Display.H3
        : $fontSize === "display-h4"
        ? Variables.FontSizes.Display.H4
        : $fontSize === "display-h5"
        ? Variables.FontSizes.Display.H5
        : $fontSize === "title-h1"
        ? Variables.FontSizes.Titles.H1
        : $fontSize === "title-h2"
        ? Variables.FontSizes.Titles.H2
        : $fontSize === "title-h3"
        ? Variables.FontSizes.Titles.H3
        : $fontSize === "title-h4"
        ? Variables.FontSizes.Titles.H4
        : $fontSize === "title-h5"
        ? Variables.FontSizes.Titles.H5
        : $fontSize === "title-h6"
        ? Variables.FontSizes.Titles.H6
        : $fontSize === "body"
        ? Variables.FontSizes.Body
        : $fontSize === "small"
        ? Variables.FontSizes.Small
        : $fontSize
        ? stringifyPx($fontSize)
        : $defaultSize === "display-h1"
        ? Variables.FontSizes.Display.H1
        : $defaultSize === "display-h2"
        ? Variables.FontSizes.Display.H2
        : $defaultSize === "display-h3"
        ? Variables.FontSizes.Display.H3
        : $defaultSize === "display-h4"
        ? Variables.FontSizes.Display.H4
        : $defaultSize === "display-h5"
        ? Variables.FontSizes.Display.H5
        : $defaultSize === "title-h1"
        ? Variables.FontSizes.Titles.H1
        : $defaultSize === "title-h2"
        ? Variables.FontSizes.Titles.H2
        : $defaultSize === "title-h3"
        ? Variables.FontSizes.Titles.H3
        : $defaultSize === "title-h4"
        ? Variables.FontSizes.Titles.H4
        : $defaultSize === "title-h5"
        ? Variables.FontSizes.Titles.H5
        : $defaultSize === "title-h6"
        ? Variables.FontSizes.Titles.H6
        : $defaultSize === "body"
        ? Variables.FontSizes.Body
        : $defaultSize === "small"
        ? Variables.FontSizes.Small
        : ""};

    & > * {
        font-size: ${$fontSize === "display-h1"
            ? Variables.FontSizes.Display.H1
            : $fontSize === "display-h2"
            ? Variables.FontSizes.Display.H2
            : $fontSize === "display-h3"
            ? Variables.FontSizes.Display.H3
            : $fontSize === "display-h4"
            ? Variables.FontSizes.Display.H4
            : $fontSize === "display-h5"
            ? Variables.FontSizes.Display.H5
            : $fontSize === "title-h1"
            ? Variables.FontSizes.Titles.H1
            : $fontSize === "title-h2"
            ? Variables.FontSizes.Titles.H2
            : $fontSize === "title-h3"
            ? Variables.FontSizes.Titles.H3
            : $fontSize === "title-h4"
            ? Variables.FontSizes.Titles.H4
            : $fontSize === "title-h5"
            ? Variables.FontSizes.Titles.H5
            : $fontSize === "title-h6"
            ? Variables.FontSizes.Titles.H6
            : $fontSize === "body"
            ? Variables.FontSizes.Body
            : $fontSize === "small"
            ? Variables.FontSizes.Small
            : $fontSize
            ? stringifyPx($fontSize)
            : $defaultSize === "display-h1"
            ? Variables.FontSizes.Display.H1
            : $defaultSize === "display-h2"
            ? Variables.FontSizes.Display.H2
            : $defaultSize === "display-h3"
            ? Variables.FontSizes.Display.H3
            : $defaultSize === "display-h4"
            ? Variables.FontSizes.Display.H4
            : $defaultSize === "display-h5"
            ? Variables.FontSizes.Display.H5
            : $defaultSize === "title-h1"
            ? Variables.FontSizes.Titles.H1
            : $defaultSize === "title-h2"
            ? Variables.FontSizes.Titles.H2
            : $defaultSize === "title-h3"
            ? Variables.FontSizes.Titles.H3
            : $defaultSize === "title-h4"
            ? Variables.FontSizes.Titles.H4
            : $defaultSize === "title-h5"
            ? Variables.FontSizes.Titles.H5
            : $defaultSize === "title-h6"
            ? Variables.FontSizes.Titles.H6
            : $defaultSize === "body"
            ? Variables.FontSizes.Body
            : $defaultSize === "small"
            ? Variables.FontSizes.Small
            : ""};
    }

    & > * {
        color: ${Mixins.AllColors};
    }

    a {
        color: ${$color === "white" || $linkColor === "white"
            ? Variables.Colors.White
            : $linkColor === "primary" ||
              $linkColor === "secondary" ||
              $linkColor === "success" ||
              $linkColor === "danger" ||
              $linkColor === "warning"
            ? Mixins.ColorsHoverDefault({ $color: $linkColor })
            : $linkColor?.default
            ? $linkColor.default
            : Variables.Colors.Primary500};
        text-decoration: none;

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${$color === "white" || $linkColor === "white"
                    ? Variables.Colors.Gray300
                    : $linkColor === "primary" ||
                      $linkColor === "secondary" ||
                      $linkColor === "success" ||
                      $linkColor === "danger" ||
                      $linkColor === "warning"
                    ? Mixins.ColorsHoverHover({ $color: $linkColor })
                    : $linkColor?.hover
                    ? $linkColor.hover
                    : Variables.Colors.Primary300};
            }

            &:active {
                color: ${$color === "white" || $linkColor === "white"
                    ? Variables.Colors.Gray100
                    : $linkColor === "primary" ||
                      $linkColor === "secondary" ||
                      $linkColor === "success" ||
                      $linkColor === "danger" ||
                      $linkColor === "warning"
                    ? Mixins.ColorsHoverActive({ $color: $linkColor })
                    : $linkColor?.active
                    ? $linkColor.active
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

const StyledH1 = styled.h1<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $display, $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: $display ? "display-h1" : "title-h1",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledH2 = styled.h2<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $display, $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: $display ? "display-h2" : "title-h2",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledH3 = styled.h3<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $display, $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: $display ? "display-h3" : "title-h3",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledH4 = styled.h4<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $display, $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: $display ? "display-h4" : "title-h4",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledH5 = styled.h5<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $display, $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: $display ? "display-h5" : "title-h5",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledH6 = styled.h6<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "title-h6",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledP = styled.p<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "body",
            $fontSize,
            $lineHeight: $lineHeight || Variables.LineHeights.Regular,
            $color,
            $textAlign,
            $linkColor,
        })};
`

const StyledStrong = styled.strong<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({ $lineHeight, $color, $textAlign, $linkColor })};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledEm = styled.em<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({ $lineHeight, $color, $textAlign, $linkColor })};
    font-style: italic;
`

const StyledSmall = styled.small<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "small",
            $fontSize,
            $lineHeight,
            $color,
            $textAlign,
            $linkColor,
        })};
`

const StyledBlockquote = styled.blockquote<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "title-h6",
            $fontSize,
            $lineHeight,
            $color,
            $textAlign,
            $linkColor,
        })};
`

const StyledUl = styled.ul<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    padding: 0;
    margin: 0;
    padding-left: ${Variables.Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "body",
            $fontSize,
            $lineHeight,
            $color,
            $textAlign,
            $linkColor,
        })};

    li {
        padding-inline-start: ${Variables.Spacers.XXS};
    }
`

const StyledOl = styled.ol<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    padding: 0;
    margin: 0;
    padding-left: ${Variables.Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "body",
            $fontSize,
            $lineHeight,
            $color,
            $textAlign,
            $linkColor,
        })};

    li {
        padding-inline-start: ${Variables.Spacers.XXS};
    }
`

const StyledDl = styled.dl<{
    $textAlign?: TextAlignTypes
    $color?: LibColorsTypes | ColorsShortTypes | string
    $linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    $fontSize?: FontSizeTypes | string | number
    $display?: boolean
    $lineHeight?: string | number
}>`
    ${({ $fontSize, $lineHeight, $color, $textAlign, $linkColor }) =>
        FontCommon({
            $defaultSize: "body",
            $fontSize,
            $lineHeight,
            $color,
            $textAlign,
            $linkColor,
        })};

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

export {
    FontCommon,
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
}
