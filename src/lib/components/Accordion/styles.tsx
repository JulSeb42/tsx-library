/*=============================================== Accordion styles ===============================================*/

import styled from "styled-components"

import { Mixins, Radiuses, Spacers, Transitions } from "../../"
import { PlusIcon } from "../../icons"

import { setDefaultTheme } from "../../utils"

const StyledIconPlus = styled(PlusIcon)``

const StyledAccordion = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })};

    &[data-variant="basic"] {
        gap: ${Spacers.XXS};
    }

    &[data-variant="rounded"] {
        border-radius: ${Radiuses.M};
        overflow: hidden;
        border: 1px solid ${({ theme }) => theme.Gray200};
    }
`

const Item = styled.div``

const Content = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: ${Transitions.Long};
    color: ${({ theme }) => theme.Font};

    &[data-variant="rounded"] {
        padding: 0 ${Spacers.S};
    }

    &.open {
        max-height: 300vh;

        &[data-variant="basic"] {
            padding: ${Spacers.S} 0;
        }

        &[data-variant="rounded"] {
            padding: ${Spacers.S};
        }
    }
`

const IconContainer = styled.span`
    transition: ${Transitions.Short};

    &.open {
        transform: rotate(45deg);
    }
`

const Button = styled.button`
    width: 100%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    border: none;
    border-bottom: 1px solid;

    &[data-variant="basic"] {
        padding: 0;
        padding-bottom: ${Spacers.XXS};
        border-bottom-color: ${({ theme }) => theme.Gray200};
        background-color: transparent;
        color: ${({ theme }) => theme.Primary500};
        height: 29px;
    }

    &[data-variant="rounded"] {
        padding: ${Spacers.S};
        border-bottom-color: ${({ theme }) => theme.Background};
        background-color: ${({ theme }) => theme.Primary500};
        color: ${({ theme }) => theme.Background};
        height: 49px;

        &.no-border {
            border-bottom: none;
        }
    }
`

setDefaultTheme([
    StyledAccordion,
    StyledIconPlus,
    Item,
    Content,
    IconContainer,
    Button,
])

export { StyledAccordion, StyledIconPlus, Item, Content, IconContainer, Button }
