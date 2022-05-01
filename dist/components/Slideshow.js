// Packages
import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// Components
import Variables from "./Variables";
import Icon from "./Icon";
import Flexbox from "./Flexbox";
import Grid from "./Grid";
import ButtonIcon from "./ButtonIcon";
// Styles
const Container = styled(Grid) `
    width: 100%;
    gap: ${Variables.Spacers.XS};
    align-items: start;
`;
const Wrapper = styled(Flexbox) `
    width: 100%;
    height: ${props => props.height};
    position: relative;
`;
const ContentWrapper = styled.div `
    overflow: hidden;
    width: 100%;
    height: 100%;
`;
const Content = styled(Flexbox) `
    transition: all ${props => `${props.speed}ms`} ease;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: ${props => (props.show ? `calc(100% / ${props.show})` : "100%")};
    transform: ${props => props.show
    ? `translateX(-${props.active * (100 / props.show)}%)`
    : `translateX(-${props.active * 100}%)`};
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
`;
const ButtonsContainer = styled(Flexbox) `
    position: absolute;
    z-index: 2;
    padding: 0 ${props => (props.btnLarge ? 0 : Variables.Spacers.XS)};
    height: 100%;
    left: ${props => (props.position === "left" ? 0 : "auto")};
    right: ${props => (props.position === "right" ? 0 : "auto")};

    ${props => props.hideMobile &&
    css `
            @media (hover: none) and (pointer: coarse) {
                display: none;
            }
        `}
`;
const ButtonLarge = styled.button `
    --size: 48px;
    width: var(--size);
    height: var(--size);
    background-color: ${Variables.Overlays.Plain.White50};
    transition: ${Variables.Transitions.Short};
    border: none;
    color: ${Variables.Colors.Primary500};
    border-radius: ${props => props.position === "left"
    ? `0 ${Variables.Radiuses.M} ${Variables.Radiuses.M} 0`
    : `${Variables.Radiuses.M} 0 0 ${Variables.Radiuses.M}`};

    &:hover {
        background-color: ${Variables.Overlays.Plain.White80};
    }
`;
const PaginationContainer = styled(Flexbox) `
    width: 100%;
`;
const Dot = styled.button `
    width: ${props => `${props.dotSize}px`};
    height: ${props => `${props.dotSize}px`};
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.active
    ? Variables.Colors.Primary500
    : Variables.Colors.Primary300};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${props => props.active
    ? Variables.Colors.Primary300
    : Variables.Colors.Primary500};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
    }
`;
const SlideshowButton = props => {
    return (React.createElement(ButtonsContainer, { align: "center", position: props.position, btnLarge: props.btnLarge, hideMobile: props.hideMobile }, props.btnLarge ? (React.createElement(ButtonLarge, { position: props.position, onClick: props.onClick },
        React.createElement(Icon, { name: props.position === "left"
                ? "chevron-left"
                : "chevron-right", size: 32 }))) : (React.createElement(ButtonIcon, { size: props.btnSize || 32, color: props.btnColor || "primary", icon: props.position === "left"
            ? "chevron-left"
            : "chevron-right", onClick: props.onClick }))));
};
const Slideshow = props => {
    // Slideshow with buttons
    const [active, setActive] = useState(0);
    const length = props.children.length;
    const handleNext = () => {
        if (!props.show) {
            setActive(active < length - 1 ? active + 1 : 0);
        }
        else {
            setActive(active < length + props.show ? active + props.show : 0);
        }
    };
    const handlePrev = () => {
        if (!props.show) {
            setActive(active > 0 ? active - 1 : length - 1);
        }
        else {
            setActive(active > 0
                ? active - props.show
                : length + props.show + (props.show - 1));
        }
    };
    // Automatic slideshow
    const autoSlideshow = useCallback(() => {
        setActive(active < length - 1 ? active + 1 : 0);
    }, [active, length]);
    useEffect(() => {
        if (props.auto) {
            setInterval(() => autoSlideshow(), props.auto);
        }
    }, [props.auto, autoSlideshow]);
    // Swipe
    const [touchPosition, setTouchPosition] = useState(null);
    const handleTouchStart = (e) => setTouchPosition(e.touches[0].clientX);
    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }
        const diff = touchPosition - e.touches[0].clientX;
        if (diff > 5) {
            handleNext();
        }
        if (diff < -5) {
            handlePrev();
        }
        setTouchPosition(null);
    };
    return (React.createElement(Container, null,
        React.createElement(Wrapper, { direction: "column", height: props.height || "60vh" },
            (props.controls || props.controlsLarge) && (React.createElement(SlideshowButton, { position: "left", onClick: handlePrev, btnLarge: props.controlsLarge, hideMobile: props.hideButtonsMobile })),
            React.createElement(ContentWrapper, { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove },
                React.createElement(Content, { show: props.show, active: active, speed: props.speed || 250 }, props.children)),
            (props.controls || props.controlsLarge) && (React.createElement(SlideshowButton, { position: "right", onClick: handleNext, btnLarge: props.controlsLarge, hideMobile: props.hideButtonsMobile }))),
        props.pagination && (React.createElement(PaginationContainer, { justify: "center", align: "center", gap: props.gapDots || Variables.Spacers.XS }, props.children.map((_, i) => (React.createElement(Dot, { onClick: () => setActive(i), dotSize: props.dotSize || 8, active: active === i && true, key: i })))))));
};
export default Slideshow;
