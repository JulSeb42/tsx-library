/*=============================================== Text ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import { stringifyPx } from "../utils"

import Variables from "../Variables"
import Mixins from "./Mixins"

import {
    LibColorsTypes,
    ColorsShortTypes,
    TextAlignTypes,
    ColorsHoverTypes,
} from "../common-types"

/*==================== Styles ====================*/

export const FontCommon = ({
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

/*==================== Components ====================*/

const H1 = ({
    color,
    display,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH1
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
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
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH2
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
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
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH3
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
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
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH4
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
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
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH5
        $color={color}
        $display={display}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH5>
)

const H6 = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH6
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledH6>
)

const P = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledP
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledP>
)

const Strong = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledStrong
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledStrong>
)

const Em = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledEm
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledEm>
)

const Small = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledSmall
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledSmall>
)

const Blockquote = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLQuoteElement>) => (
    <StyledBlockquote
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledBlockquote>
)

const Ul = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLUListElement>) => (
    <StyledUl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledUl>
)

const Ol = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLOListElement>) => (
    <StyledOl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledOl>
)

const Dl = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLDListElement>) => (
    <StyledDl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledDl>
)

const renderComponent = (props: any, tag?: TagTypes) => {
    switch (tag) {
        case "h1":
            return <H1 {...props}>{props.children}</H1>
        case "h2":
            return <H2 {...props}>{props.children}</H2>
        case "h3":
            return <H3 {...props}>{props.children}</H3>
        case "h4":
            return <H4 {...props}>{props.children}</H4>
        case "h5":
            return <H5 {...props}>{props.children}</H5>
        case "h6":
            return <H6 {...props}>{props.children}</H6>
        case "p":
            return <P {...props}>{props.children}</P>
        case "strong":
            return <Strong {...props}>{props.children}</Strong>
        case "em":
            return <Em {...props}>{props.children}</Em>
        case "small":
            return <Small {...props}>{props.children}</Small>
        case "blockquote":
            return <Blockquote {...props}>{props.children}</Blockquote>
        case "ul":
            return <Ul {...props}>{props.children}</Ul>
        case "ol":
            return <Ol {...props}>{props.children}</Ol>
        case "dl":
            return <Dl {...props}>{props.children}</Dl>
        default:
            return <P {...props}>{props.children}</P>
    }
}

const Text = ({ tag, ...props }: AllProps) => {
    return renderComponent(props, tag)
}

export default Text

/*==================== Types ====================*/

const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    strong: "strong",
    em: "em",
    small: "small",
    blockquote: "blockquote",
    ul: "ul",
    ol: "ol",
    dl: "dl",
} as const

type TagTypes = keyof typeof tags

const fontSizes = {
    "display-h1": "display-h1",
    "display-h2": "display-h2",
    "display-h3": "display-h3",
    "display-h4": "display-h4",
    "display-h5": "display-h5",
    "title-h1": "title-h1",
    "title-h2": "title-h2",
    "title-h3": "title-h3",
    "title-h4": "title-h4",
    "title-h5": "title-h5",
    "title-h6": "title-h6",
    body: "body",
    small: "small",
} as const

type FontSizeTypes = keyof typeof fontSizes

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
    textAlign?: TextAlignTypes
    color?: LibColorsTypes | ColorsShortTypes | string
    linkColor?:
        | ColorsHoverTypes
        | {
              default: string
              hover: string
              active: string
          }
    fontSize?: FontSizeTypes | string | number
    lineHeight?: string | number
}

interface Possible1 extends BaseProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5"
    display?: boolean
}

interface Possible2 extends BaseProps {
    tag?:
        | "h6"
        | "p"
        | "strong"
        | "em"
        | "small"
        | "blockquote"
        | "ul"
        | "ol"
        | "dl"
    display?: never
}

type AllProps = Possible1 | Possible2
