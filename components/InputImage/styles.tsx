/*=============================================== InputImage styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { Overlays, Transitions, Breakpoints } from "../../Variables"
import Mixins from "../../Mixins"
import Image from "../Image"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ValidationTypes, RadiusesTypes } from "../../utils/common-types"

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
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    ${({ $radius }) => Mixins.BorderRadius({ $borderRadius: $radius })};
    overflow: hidden;
    cursor: pointer;

    @media ${Breakpoints.Hover} {
        &:hover ${StyledHoverContainer} {
            opacity: 1;
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;

            @media ${Breakpoints.Hover} {
                &:hover ${StyledHoverContainer} {
                    opacity: 0;
                }
            }
        `}
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
    StyledHoverContainer,
    StyledEmptyContainer,
    Label,
    Img,
    Input,
])

export {
    StyledInputImage,
    StyledHoverContainer,
    StyledEmptyContainer,
    Label,
    Img,
    Input,
}
