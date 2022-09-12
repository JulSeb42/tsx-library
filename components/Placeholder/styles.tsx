/*=============================================== Placeholder styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    AllColorsTypes,
    RadiusesTypes,
    ShadowsTypes,
    OverlayTypes,
} from "../../utils/common-types"

const StyledPlaceholder = styled.div<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    $background?: AllColorsTypes | OverlayTypes
    $shadow?: ShadowsTypes
    $borderRadius?: RadiusesTypes | number
}>`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height, $aspectRatio }) =>
        !$aspectRatio && stringifyPx($height)};
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
`

setDefaultTheme([StyledPlaceholder])

export { StyledPlaceholder }
