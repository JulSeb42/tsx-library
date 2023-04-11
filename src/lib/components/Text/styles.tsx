/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"

import { setDefaultTheme } from "../../utils"
import { LineHeights, FontFamilies, Spacers, Breakpoints, Mixins } from "../../"
import type {
    AllColorsTypes,
    FontSizeTypes,
    CustomFontSizeTypes,
    TextAlignTypes,
    FontWeightTypes,
} from "../../types"
import type { LinkStyleTypes, CodeStyleTypes } from "./types"

const FontCommon = ({
    $textAlign,
    $lineHeight = LineHeights.Regular,
    $fontSize,
    $customFontSize,
    $maxLines,
    $linkStyles,
    $fontWeight,
    $color = "currentColor",
    $codeStyles,
}: {
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $maxLines?: number
    $linkStyles?: LinkStyleTypes
    $fontWeight?: FontWeightTypes
    $color?: AllColorsTypes
    $codeStyles?: CodeStyleTypes
}) => css`
    text-align: ${$textAlign};
    ${Mixins.FontSize({ $fontSize, $customFontSize })};
    line-height: ${$lineHeight};
    ${Mixins.FontWeight({ $fontWeight: $fontWeight })};
    color: ${({ theme }) => theme.AllColors({ $color })};

    & > * {
        ${Mixins.FontSize({ $fontSize, $customFontSize })};
        color: ${({ theme }) =>
            theme.AllColors({
                $color: $color,
            })};
    }

    ${$maxLines &&
    css`
        ${$maxLines === 1
            ? css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              `
            : css`
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: ${$maxLines};
                  line-clamp: ${$maxLines};
                  -webkit-box-orient: vertical;
              `}
    `}

    a, button {
        color: ${({ theme }) =>
            theme.ColorsHoverDefault({
                $color: $linkStyles?.color || "primary",
            })};
        ${Mixins.Transition({ $transition: $linkStyles?.transition })};
        ${Mixins.TextDecoration({
            $textDecoration: $linkStyles?.textDecorationDefault || "none",
        })};
        padding: 0;
        border: none;
        background-color: transparent;
        font-family: ${FontFamilies.Body};
        ${Mixins.FontWeight({
            $fontWeight: $linkStyles?.fontWeight || "black",
        })};

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme }) =>
                    theme.ColorsHoverHover({
                        $color: $linkStyles?.color || "primary",
                    })};
                ${Mixins.TextDecoration({
                    $textDecoration: $linkStyles?.textDecorationHover || "none",
                })};
            }

            &:active {
                color: ${({ theme }) =>
                    theme.ColorsHoverActive({
                        $color: $linkStyles?.color || "primary",
                    })};
                ${Mixins.TextDecoration({
                    $textDecoration:
                        $linkStyles?.textDecorationActive || "none",
                })};
            }
        }
    }

    code {
        font-family: ${FontFamilies.Code};
        line-height: ${LineHeights.Code};
        color: ${({ theme }) =>
            theme.AllColors({ $color: $codeStyles?.color || "primary" })};
        ${Mixins.Padding({
            $padding: $codeStyles?.padding || "xxs",
        })};
        ${Mixins.BorderRadius({
            $borderRadius: $codeStyles?.borderRadius || "xs",
        })};
        background-color: ${({ theme }) =>
            theme.AllColors({
                $color: $codeStyles?.backgroundColor || "gray-50",
            })};
    }
`

const StyledH1 = styled.h1<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $display,
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize
                ? $fontSize
                : $display
                ? "display-h1"
                : "title-h1",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "black",
        })};
    color: ${({ theme, $color }) =>
        theme.AllColors({
            $color: $color,
        })};

    & > * {
        color: ${({ theme, $color }) =>
            theme.AllColors({
                $color: $color,
            })};
    }
`

const StyledH2 = styled.h2<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $display,
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize
                ? $fontSize
                : $display
                ? "display-h2"
                : "title-h2",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "black",
        })};
`

const StyledH3 = styled.h3<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $display,
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize
                ? $fontSize
                : $display
                ? "display-h3"
                : "title-h3",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "black",
        })};
`

const StyledH4 = styled.h4<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $display,
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize
                ? $fontSize
                : $display
                ? "display-h4"
                : "title-h4",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "black",
        })};
`

const StyledH5 = styled.h5<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $display,
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize
                ? $fontSize
                : $display
                ? "display-h5"
                : "title-h5",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "black",
        })};
`

const StyledH6 = styled.h6<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize ? $fontSize : "title-h6",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "black",
        })};
`

const StyledP = styled.p<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize || "body",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $codeStyles,
            $color,
            $fontWeight: $fontWeight || "regular",
        })};
`

const StyledStrong = styled.strong<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontWeight?: FontWeightTypes
    $maxLines?: number
}>`
    ${({ $linkStyles, $fontWeight, $color }) =>
        FontCommon({
            $linkStyles,
            $fontWeight: $fontWeight || "black",
            $color,
        })};
`

const StyledEm = styled.em<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontWeight?: FontWeightTypes
    $maxLines?: number
}>`
    ${({ $linkStyles, $fontWeight, $color }) =>
        FontCommon({ $linkStyles, $fontWeight, $color })};
    font-style: italic;
`

const StyledSmall = styled.small<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize || "small",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $fontWeight,
            $color,
            $codeStyles,
        })};
`

const StyledBlockquote = styled.blockquote<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize || "title-h6",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $fontWeight,
            $color,
            $codeStyles,
        })};
    font-style: italic;
`

const StyledUl = styled.ul<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    padding: 0;
    margin: 0;
    padding-left: ${Spacers.S};
    ${Mixins.Flexbox({
        $gap: "xxs",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize || "body",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $fontWeight,
            $color,
            $codeStyles,
        })};

    li {
        padding-inline-start: ${Spacers.XXS};
    }
`

const StyledOl = styled.ol<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $fontWeight,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize || "body",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $fontWeight,
            $color,
            $codeStyles,
        })};
    padding: 0;
    margin: 0;
    padding-left: ${Spacers.S};
    ${Mixins.Flexbox({
        $gap: "xxs",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};

    li {
        padding-inline-start: ${Spacers.XXS};
    }
`

const StyledDl = styled.dl<{
    $color?: AllColorsTypes
    $linkStyles?: LinkStyleTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeightDt?: FontWeightTypes
    $fontWeightDd?: FontWeightTypes
    $maxLines?: number
    $codeStyles?: CodeStyleTypes
}>`
    ${({
        $textAlign,
        $lineHeight,
        $fontSize,
        $customFontSize,
        $maxLines,
        $linkStyles,
        $color,
        $codeStyles,
    }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $fontSize: $fontSize || "body",
            $customFontSize,
            $maxLines,
            $linkStyles,
            $color,
            $codeStyles,
        })};

    dt {
        ${({ $fontWeightDt }) =>
            Mixins.FontWeight({ $fontWeight: $fontWeightDt || "black" })};
    }

    dd {
        ${({ $fontWeightDd }) =>
            Mixins.FontWeight({ $fontWeight: $fontWeightDd })};
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
