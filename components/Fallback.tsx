/*=============================================== Fallback ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "../utils"

import Variables from "./Variables"

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLElement> {
    $width?: number | string
    $height?: number | string
}

/*==================== Component ====================*/

const Fallback = styled.div<Props>`
    position: relative;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    background-color: ${Variables.Colors.Gray500};
`

export default Fallback
