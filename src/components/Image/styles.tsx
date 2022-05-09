// Packages
import styled from "@emotion/styled"
import { stringifyPx } from "ts-utils-julseb"

// Components
import Variables from "../Variables"
import * as Font from "../Font"

// Types
import { propsFallback, propsContainer } from "./types"

// Styles
const Fallback = styled.div<propsFallback>`
    position: relative;
    width: ${props => stringifyPx(props.width)};
    height: ${props => stringifyPx(props.height)};
    background-color: ${Variables.Colors.Gray500};
`

const Container = styled.div<propsContainer>`
    position: relative;
    width: ${props => props.width ? stringifyPx(props.width) : "100%"};
    height: ${props => props.height ? stringifyPx(props.height) : "auto"};

    & > div {
        position: relative;
        width: ${props => props.width};
        height: ${props => props.height};
    }
`

const Caption = styled(Font.P)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
    background-color: ${Variables.Overlays.Plain.Black50};
    color: ${Variables.Colors.White};
`

export { Fallback, Container, Caption }
