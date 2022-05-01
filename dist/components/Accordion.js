// Packages
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// Components
import * as Font from "./Font";
import Variables from "./Variables";
import Grid from "./Grid";
// Styles
const AccordionContainer = styled(Grid) `
    gap: 0;

    ${props => props.accordionStyle === "basic" &&
    css `
            width: 100%;
            gap: ${Variables.Spacers.XS};

            .content-accordion {
                padding: 0;
            }

            .open-accordion {
                padding: ${Variables.Spacers.XS} 0;
            }

            .content-accordion.open {
                padding-bottom: ${Variables.Spacers.XS};
            }

            & > div:not(:last-child) {
                border-bottom: 1px solid ${Variables.Colors.Primary500};
            }
        `}

    ${props => props.accordionStyle === "rounded" &&
    css `
            width: 100%;
            border-radius: ${Variables.Radiuses.M};
            border: 1px solid ${Variables.Colors.Gray200};
            overflow: hidden;

            & > div:not(:last-child) {
                border-bottom: 1px solid ${Variables.Colors.White};
            }

            .open-accordion,
            .content-accordion.open {
                padding: ${Variables.Spacers.S};
            }

            .open-accordion {
                background-color: ${Variables.Colors.Primary500};
                color: ${Variables.Colors.White};
            }
        `}
`;
const Item = styled.div `
    display: grid;
    grid-template-columns: 1fr;
`;
const Button = styled.button `
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};

    .icon {
        transition: ${Variables.Transitions.Short};
    }

    ${props => props.icon === "plus" &&
    css `
            .icon.open {
                transform: rotate(45deg);
            }
        `}

    ${props => props.icon !== "plus" &&
    css `
            .icon.open {
                transform: rotate(180deg);
            }
        `}
`;
const Content = styled(Font.P) `
    max-height: 0;
    padding: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Short};
    padding: 0 ${Variables.Spacers.S};

    &.open {
        max-height: 600px;
    }
`;
const Accordion = props => {
    return (React.createElement(AccordionContainer, Object.assign({ accordionStyle: props.accordionStyle || "basic" }, props), props.children));
};
const AccordionItem = props => {
    const [isOpen, setIsOpen] = useState(props.isOpen || false);
    return (React.createElement(Item, Object.assign({}, props),
        React.createElement(Button, { className: "open-accordion", onClick: () => setIsOpen(!isOpen), icon: props.icon },
            React.createElement("span", null, props.title),
            props.icon === "plus" ? (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: `icon ${isOpen ? "open" : ""}` },
                React.createElement("path", { d: "M12.6667 7.33333H8.66668V3.33333H7.33334V7.33333H3.33334V8.66666H7.33334V12.6667H8.66668V8.66666H12.6667V7.33333Z", fill: "currentColor" }))) : (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: `icon ${isOpen ? "open" : ""}` },
                React.createElement("path", { d: "M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z", fill: "currentColor" })))),
        React.createElement(Content, { className: `content-accordion ${isOpen ? "open" : ""} ${props.className}` }, props.children)));
};
export { Accordion, AccordionItem };
