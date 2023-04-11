/*=============================================== Placeholder styles ===============================================*/

import styled from "styled-components"

import { Mixins, stringifyPx } from "../../"
import type {
    AllColorsTypes,
    OverlayTypes,
    ShadowsTypes,
    RadiusesTypes,
    FontSizeTypes,
    FontWeightTypes,
    PaddingTypes,
    CustomFontSizeTypes,
} from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledPlaceholder = styled.div<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    $background?: AllColorsTypes | OverlayTypes
    $shadow?: ShadowsTypes
    $borderRadius?: RadiusesTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $fontWeight?: FontWeightTypes
    $textColor?: AllColorsTypes
    $padding?: PaddingTypes
}>`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height, $aspectRatio }) =>
        !$aspectRatio && $height && stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    background: ${({ $background, theme }) =>
        $background === "overlay-black-50" ||
        $background === "overlay-black-80" ||
        $background === "overlay-gradient-black" ||
        $background === "overlay-gradient-white" ||
        $background === "overlay-white-50" ||
        $background === "overlay-white-80"
            ? Mixins.Overlay({ $overlay: $background })
            : theme.AllColors({ $color: $background })};
    ${Mixins.Shadow};
    ${Mixins.BorderRadius};
    ${Mixins.FontSize};
    ${Mixins.FontWeight};
    ${Mixins.Padding};
`

setDefaultTheme([StyledPlaceholder])

export { StyledPlaceholder }
