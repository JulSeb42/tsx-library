// Imports
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "../Variables"
import { P } from "../Font"

import { containerProps, fallbackProps } from "./types"

const Fallback = styled.div<fallbackProps>`
    position: relative;
    width: ${({ width }) => (width ? stringifyPx(width) : "100%")};
    height: ${({ height }) => (height ? stringifyPx(height) : "auto")};
    background-color: ${Variables.Colors.Gray500};
`

const Container = styled.div<containerProps>`
    position: relative;
    width: ${({ width }) => (width ? stringifyPx(width) : "100%")};
    height: ${({ height }) => (height ? stringifyPx(height) : "auto")};
`

const Caption = styled(P)`
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${Variables.Overlays.Plain.Black50};
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
    color: ${Variables.Colors.White};
`

export { Fallback, Container, Caption }
