/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import {
    FontSizes,
    LineHeights,
    FontFamilies,
    Radiuses,
    Spacers,
    Transitions,
    Breakpoints,
    FontWeights,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    TextAlignTypes,
    ColorsHoverTypes,
    AllColorsTypes,
    FontSizeTypes,
    CustomFontSizeTypes,
} from "../../utils/common-types"
import { WeightTypes } from "./types"

const FontSize = ({
    $fontSize,
    $defaultSize,
    $customFontSize,
}: {
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
}) => css`
    font-size: ${$customFontSize
        ? stringifyPx($customFontSize)
        : $fontSize === "display-h1"
        ? FontSizes.Display.H1
        : $fontSize === "display-h2"
        ? FontSizes.Display.H2
        : $fontSize === "display-h3"
        ? FontSizes.Display.H3
        : $fontSize === "display-h4"
        ? FontSizes.Display.H4
        : $fontSize === "display-h5"
        ? FontSizes.Display.H5
        : $fontSize === "title-h1"
        ? FontSizes.Titles.H1
        : $fontSize === "title-h2"
        ? FontSizes.Titles.H2
        : $fontSize === "title-h3"
        ? FontSizes.Titles.H3
        : $fontSize === "title-h4"
        ? FontSizes.Titles.H4
        : $fontSize === "title-h5"
        ? FontSizes.Titles.H5
        : $fontSize === "title-h6"
        ? FontSizes.Titles.H6
        : $fontSize === "body"
        ? FontSizes.Body
        : $fontSize === "small"
        ? FontSizes.Small
        : $fontSize
        ? stringifyPx($fontSize)
        : $defaultSize === "display-h1"
        ? FontSizes.Display.H1
        : $defaultSize === "display-h2"
        ? FontSizes.Display.H2
        : $defaultSize === "display-h3"
        ? FontSizes.Display.H3
        : $defaultSize === "display-h4"
        ? FontSizes.Display.H4
        : $defaultSize === "display-h5"
        ? FontSizes.Display.H5
        : $defaultSize === "title-h1"
        ? FontSizes.Titles.H1
        : $defaultSize === "title-h2"
        ? FontSizes.Titles.H2
        : $defaultSize === "title-h3"
        ? FontSizes.Titles.H3
        : $defaultSize === "title-h4"
        ? FontSizes.Titles.H4
        : $defaultSize === "title-h5"
        ? FontSizes.Titles.H5
        : $defaultSize === "title-h6"
        ? FontSizes.Titles.H6
        : $defaultSize === "body"
        ? FontSizes.Body
        : $defaultSize === "small"
        ? FontSizes.Small
        : ""};

    & > * {
        font-size: ${$customFontSize
            ? stringifyPx($customFontSize)
            : $fontSize === "display-h1"
            ? FontSizes.Display.H1
            : $fontSize === "display-h2"
            ? FontSizes.Display.H2
            : $fontSize === "display-h3"
            ? FontSizes.Display.H3
            : $fontSize === "display-h4"
            ? FontSizes.Display.H4
            : $fontSize === "display-h5"
            ? FontSizes.Display.H5
            : $fontSize === "title-h1"
            ? FontSizes.Titles.H1
            : $fontSize === "title-h2"
            ? FontSizes.Titles.H2
            : $fontSize === "title-h3"
            ? FontSizes.Titles.H3
            : $fontSize === "title-h4"
            ? FontSizes.Titles.H4
            : $fontSize === "title-h5"
            ? FontSizes.Titles.H5
            : $fontSize === "title-h6"
            ? FontSizes.Titles.H6
            : $fontSize === "body"
            ? FontSizes.Body
            : $fontSize === "small"
            ? FontSizes.Small
            : $fontSize
            ? stringifyPx($fontSize)
            : $defaultSize === "display-h1"
            ? FontSizes.Display.H1
            : $defaultSize === "display-h2"
            ? FontSizes.Display.H2
            : $defaultSize === "display-h3"
            ? FontSizes.Display.H3
            : $defaultSize === "display-h4"
            ? FontSizes.Display.H4
            : $defaultSize === "display-h5"
            ? FontSizes.Display.H5
            : $defaultSize === "title-h1"
            ? FontSizes.Titles.H1
            : $defaultSize === "title-h2"
            ? FontSizes.Titles.H2
            : $defaultSize === "title-h3"
            ? FontSizes.Titles.H3
            : $defaultSize === "title-h4"
            ? FontSizes.Titles.H4
            : $defaultSize === "title-h5"
            ? FontSizes.Titles.H5
            : $defaultSize === "title-h6"
            ? FontSizes.Titles.H6
            : $defaultSize === "body"
            ? FontSizes.Body
            : $defaultSize === "small"
            ? FontSizes.Small
            : ""};
    }
`

const FontWeight = ({
    $fontWeight,
    $defaultWeight,
}: {
    $fontWeight?: WeightTypes | number
    $defaultWeight: WeightTypes | number
}) => css`
    font-weight: ${$fontWeight === "black"
        ? FontWeights.Black
        : $fontWeight === "bold"
        ? FontWeights.Bold
        : $fontWeight === "regular"
        ? FontWeights.Regular
        : $defaultWeight === "black"
        ? FontWeights.Black
        : $defaultWeight === "bold"
        ? FontWeights.Bold
        : $defaultWeight === "regular"
        ? FontWeights.Regular
        : ""};
`

const FontCommon = ({
    $textAlign,
    $lineHeight = LineHeights.Regular,
    $defaultSize,
    $fontSize,
    $customFontSize,
}: {
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
}) => css`
    text-align: ${$textAlign};
    ${FontSize({
        $fontSize: $fontSize,
        $defaultSize: $defaultSize,
        $customFontSize: $customFontSize,
    })};
    line-height: ${$lineHeight};

    code {
        font-family: ${FontFamilies.Code};
        line-height: ${LineHeights.Code};
        color: ${({ theme }) => theme.Primary500};
        padding: ${Spacers.XXS};
        border-radius: ${Radiuses.XS};
        background-color: ${({ theme }) => theme.Gray50};
    }
`

const StyledH1 = styled.h1<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: WeightTypes | number
}>`
    ${({ $display, $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: $display ? "display-h1" : "title-h1",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledH2 = styled.h2<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: WeightTypes | number
}>`
    ${({ $display, $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: $display ? "display-h2" : "title-h2",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledH3 = styled.h3<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: WeightTypes | number
}>`
    ${({ $display, $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: $display ? "display-h3" : "title-h3",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledH4 = styled.h4<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: WeightTypes | number
}>`
    ${({ $display, $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: $display ? "display-h4" : "title-h4",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledH5 = styled.h5<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $display?: boolean
    $fontWeight?: WeightTypes | number
}>`
    ${({ $display, $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: $display ? "display-h5" : "title-h5",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledH6 = styled.h6<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: WeightTypes | number
}>`
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "title-h6",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledP = styled.p<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: WeightTypes | number
}>`
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "body",
            $fontSize,
            $customFontSize,
        })};
    color: ${({ theme, $color }) =>
        theme.AllColors({
            $color: $color,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "regular", $fontWeight: $fontWeight })};

    & > * {
        color: ${({ theme, $color }) =>
            theme.AllColors({
                $color: $color,
            })};
    }

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledStrong = styled.strong<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontWeight?: WeightTypes | number
}>`
    ${FontCommon({})};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "black", $fontWeight: $fontWeight })};
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

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledEm = styled.em<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontWeight?: WeightTypes | number
}>`
    ${FontCommon({})};
    font-style: italic;
    color: ${({ theme, $color }) =>
        theme.AllColors({
            $color: $color,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "regular", $fontWeight: $fontWeight })};

    & > * {
        color: ${({ theme, $color }) =>
            theme.AllColors({
                $color: $color,
            })};
    }

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledSmall = styled.small<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: WeightTypes | number
}>`
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "small",
            $fontSize,
            $customFontSize,
        })};
    color: ${({ theme, $color }) =>
        theme.AllColors({
            $color: $color,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "regular", $fontWeight: $fontWeight })};

    & > * {
        color: ${({ theme, $color }) =>
            theme.AllColors({
                $color: $color,
            })};
    }

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledBlockquote = styled.blockquote<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: WeightTypes | number
}>`
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "title-h6",
            $fontSize,
            $customFontSize,
        })};
    color: ${({ theme, $color }) =>
        theme.AllColors({
            $color: $color,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "regular", $fontWeight: $fontWeight })};
    font-style: italic;

    & > * {
        color: ${({ theme, $color }) =>
            theme.AllColors({
                $color: $color,
            })};
    }

    a {
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault({ $color: $linkColor })};
        transition: ${Transitions.Short};
        text-decoration: none;

        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover({ $color: $linkColor })};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive({ $color: $linkColor })};
            }
        }
    }
`

const StyledUl = styled.ul<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: WeightTypes | number
}>`
    padding: 0;
    margin: 0;
    padding-left: ${Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "body",
            $fontSize,
            $customFontSize,
        })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "regular", $fontWeight: $fontWeight })};

    li {
        padding-inline-start: ${Spacers.XXS};
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

        a {
            color: ${({ theme, $linkColor }) =>
                theme.ColorsHoverDefault({ $color: $linkColor })};
            transition: ${Transitions.Short};
            text-decoration: none;

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverHover({ $color: $linkColor })};
                }

                &:active {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverActive({ $color: $linkColor })};
                }
            }
        }
    }
`

const StyledOl = styled.ol<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeight?: WeightTypes | number
}>`
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "body",
            $fontSize,
            $customFontSize,
        })};
    padding: 0;
    margin: 0;
    padding-left: ${Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};
    ${({ $fontWeight }) =>
        FontWeight({ $defaultWeight: "regular", $fontWeight: $fontWeight })};

    li {
        padding-inline-start: ${Spacers.XXS};
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

        a {
            color: ${({ theme, $linkColor }) =>
                theme.ColorsHoverDefault({ $color: $linkColor })};
            transition: ${Transitions.Short};
            text-decoration: none;

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverHover({ $color: $linkColor })};
                }

                &:active {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverActive({ $color: $linkColor })};
                }
            }
        }
    }
`

const StyledDl = styled.dl<{
    $color?: AllColorsTypes
    $linkColor?: ColorsHoverTypes
    $fontSize?: FontSizeTypes
    $defaultSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $textAlign?: TextAlignTypes
    $lineHeight?: string | number
    $fontWeightDt?: WeightTypes | number
    $fontWeightDd?: WeightTypes | number
}>`
    ${({ $textAlign, $lineHeight, $fontSize, $customFontSize }) =>
        FontCommon({
            $textAlign,
            $lineHeight,
            $defaultSize: "body",
            $fontSize,
            $customFontSize,
        })};

    dt {
        ${({ $fontWeightDt }) =>
            FontWeight({
                $defaultWeight: "black",
                $fontWeight: $fontWeightDt,
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

        a {
            color: ${({ theme, $linkColor }) =>
                theme.ColorsHoverDefault({ $color: $linkColor })};
            transition: ${Transitions.Short};
            text-decoration: none;

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverHover({ $color: $linkColor })};
                }

                &:active {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverActive({ $color: $linkColor })};
                }
            }
        }
    }

    dd {
        ${({ $fontWeightDd }) =>
            FontWeight({
                $defaultWeight: "regular",
                $fontWeight: $fontWeightDd,
            })};
        padding-inline-start: ${Spacers.M};
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

        a {
            color: ${({ theme, $linkColor }) =>
                theme.ColorsHoverDefault({ $color: $linkColor })};
            transition: ${Transitions.Short};
            text-decoration: none;

            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverHover({ $color: $linkColor })};
                }

                &:active {
                    color: ${({ theme, $linkColor }) =>
                        theme.ColorsHoverActive({ $color: $linkColor })};
                }
            }
        }

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
])

export {
    FontSize,
    FontCommon,
    FontWeight,
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
