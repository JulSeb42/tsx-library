// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const Tag = styled.span<props>`
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    justify-self: ${({ justify }) => justify};
    padding: ${Variables.Spacers.XXS} ${Variables.Spacers.S};
    border-radius: ${({ pill }) =>
        pill ? Variables.Radiuses.Round : Variables.Radiuses.M};
    font-size: ${Variables.FontSizes.Small};
    background-color: ${Mixins.Color};
    color: ${({ color, textColor }) =>
        textColor
            ? Mixins.TextColor
            : color === "white"
            ? Variables.Colors.Primary500
            : Variables.Colors.White};
`

Tag.defaultProps = {
    color: "primary",
    justify: "start",
}

export default Tag
