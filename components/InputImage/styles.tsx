/*=============================================== InputImage styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import Image from "../Image"

import { ValidationTypes } from "../../utils/common-types"

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
    background-color: ${({ $validation }) =>
        $validation === "not-passed"
            ? Variables.Colors.Danger50
            : Variables.Colors.Gray100};
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
    background-color: ${Variables.Overlays.Plain.White50};
    opacity: 0;
    transition: ${Variables.Transitions.Short};
`

const Label = styled.label<{
    $disabled?: boolean
    $width?: number | string
    $height?: number | string
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    cursor: pointer;

    @media ${Variables.Breakpoints.Hover} {
        &:hover ${StyledHoverContainer} {
            opacity: 1;
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;

            @media ${Variables.Breakpoints.Hover} {
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

export {
    StyledInputImage,
    StyledHoverContainer,
    StyledEmptyContainer,
    Label,
    Img,
    Input,
}
