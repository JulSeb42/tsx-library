/*=============================================== Image styles ===============================================*/

import styled from "styled-components"

import { Mixins, Overlays, Spacers, Text } from "../../"

import { setDefaultTheme } from "../../utils"

// Import for lazyloading

const Img = styled.img`
    display: block;
    position: relative;
    z-index: 0;
    width: var(--image-width, 100%);
    height: var(--image-height, auto);
    ${Mixins.DataFit()};
    ${Mixins.BorderRadiusVar("image")};
`

export default Img

const ImgContainer = styled.figure`
    display: block;
    position: relative;
    z-index: 0;
    width: var(--image-width, 100%);
    height: var(--image-height, auto);
    overflow: hidden;
    ${Mixins.BorderRadiusVar("image")};
`

const CaptionBase = styled(Text).attrs({ as: "figcaption" })`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: ${Spacers.M};
`

const Caption = styled(CaptionBase)<{
    $background?: "black" | "white"
}>`
    background-color: ${({ $background }) =>
        $background === "white"
            ? Overlays.Plain.White80
            : Overlays.Plain.Black80};
    color: ${({ $background, theme }) =>
        $background === "white" ? theme.Black : theme.White};
`

setDefaultTheme([ImgContainer, Caption])

export { ImgContainer, Caption }
