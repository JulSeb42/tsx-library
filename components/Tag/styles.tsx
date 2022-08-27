/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsShortTypes, LibColorsTypes } from "../../utils/common-types"

import { TagStylesTypes } from "./types"

const StyledTag = styled.span<{
    $tagStyle?: TagStylesTypes
    $color?: ColorsShortTypes | LibColorsTypes | string
    $textColor?: ColorsShortTypes | LibColorsTypes | string
}>`
    font-size: ${Variables.FontSizes.Small};
    padding: ${({ $tagStyle }) =>
        $tagStyle === "pill"
            ? `${Variables.Spacers.XXS} ${Variables.Spacers.M}`
            : `${Variables.Spacers.XXS} ${Variables.Spacers.S}`};
    border-radius: ${({ $tagStyle }) =>
        $tagStyle === "pill" ? Variables.Radiuses.Round : Variables.Radiuses.S};
    background-color: ${Mixins.AllColors};
    color: ${({ $color, $textColor }) =>
        $color === "white"
            ? Variables.Colors.Primary500
            : $textColor
            ? Mixins.AllColors({ $color: $textColor })
            : Variables.Colors.White};
`

export { StyledTag }
