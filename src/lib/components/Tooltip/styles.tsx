/*=============================================== Tooltip styles ===============================================*/

import styled from "styled-components"

import {
    FontWeights,
    Overlays,
    FontSizes,
    Spacers,
    Transitions,
    ThemeDark,
    Radiuses,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledTooltip = styled.span`
    display: inline;
    position: relative;
    border-bottom: 1px dotted currentColor;
`

const BaseTip = styled.span`
    min-width: 60px;
    background-color: ${({ theme }) =>
        theme === ThemeDark ? Overlays.Plain.White80 : Overlays.Plain.Black80};
    color: ${({ theme }) => theme.Background};
    text-align: center;
    padding: ${Spacers.XS};
    border-radius: ${Radiuses.S};
    bottom: 125%;
    font-size: ${FontSizes.Small};
    font-weight: ${FontWeights.Regular};
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    transition: ${Transitions.Short};
    position: absolute;

    &:after {
        content: "";
        bottom: calc(${Spacers.XS} * -1 - 2px);
        margin-left: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: ${({ theme }) =>
                theme === ThemeDark
                    ? Overlays.Plain.White80
                    : Overlays.Plain.Black80}
            transparent transparent transparent;
        opacity: 0;
        visibility: hidden;
        z-index: 1;
        transition: ${Transitions.Short};
        position: absolute;
    }

    &.visible {
        opacity: 1;
        visibility: visible;

        &:after {
            opacity: 1;
            visibility: visible;
        }
    }
`

const Tip = styled(BaseTip)<{ $width: number }>`
    width: ${({ $width }) => $width}px;
    left: ${({ $width }) => `calc(50% - ${$width}px / 2)`};

    &:after {
        left: ${({ $width }) => `calc(${$width}px / 2 - 5px)`};
    }
`

setDefaultTheme([StyledTooltip, Tip])

export { StyledTooltip, Tip }
