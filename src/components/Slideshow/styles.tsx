// Imports
import styled, { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "../Variables"
import Flexbox from "../Flexbox"
import Grid from "../Grid"

import {
    styleWrapperProps,
    styleContentProps,
    styleButtonsContainerProps,
    styleButtonLargeProps,
    styleDotProps,
} from "./types"

const Container = styled(Grid)`
    width: 100%;
    gap: ${Variables.Spacers.XS};
    align-items: start;
`

const Wrapper = styled(Flexbox)<styleWrapperProps>`
    width: 100%;
    height: ${({ height }) => (height ? stringifyPx(height) : "60vh")};
    position: relative;
`

const ContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const Content = styled(Flexbox)<styleContentProps>`
    transition: all ${({ speed }) => speed}ms ease;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${({ show }) => (show ? `calc(100% / ${show})` : "100%")};
    transform: ${({ show, active }) =>
        show
            ? `translateX(-${active * (100 / show)}%)`
            : `translateX(-${active * 100}%)`};
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }
`

const ButtonsContainer = styled(Flexbox)<styleButtonsContainerProps>`
    position: absolute;
    z-index: 2;
    padding: 0 ${({ btnLarge }) => (btnLarge ? 0 : Variables.Spacers.XS)};
    height: 100%;
    left: ${({ position }) => (position === "left" ? 0 : "auto")};
    right: ${({ position }) => (position === "right" ? 0 : "auto")};

    ${props =>
        props.hideMobile &&
        css`
            @media (hover: none) and (pointer: coarse) {
                display: none;
            }
        `}
`

const ButtonLarge = styled.button<styleButtonLargeProps>`
    --size: 48px;
    width: var(--size);
    height: var(--size);
    background-color: ${Variables.Overlays.Plain.White50};
    transition: ${Variables.Transitions.Short};
    border: none;
    color: ${Variables.Colors.Primary500};
    border-radius: ${({ position }) =>
        position === "left"
            ? `0 ${Variables.Radiuses.M} ${Variables.Radiuses.M} 0`
            : `${Variables.Radiuses.M} 0 0 ${Variables.Radiuses.M}`};

    &:hover {
        background-color: ${Variables.Overlays.Plain.White80};
    }
`

const Dot = styled.button<styleDotProps>`
    width: ${({ dotSize }) => dotSize}px;
    height: ${({ dotSize }) => dotSize}px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${({ active }) =>
        active ? Variables.Colors.Primary500 : Variables.Colors.Primary300};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${({ active }) =>
            active
                ? Variables.Colors.Primary300
                : Variables.Colors.Primary500};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
    }
`

export {
    Container,
    Wrapper,
    ContentWrapper,
    Content,
    ButtonsContainer,
    ButtonLarge,
    Dot,
}
