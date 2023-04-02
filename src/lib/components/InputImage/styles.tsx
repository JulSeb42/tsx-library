/*=============================================== InputImage styles ===============================================*/

import styled from "styled-components"

import {
    Image,
    Mixins,
    Transitions,
    Overlays,
    stringifyPx,
    Breakpoints,
} from "../../"
import type { ValidationTypes, RadiusesTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledInputImage = styled.div`
    position: relative;
`

const StyledEmptyContainer = styled.span<{
    $validation?: ValidationTypes
}>`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    z-index: 0;
    background-color: ${({ $validation, theme }) =>
        $validation === "not-passed" ? theme.Danger50 : theme.Gray100};
`

const StyledHoverContainer = styled.span`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${Overlays.Plain.White50};
    opacity: 0;
    transition: ${Transitions.Short};
`

const Label = styled.label<{
    $disabled?: boolean
    $width?: number | string
    $height?: number | string
    $radius?: RadiusesTypes
}>`
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    ${({ $radius }) => Mixins.BorderRadius({ $borderRadius: $radius })};
    overflow: hidden;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

    @media ${Breakpoints.Hover} {
        &:hover ${StyledHoverContainer} {
            opacity: ${({ $disabled }) => !$disabled && 1};
        }
    }
`

const Img = styled(Image)`
    position: relative;
    z-index: 0;
`

const Input = styled.input`
    display: none;
`

setDefaultTheme([
    StyledInputImage,
    StyledEmptyContainer,
    StyledHoverContainer,
    Label,
    Img,
    Input,
])

export {
    StyledInputImage,
    StyledEmptyContainer,
    StyledHoverContainer,
    Label,
    Img,
    Input,
}
