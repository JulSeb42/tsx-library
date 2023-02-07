/*=============================================== Component types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "./common-types"

/*==================== Accordion item ====================*/

export type AccordionItemProps = {
    title: string
    isOpen?: boolean
    content: string | React.ReactNode
}

/*==================== Breadcrumbs item ====================*/

export type BreadcrumbsItemProps = {
    to?: string
    text: string
}

/*==================== Message ====================*/

export type MessageProps = {
    type: "received" | "sent"
    content: string
    date?: string
    time?: string
}

/*==================== Tabs item ====================*/

export type TabsItemProps = {
    title: string
    content: string | React.ReactNode
}

/*==================== Stepper step ====================*/

export type StepProps = {
    text: string
    to?: string
}

/*==================== useForm ====================*/

export type BaseUseFormType = {
    handleInputs: (e: React.ChangeEvent<HTMLInputElement>) => void
    resetForm: () => void
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}

/*==================== Footer links ====================*/

type FooterLinksBase = {
    content: string | JSX.Element
}

type PossibleFooterBehaviour1 = FooterLinksBase & {
    to: string
    blank?: boolean
    onClick?: never
    as?: "a" | "link"
}

type PossibleFooterBehaviour2 = FooterLinksBase & {
    to?: never
    blank?: never
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    as?: never
}

export type FooterItemProps =
    | PossibleFooterBehaviour1
    | PossibleFooterBehaviour2

/*==================== Theme ====================*/

export type ThemeContextProps = {
    theme: any
    selectedTheme: "light" | "dark"
    toggleTheme: () => void
}

/*==================== ButtonGroup ====================*/

type ButtonGroupPropsBase = React.HTMLAttributes<
    HTMLButtonElement & HTMLHyperlinkElementUtils
> &
    React.ButtonHTMLAttributes<
        HTMLButtonElement & HTMLHyperlinkElementUtils
    > & {
        "aria-label"?: string
    }

type ButtonGroupPropsContent1 = ButtonGroupPropsBase & {
    text: string
    iconLeft?: string
    iconRight?: string
    iconOnly?: never
}

type ButtonGroupPropsContent2 = ButtonGroupPropsBase & {
    text?: never
    iconLeft?: never
    iconRight?: never
    iconOnly: string
}

type ButtonGroupPropsContent =
    | ButtonGroupPropsContent1
    | ButtonGroupPropsContent2

type ButtonGroupPropsBehaviour1 = ButtonGroupPropsContent & {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    to?: never
    href?: never
    blank?: never
}

type ButtonGroupPropsBehaviour2 = ButtonGroupPropsContent & {
    onClick?: never
    to: string
    href?: never
    blank?: never
}

type ButtonGroupPropsBehaviour3 = ButtonGroupPropsContent & {
    onClick?: never
    to?: never
    href: string
    blank?: boolean
}

export type ButtonGroupProps =
    | ButtonGroupPropsBehaviour1
    | ButtonGroupPropsBehaviour2
    | ButtonGroupPropsBehaviour3

/*==================== ListGroup ====================*/

type ListGroupPropsBase = {
    text: string
    subtext?: string
    ref?: React.ForwardedRef<HTMLSpanElement>
}

type ListGroupPropsContent1 = ListGroupPropsBase & {
    badge?: true | string | number
    badgeColor?: AllColorsTypes
    badgeContentColor?: AllColorsTypes
    date?: never
}

type ListGroupPropsContent2 = ListGroupPropsBase & {
    badge?: never
    badgeColor?: never
    badgeContentColor?: never
    date?: string
}

type ListGroupPropsContent = ListGroupPropsContent1 | ListGroupPropsContent2

type ListGroupPropsBehaviour1 = ListGroupPropsContent & {
    to?: never
    onClick?: never
    disabled?: never
    color?: never
}

type ListGroupPropsBehaviour2 = ListGroupPropsContent & {
    to?: string
    onClick?: never
    disabled?: never
    color?: ColorsHoverTypes
}

type ListGroupPropsBehaviour3 = ListGroupPropsContent & {
    to?: never
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    color?: ColorsHoverTypes
}

export type ListGroupItemProps =
    | ListGroupPropsBehaviour1
    | ListGroupPropsBehaviour2
    | ListGroupPropsBehaviour3

/*==================== Icon menu ====================*/

type IconMenuPropsBase = {
    icon: string
    ariaLabel: string
}

type PossibleIconMenuBehaviour1 = IconMenuPropsBase & {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    to?: never
    blank?: never
}

type PossibleIconMenuBehaviour2 = IconMenuPropsBase & {
    onClick?: never
    to: string
    blank?: boolean
}

export type IconMenuItemProps =
    | PossibleIconMenuBehaviour1
    | PossibleIconMenuBehaviour2
