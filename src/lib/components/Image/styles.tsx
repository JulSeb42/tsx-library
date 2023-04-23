/*=============================================== Image styles ===============================================*/

import styled from "styled-components"

import { Mixins, Overlays, Spacers, Text } from "../../"

import { setDefaultTheme } from "../../utils"

// Import for lazyloading

const Img = styled.img`
    display: block;
    position: relative;
    z-index: 0;
    ${Mixins.ImgSizeVar("image")}
    ${Mixins.BorderRadiusVar("image")}
    ${Mixins.DataFit()}
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

const Caption = styled(Text)`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: ${Spacers.M};

    &[data-background="black"] {
        background-color: ${Overlays.Plain.Black80};
        color: ${({ theme }) => theme.White};
    }

    &[data-background="white"] {
        background-color: ${Overlays.Plain.White80};
        color: ${({ theme }) => theme.Black};
    }
`

setDefaultTheme([ImgContainer, Caption])

export { ImgContainer, Caption }
