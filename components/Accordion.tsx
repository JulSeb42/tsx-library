/*=============================================== Accordion ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "../Variables"
import Text from "./Text"
import Mixins from "./Mixins"

import PlusIcon from "../icons/PlusIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import Icon from "./Icon"

import { AccordionItemProps } from "../component-props"

/*==================== Component ====================*/

const AccordionItem = ({
    isOpen = false,
    icon = "plus",
    title,
    content,
    $accordionStyle = "basic",
    $noBorder,
    customIcon,
}: ItemProps) => {
    const [open, setOpen] = useState(isOpen)

    return (
        <Item>
            <Button
                onClick={() => setOpen(!open)}
                $isOpen={open}
                $icon={icon}
                $accordionStyle={$accordionStyle}
                $noBorder={$noBorder}
                $hasIconCustom={customIcon ? true : false}
            >
                {title}

                <IconContainer>
                    {customIcon ? (
                        <Icon src={customIcon} size={20} />
                    ) : icon === "plus" ? (
                        <StyledIconPlus size={20} color="currentColor" />
                    ) : (
                        icon === "chevron" && <StyledIconChevron size={20} />
                    )}
                </IconContainer>
            </Button>

            <Content
                as={typeof content === "string" ? Text : "div"}
                $isOpen={open}
                $accordionStyle={$accordionStyle}
            >
                {content}
            </Content>
        </Item>
    )
}

const Accordion = ({
    options = {
        style: "basic",
        icon: "plus",
    },
    items,
    ...props
}: Props) => (
    <StyledAccordion $accordionStyle={options.style} {...props}>
        {items.map((item, i) => (
            <AccordionItem
                icon={options.icon}
                isOpen={item.isOpen}
                title={item.title}
                content={item.content}
                $accordionStyle={options.style}
                customIcon={options.customIcon}
                $noBorder={
                    options.style === "rounded" &&
                    i === items.length - 1 &&
                    true
                }
                key={uuid()}
            />
        ))}
    </StyledAccordion>
)

export default Accordion

/*==================== Types ====================*/

const accordionStyle = {
    basic: "basic",
    rounded: "rounded",
} as const

type AccordionStyleTypes = keyof typeof accordionStyle

const icons = {
    plus: "plus",
    chevron: "chevron",
} as const

type IconTypes = keyof typeof icons

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    items: AccordionItemProps[]
    options?: {
        style?: AccordionStyleTypes
        icon?: IconTypes
        customIcon?: string
    }
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: IconTypes
    title: string
    isOpen?: boolean
    content?: string | React.ReactNode
    $accordionStyle?: AccordionStyleTypes
    $noBorder?: boolean
    customIcon?: string
}

/*==================== Styles ====================*/

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
