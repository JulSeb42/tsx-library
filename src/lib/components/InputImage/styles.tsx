/*=============================================== InputImage styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    Image,
    Mixins,
    Overlays,
    Radiuses,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledInputImage = styled.div`
    position: relative;
`

const StyledEmptyContainer = styled.span`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    z-index: 0;
    background-color: ${({ theme }) => theme.Gray100};

    &[data-validation="not-passed"] {
        background-color: ${({ theme }) => theme.Danger50};
    }
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

const INPUT_SIZE = 64

const Label = styled.label`
    position: relative;
    border-radius: ${Radiuses.M};
    overflow: hidden;
    cursor: pointer;
    width: ${INPUT_SIZE}px;
    height: ${INPUT_SIZE}px;

    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};

    &.disabled {
        cursor: not-allowed;
    }

    &[data-size="large"] {
        width: 100%;
        height: 200px;
    }

    @media ${Breakpoints.Hover} {
        &:not(.disabled):hover ${StyledHoverContainer} {
            opacity: 1;
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
