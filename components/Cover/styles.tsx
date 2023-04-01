/*=============================================== Cover styles ===============================================*/

import styled, { css } from "styled-components"

import { stringifyPx, Overlays, Mixins, Image } from "../../"
import type {
    SpacersTypes,
    AllColorsTypes,
    PaddingTypes,
    FlexAlignContentTypes,
    FlexAlignItemsTypes,
    FlexJustifyContentTypes,
    FlexJustifyItemsTypes,
    TextAlignTypes,
    FlexDirectionTypes,
    FlexWrapTypes,
} from "../../types"

import { setDefaultTheme } from "../../utils"

const CoverImage = styled(Image).attrs({ width: "100%", fit: "cover" })`
    position: fixed;
    top: 0;
    left: 0;
`

const Content = styled.div<{
    $height?: number | string
    $gap?: SpacersTypes
    $color?: AllColorsTypes
    $flexDirection?: FlexDirectionTypes
    $justifyContent?: FlexJustifyContentTypes
    $justifyItems?: FlexJustifyItemsTypes
    $alignContent?: FlexAlignContentTypes
    $alignItems?: FlexAlignItemsTypes
    $padding?: PaddingTypes
    $textAlign?: TextAlignTypes
    $flexWrap?: FlexWrapTypes
    $columnGap?: SpacersTypes
    $rowGap?: SpacersTypes
}>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    ${({
        $justifyContent,
        $justifyItems,
        $alignContent,
        $alignItems,
        $gap,
        $padding,
        $flexWrap,
        $flexDirection,
        $columnGap,
        $rowGap,
    }) =>
        Mixins.Flexbox({
            $flexDirection,
            $alignContent: $alignContent,
            $justifyItems: $justifyItems,
            $justifyContent: $justifyContent,
            $alignItems: $alignItems,
            $gap,
            $padding,
            $flexWrap,
            $columnGap,
            $rowGap,
        })};
    text-align: ${({ $textAlign }) => $textAlign};
    color: ${({ theme }) => theme.AllColors};

    & > * {
        position: relative;
        top: 0;
    }
`

const StyledCover = styled.div<{
    $overlay?: "black" | "white" | "gradient-black" | "gradient-white" | "none"
    $height?: number | string
}>`
    position: relative;
    width: 100%;
    height: ${({ $height }) => stringifyPx($height)};

    ${({ $overlay }) =>
        $overlay &&
        $overlay !== "none" &&
        css`
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                background: ${$overlay === "white"
                    ? Overlays.Plain.White50
                    : $overlay === "gradient-black"
                    ? Overlays.Gradient.Black
                    : $overlay === "gradient-white"
                    ? Overlays.Gradient.White
                    : Overlays.Plain.Black50};
            }
        `}
`

setDefaultTheme([StyledCover, Content, CoverImage])

export { StyledCover, Content, CoverImage }
