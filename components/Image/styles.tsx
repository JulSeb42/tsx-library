/*=============================================== Image styles ===============================================*/

import styled from "styled-components"

import { Text, Mixins, stringifyPx, Spacers, Overlays } from "../../"
import { RadiusesTypes, ObjectFitTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

// Import for lazyloading

const Img = styled.img<{
    $width?: number | string
    $height?: number | string
    $fit?: ObjectFitTypes
    $borderRadius?: RadiusesTypes
}>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    object-fit: ${({ $fit }) => $fit};
    ${Mixins.BorderRadius};
`

export default Img

const ImgContainer = styled.figure<{
    $width?: number | string
    $height?: number | string
    $borderRadius?: RadiusesTypes
}>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    overflow: hidden;
    ${Mixins.BorderRadius};
`

const Caption = styled(Text).attrs({ as: "figcaption" })<{
    $background?: "black" | "white"
}>`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: ${Spacers.M};
    background-color: ${({ $background }) =>
        $background === "white"
            ? Overlays.Plain.White80
            : Overlays.Plain.Black80};
    color: ${({ $background, theme }) =>
        $background === "white" ? theme.Black : theme.White};
`

setDefaultTheme([ImgContainer, Caption])

export { ImgContainer, Caption }
