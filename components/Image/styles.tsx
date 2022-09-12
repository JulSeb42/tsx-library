/*=============================================== Image component ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Overlays, Spacers } from "../../Variables"
import Mixins from "../../Mixins"
import Text from "../Text"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ObjectFitTypes, RadiusesTypes } from "../../utils/common-types"

// Import this component for lazyloading

const Img = styled.img<{
    $width?: number | string
    $height?: number | string
    $fit?: ObjectFitTypes
    $borderRadius?: RadiusesTypes
}>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    object-fit: ${({ $fit }) => $fit};
    ${Mixins.BorderRadius};
`

export default Img

const StyledImageContainer = styled.figure<{
    $width?: number | string
    $height?: number | string
    $borderRadius?: RadiusesTypes
}>`
    width: ${({ $width }) => ($width ? stringifyPx($width) : "")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "")};
    position: relative;
    ${Mixins.BorderRadius};
    overflow: hidden;
`

const Caption = styled(Text)<{ $background?: "black" | "white" }>`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ $background }) =>
        $background === "white"
            ? Overlays.Plain.White80
            : Overlays.Plain.Black80};
    padding: ${Spacers.M};
    color: ${({ $background, theme }) =>
        $background === "white" ? theme.Black : theme.White};
`

setDefaultTheme([StyledImageContainer, Caption])

export { StyledImageContainer, Caption }
