/*=============================================== Component types ===============================================*/

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

const message = {
    received: "received",
    sent: "sent",
} as const

type MessageTypesTypes = keyof typeof message

export type MessageProps = {
    type: MessageTypesTypes
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

/*==================== Input validation ====================*/

export type ValidationStatusProps = "not-passed" | "passed" | undefined

/*==================== useForm ====================*/

export interface BaseUseFormType {
    handleInputs: (e: React.ChangeEvent<HTMLInputElement>) => void
    resetForm: any
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}

/*==================== Footer links ====================*/

type PossibleFooterLinks1 = {
    content: string | JSX.Element
    to: string
    blank?: boolean
    onClick?: never
    as?: "a" | "link"
}

type PossibleFooterLinks2 = {
    content: string | JSX.Element
    to?: never
    blank?: never
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    as?: never
}

export type FooterItemProps = PossibleFooterLinks1 | PossibleFooterLinks2

/*==================== Theme ====================*/

export type ThemeContextProps = {
    theme: any
    selectedTheme: "light" | "dark"
    toggleTheme: () => void
}

/*==================== ButtonGroup ====================*/

type PossibleContentButton1 = {
    text: string
    iconLeft?: string
    iconRight?: string
    iconOnly?: never
}

type PossibleContentButton2 = {
    text?: never
    iconLeft?: never
    iconRight?: never
    iconOnly: string
}

type PossibleContentButton = PossibleContentButton1 | PossibleContentButton2

type PossibleButtonGroup1 = PossibleContentButton & {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    to?: never
}

type PossibleButtonGroup2 = PossibleContentButton & {
    onClick?: never
    to: string
}

export type ButtonGroupProps = PossibleButtonGroup1 | PossibleButtonGroup2

/*==================== ListGroup ====================*/

type BaseListGroup = {
    text: string
    subtext?: string
}

type PossibleListGroupContent1 = BaseListGroup & {
    badge?: true | string | number
    badgeColor?: AllColorsTypes
    badgeContentColor?: AllColorsTypes
    date?: never
}

type PossibleListGroupContent2 = BaseListGroup & {
    badge?: never
    badgeColor?: never
    badgeContentColor?: never
    date?: string
}

type PossibleListGroupContent =
    | PossibleListGroupContent1
    | PossibleListGroupContent2

type PossibleListGroup1 = PossibleListGroupContent & {
    to?: never
    onClick?: never
    disabled?: never
    color?: never
}

type PossibleListGroup2 = PossibleListGroupContent & {
    to?: string
    onClick?: never
    disabled?: never
    color?: ColorsHoverTypes
}

type PossibleListGroup3 = PossibleListGroupContent & {
    to?: never
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    color?: ColorsHoverTypes
}

export type ListGroupItemProps =
    | PossibleListGroup1
    | PossibleListGroup2
    | PossibleListGroup3

/*==================== Icon menu ====================*/

interface BaseTypesIconMenuItem {
    icon: string
    ariaLabel: string
}

interface PossibleIconMenuClick1 extends BaseTypesIconMenuItem {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    to?: never
    blank?: never
}

interface PossibleIconMenuClick2 extends BaseTypesIconMenuItem {
    onClick?: never
    to: string
    blank?: boolean
}

export type IconMenuItemProps = PossibleIconMenuClick1 | PossibleIconMenuClick2
