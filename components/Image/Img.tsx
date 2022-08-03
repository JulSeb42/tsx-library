/*=============================================== Image component ===============================================*/

// Import this component for lazyloading

/*==================== Imports ====================*/

import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import { ObjectFitTypes } from "../common-types"

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLImageElement> {
    $width?: number | string
    $height?: number | string
    $fit?: ObjectFitTypes
}

/*==================== Component ====================*/

const Img = styled.img<StyleProps>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    object-fit: ${({ $fit }) => $fit};
`

export default Img
