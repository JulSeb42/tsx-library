/*=============================================== Accordion styles ===============================================*/

import styled, { css } from "styled-components"

import { Transitions, Spacers, Radiuses, Mixins } from "../../"
import { PlusIcon, ChevronDownIcon } from "../../icons"
import type { ColorsHoverTypes, AllColorsTypes } from "../../types"
import type { AccordionStyleTypes, IconTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledIconPlus = styled(PlusIcon)``

const StyledIconChevron = styled(ChevronDownIcon)``

const StyledAccordion = styled.div<{
    $variant?: AccordionStyleTypes
    $isOpen?: boolean
    $separatorColor?: AllColorsTypes
}>`
    position: relative;
    ${({ $variant }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap: $variant === "rounded" ? 0 : "xxs",
        })};

    ${({ $variant, $separatorColor, theme }) =>
        $variant === "rounded" &&
        css`
            border-radius: ${Radiuses.M};
            overflow: hidden;
            border: 1px solid
                ${$separatorColor
                    ? theme.AllColors({ $color: $separatorColor })
                    : theme.Gray200};
            gap: 0;
        `}
`

const Item = styled.div``

const Content = styled.div<{
    $isOpen?: boolean
    $variant?: AccordionStyleTypes
}>`
    max-height: ${({ $isOpen }) => ($isOpen ? "600px" : 0)};
    overflow: hidden;
    transition: ${Transitions.Long};
    color: ${({ theme }) => theme.Font};

    ${({ $variant, $isOpen }) =>
        $variant === "rounded"
            ? css`
                  padding: ${$isOpen ? Spacers.S : `0 ${Spacers.S}`};
              `
            : css`
                  padding: ${$isOpen ? `${Spacers.XS} 0` : 0};
              `}
`

const IconContainer = styled.span<{
    $isOpen: boolean
    $icon?: IconTypes
    $hasIconCustom?: boolean
}>`
    transition: ${Transitions.Short};

    ${({ $isOpen, $icon, $hasIconCustom }) =>
        !$hasIconCustom &&
        $isOpen &&
        css`
            transform: rotate(${$icon === "chevron" ? 180 : 45}deg);
        `}
`

const Button = styled.button<{
    $variant?: AccordionStyleTypes
    $noBorder?: boolean
    $accentColor?: ColorsHoverTypes
    $separatorColor?: AllColorsTypes
}>`
    width: 100%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    padding: ${({ $variant }) => ($variant === "rounded" ? Spacers.S : 0)};
    border: none;
    border-bottom: 1px solid
        ${({ $variant, $separatorColor, theme }) =>
            $separatorColor
                ? theme.AllColors({ $color: $separatorColor })
                : $variant === "rounded"
                ? theme.Background
                : theme.Gray200};
    background-color: ${({ $variant, $accentColor, theme }) =>
        $variant === "rounded"
            ? theme.AllColors({ $color: $accentColor })
            : "transparent"};
    padding-bottom: ${({ $variant }) => $variant === "basic" && Spacers.XXS};
    color: ${({ $variant, $accentColor, theme }) =>
        $variant === "rounded"
            ? $accentColor === "white"
                ? theme.Primary500
                : theme.Background
            : theme.AllColors({ $color: $accentColor })};
    height: ${({ $variant }) => ($variant === "rounded" ? "49px" : "29px")};

    ${({ $noBorder }) =>
        $noBorder &&
        css`
            border-bottom: none;
        `}
`

setDefaultTheme([
    StyledAccordion,
    StyledIconChevron,
    StyledIconPlus,
    Item,
    Content,
    IconContainer,
    Button,
])

export {
    StyledAccordion,
    StyledIconChevron,
    StyledIconPlus,
    Item,
    Content,
    IconContainer,
    Button,
}
