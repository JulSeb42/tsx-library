/*=============================================== Accordion styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"
import PlusIcon from "../../icons/PlusIcon"
import ChevronDownIcon from "../../icons/ChevronDownIcon"

import { AccordionStyleTypes, IconTypes } from "./types"

const StyledIconPlus = styled(PlusIcon)``

const StyledIconChevron = styled(ChevronDownIcon)``

const StyledAccordion = styled.div<{
    $accordionStyle?: AccordionStyleTypes
    $isOpen?: boolean
}>`
    position: relative;
    ${({ $accordionStyle }) =>
        Mixins.Grid({
            $gap: $accordionStyle === "rounded" ? 0 : "xxs",
        })};

    ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" &&
        css`
            border-radius: ${Variables.Radiuses.M};
            overflow: hidden;
            border: 1px solid ${Variables.Colors.Gray200};
            gap: 0;
        `}
`

const Item = styled.div``

const Content = styled.div<{
    $isOpen?: boolean
    $accordionStyle?: AccordionStyleTypes
}>`
    max-height: ${({ $isOpen }) => ($isOpen ? "600px" : 0)};
    overflow: hidden;
    transition: ${Variables.Transitions.Long};

    ${({ $accordionStyle, $isOpen }) =>
        $accordionStyle === "rounded"
            ? css`
                  padding: ${$isOpen
                      ? Variables.Spacers.S
                      : `0 ${Variables.Spacers.S}`};
              `
            : css`
                  padding: ${$isOpen ? `${Variables.Spacers.XS} 0` : 0};
              `}
`

const IconContainer = styled.span``

const Button = styled.button<{
    $accordionStyle?: AccordionStyleTypes
    $isOpen?: boolean
    $icon?: IconTypes
    $noBorder?: boolean
    $hasIconCustom?: boolean
}>`
    width: 100%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    padding: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" ? Variables.Spacers.S : 0};
    border: none;
    border-bottom: 1px solid
        ${({ $accordionStyle }) =>
            $accordionStyle === "rounded"
                ? Variables.Colors.White
                : Variables.Colors.Gray200};
    background-color: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded"
            ? Variables.Colors.Primary500
            : "transparent"};
    padding-bottom: ${({ $accordionStyle }) =>
        $accordionStyle === "basic" && Variables.Spacers.XXS};
    color: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded"
            ? Variables.Colors.White
            : Variables.Colors.Primary500};
    height: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" ? "49px" : "29px"};

    ${({ $noBorder }) =>
        $noBorder &&
        css`
            border-bottom: none;
        `}

    ${IconContainer} {
        transition: ${Variables.Transitions.Short};

        ${({ $isOpen, $icon, $hasIconCustom }) =>
            !$hasIconCustom &&
            $isOpen &&
            css`
                transform: rotate(${$icon === "chevron" ? 180 : 45}deg);
            `}
    }
`

export {
    StyledIconPlus,
    StyledIconChevron,
    StyledAccordion,
    Item,
    Content,
    IconContainer,
    Button,
}
