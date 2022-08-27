/*=============================================== Image component ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../../Variables"
import Text from "../Text"

import { ObjectFitTypes } from "../../utils/common-types"

// Import this component for lazyloading

const Img = styled.img<{
    $width?: number | string
    $height?: number | string
    $fit?: ObjectFitTypes
}>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    object-fit: ${({ $fit }) => $fit};
`

export default Img

const StyledImageContainer = styled.div<{
    $width?: number | string
    $height?: number | string
}>`
    width: ${({ $width }) => ($width ? stringifyPx($width) : "")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "")};
    position: relative;
`

const Caption = styled(Text)<{ $background?: "black" | "white" }>`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ $background }) =>
        $background === "white"
            ? Variables.Overlays.Plain.White80
            : Variables.Overlays.Plain.Black80};
    padding: ${Variables.Spacers.M};
    color: ${({ $background }) =>
        $background === "white"
            ? Variables.Colors.Black
            : Variables.Colors.White};
`

export { StyledImageContainer, Caption }
