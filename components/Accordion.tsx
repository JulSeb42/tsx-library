/*=============================================== Accordion ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import { P } from "./Font"
import Mixins from "./Mixins"

import PlusIcon from "../icons/PlusIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"

import { AccordionItemProps } from "./component-props"

/*==================== Styles ====================*/

const StyledIconPlus = styled(PlusIcon)``

const StyledIconChevron = styled(ChevronDownIcon)``

const Container = styled.div<StyleProps>`
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

const Content = styled.div<ContentStyleProps>`
    max-height: ${({ $isOpen }) => ($isOpen ? "600px" : 0)};
    overflow: hidden;
    transition: ${Variables.Transitions.Long};

    ${({ $accordionStyle, $isOpen }) =>
        $accordionStyle === "rounded"
            ? css`
                  padding: ${$isOpen ? Variables.Spacers.S : `0 ${Variables.Spacers.S}`};
              `
            : css`
                  padding: ${$isOpen ? `${Variables.Spacers.XS} 0` : 0};
              `}
`

const Button = styled.button<ButtonProps>`
    width: 100%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    padding: ${({ $accordionStyle }) => ($accordionStyle === "rounded" ? Variables.Spacers.S : 0)};
    border: none;
    border-bottom: 1px solid
        ${({ $accordionStyle }) => ($accordionStyle === "rounded" ? Variables.Colors.White : Variables.Colors.Gray200)};
    background-color: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" ? Variables.Colors.Primary500 : "transparent"};
    padding-bottom: ${({ $accordionStyle }) => $accordionStyle === "basic" && Variables.Spacers.XXS};
    color: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" ? Variables.Colors.White : Variables.Colors.Primary500};
    height: ${({ $accordionStyle }) => ($accordionStyle === "rounded" ? "49px" : "29px")};

    ${({ $noBorder }) =>
        $noBorder &&
        css`
            border-bottom: none;
        `}

    ${StyledIconPlus}, ${StyledIconChevron} {
        transition: ${Variables.Transitions.Short};

        ${({ $isOpen, $icon }) =>
            $isOpen &&
            css`
                transform: rotate(${$icon === "chevron" ? 180 : 45}deg);
            `}
    }
`

/*==================== Component ====================*/

const AccordionItem = ({
    isOpen = false,
    icon = "plus",
    title,
    content,
    $accordionStyle = "basic",
    $noBorder,
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
            >
                {title}

                {icon === "plus" ? (
                    <StyledIconPlus size={20} color="currentColor" />
                ) : (
                    icon === "chevron" && <StyledIconChevron size={20} />
                )}
            </Button>

            <Content as={typeof content === "string" ? P : "div"} $isOpen={open} $accordionStyle={$accordionStyle}>
                {content}
            </Content>
        </Item>
    )
}

const Accordion = ({ accordionStyle = "basic", icon = "plus", items, ...props }: Props) => (
    <Container $accordionStyle={accordionStyle} {...props}>
        {items.map((item, i) => (
            <AccordionItem
                icon={icon}
                isOpen={item.isOpen}
                title={item.title}
                content={item.content}
                $accordionStyle={accordionStyle}
                $noBorder={accordionStyle === "rounded" && i === items.length - 1 && true}
                key={uuid()}
            />
        ))}
    </Container>
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

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $accordionStyle?: AccordionStyleTypes
    $isOpen?: boolean
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    $accordionStyle?: AccordionStyleTypes
    $isOpen?: boolean
    $icon?: IconTypes
    $noBorder?: boolean
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    accordionStyle?: AccordionStyleTypes
    icon?: IconTypes
    items: AccordionItemProps[]
}

interface ContentStyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $icon?: IconTypes
    $isOpen?: boolean
    $accordionStyle?: AccordionStyleTypes
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: IconTypes
    title: string
    isOpen?: boolean
    content?: string | React.ReactNode
    $accordionStyle?: AccordionStyleTypes
    $noBorder?: boolean
}
