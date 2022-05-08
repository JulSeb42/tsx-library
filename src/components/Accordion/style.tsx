// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import * as Font from "../Font"
import Variables from "../Variables"
import Grid from "../Grid"

// Types
import { containerProps, buttonProps, contentProps } from "./types"

// Styles
const AccordionContainer = styled(Grid)<containerProps>`
    gap: 0;

    ${props =>
        props.accordionStyle === "basic" &&
        css`
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

            & > div:not(:last-of-type) {
                border-bottom: 1px solid ${Variables.Colors.Primary500};
            }
        `}

    ${props =>
        props.accordionStyle === "rounded" &&
        css`
            width: 100%;
            border-radius: ${Variables.Radiuses.M};
            border: 1px solid ${Variables.Colors.Gray200};
            overflow: hidden;

            & > div:not(:last-of-type) {
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
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

const Button = styled.button<buttonProps>`
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

    ${props =>
        props.icon === "plus" &&
        css`
            .icon.open {
                transform: rotate(45deg);
            }
        `}

    ${props =>
        props.icon !== "plus" &&
        css`
            .icon.open {
                transform: rotate(180deg);
            }
        `}
`

const Content = styled(Font.P)<contentProps>`
    max-height: ${props => (props.isOpen ? "600px" : 0)};
    padding: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Short};
    padding: 0 ${Variables.Spacers.S};
`

export { AccordionContainer, Item, Button, Content }
