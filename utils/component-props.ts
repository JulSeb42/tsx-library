/*=============================================== Component types ===============================================*/

import type {
    ReactNode,
    ChangeEvent,
    MouseEvent,
    HTMLAttributes,
    ButtonHTMLAttributes,
    ForwardedRef,
} from "react"

import type { AllColorsTypes, ColorsHoverTypes } from "./common-types"

/*==================== Accordion item ====================*/

export type AccordionItemProps = {
    title: string
    isOpen?: boolean
    content: string | ReactNode
}

/*==================== Breadcrumbs item ====================*/

export type BreadcrumbsItemProps = {
    href?: string
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
    content: string | ReactNode
}

/*==================== Stepper step ====================*/

export type StepProps = {
    text: string
    href?: string
}

/*==================== useForm ====================*/

export type BaseUseFormType = {
    handleInputs: (e: ChangeEvent<HTMLInputElement>) => void
    resetForm: () => void
    handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void
}

/*==================== Footer links ====================*/

type FooterLinksBase = {
    content: string | JSX.Element
}

type PossibleFooterBehaviour1 = FooterLinksBase & {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    href?: never
    blank?: never
}

type PossibleFooterBehaviour2 = FooterLinksBase & {
    onClick?: never
    href: string
    blank?: boolean
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

type ButtonGroupPropsBase = HTMLAttributes<
    HTMLButtonElement & HTMLHyperlinkElementUtils
> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils> & {
        "aria-label"?: string
    }

type ButtonGroupPropsContent1 = ButtonGroupPropsBase & {
    text: string
    iconLeft?: string | JSX.Element
    iconRight?: string | JSX.Element
    iconOnly?: never
}

type ButtonGroupPropsContent2 = ButtonGroupPropsBase & {
    text?: never
    iconLeft?: never
    iconRight?: never
    iconOnly: string | JSX.Element
}

type ButtonGroupPropsContent =
    | ButtonGroupPropsContent1
    | ButtonGroupPropsContent2

type ButtonGroupPropsBehaviour1 = ButtonGroupPropsContent & {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    href?: never
    blank?: never
}

type ButtonGroupPropsBehaviour2 = ButtonGroupPropsContent & {
    onClick?: never
    href: string
    blank?: boolean
}

export type ButtonGroupProps =
    | ButtonGroupPropsBehaviour1
    | ButtonGroupPropsBehaviour2

/*==================== ListGroup ====================*/

type ListGroupPropsBase = {
    text: string
    subtext?: string
    ref?: ForwardedRef<HTMLSpanElement>
}

type ListGroupPropsContent1 = ListGroupPropsBase & {
    badge?: true | string | JSX.Element | number
    badgeColor?: AllColorsTypes
    badgeContentColor?: AllColorsTypes
    date?: never
}

type ListGroupPropsContent2 = ListGroupPropsBase & {
    badge?: never
    badgeColor?: never
    badgeContentColor?: never
    date?: string | Date
}

type ListGroupPropsContent = ListGroupPropsContent1 | ListGroupPropsContent2

type ListGroupPropsBehaviour0 = ListGroupPropsContent & {
    href?: undefined
    blank?: undefined
    onClick?: undefined
    disabled?: never
    color?: never
}

type ListGroupPropsBehaviour1 = ListGroupPropsContent & {
    href?: string
    blank?: boolean
    onClick?: never
    disabled?: never
    color?: ColorsHoverTypes
}

type ListGroupPropsBehaviour2 = ListGroupPropsContent & {
    href?: never
    blank?: never
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    color?: ColorsHoverTypes
}

export type ListGroupItemProps =
    | ListGroupPropsBehaviour0
    | ListGroupPropsBehaviour1
    | ListGroupPropsBehaviour2

/*==================== Icon menu ====================*/

type IconMenuPropsBase = {
    icon: string
    label: string
}

type PossibleIconMenuBehaviour1 = IconMenuPropsBase & {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    href?: never
    blank?: never
}

type PossibleIconMenuBehaviour2 = IconMenuPropsBase & {
    onClick?: never
    href: string
    blank?: boolean
}

export type IconMenuItemProps =
    | PossibleIconMenuBehaviour1
    | PossibleIconMenuBehaviour2

/*==================== Country ====================*/

export type InputPhoneCountryType = {
    name: string
    dial_code: string
    code: string
    flag: string
}
