/*=============================================== Component types ===============================================*/

import type {
    ReactNode,
    ChangeEvent,
    MouseEvent,
    HTMLAttributes,
    ButtonHTMLAttributes,
    ForwardedRef,
} from "react"

import type {
    AllColorsTypes,
    ColorsHoverTypes,
    LinkType,
    ButtonLinkTypeRequire,
    LinkTypeBlank,
    PaddingTypes,
    SpacersTypes,
} from "./"

/*==================== Accordion item ====================*/

export type AccordionItemProps = {
    title: string
    isOpen?: boolean
    content: string | ReactNode
}

/*==================== Breadcrumbs item ====================*/

export type BreadcrumbsItemProps = LinkType & {
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

export type StepProps = LinkTypeBlank & {
    text: string
}

/*==================== Dropdown item ====================*/

export type DropdownItemProps = ButtonLinkTypeRequire & {
    text: string
    icon?: string | JSX.Element
    padding?: PaddingTypes
    gap?: SpacersTypes
}

/*==================== useForm ====================*/

export type BaseUseFormType = {
    handleInputs: (e: ChangeEvent<HTMLInputElement>) => void
    resetForm: () => void
    handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void
}

/*==================== Footer links ====================*/

export type FooterItemProps = ButtonLinkTypeRequire & {
    content: string | JSX.Element
}

/*==================== Theme ====================*/

enum themeNames {
    light,
    dark,
}

export type ThemeNameTypes = keyof typeof themeNames

export type ThemeContextProps = {
    theme: any
    selectedTheme: ThemeNameTypes
    toggleTheme: () => void
}

/*==================== ButtonGroup ====================*/

type ButtonGroupPropsBase = HTMLAttributes<
    HTMLButtonElement & HTMLHyperlinkElementUtils
> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLHyperlinkElementUtils> &
    ButtonLinkTypeRequire & {
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

export type ButtonGroupProps =
    | ButtonGroupPropsContent1
    | ButtonGroupPropsContent2

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
    to?: never
}

type ListGroupPropsBehaviour1 = ListGroupPropsContent & {
    href?: string
    blank?: boolean
    onClick?: never
    disabled?: never
    color?: ColorsHoverTypes
    to?: never
}

type ListGroupPropsBehaviour2 = ListGroupPropsContent & {
    href?: never
    blank?: never
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    color?: ColorsHoverTypes
    to?: never
}

type ListGroupPropsBehaviour3 = ListGroupPropsContent & {
    href?: never
    blank?: boolean
    onClick?: never
    disabled?: never
    color?: ColorsHoverTypes
    to?: string
}

export type ListGroupItemProps =
    | ListGroupPropsBehaviour0
    | ListGroupPropsBehaviour1
    | ListGroupPropsBehaviour2
    | ListGroupPropsBehaviour3

/*==================== Icon menu ====================*/

export type IconMenuItemProps = ButtonLinkTypeRequire & {
    icon: string
    label: string
}

/*==================== Country ====================*/

export type InputPhoneCountryType = {
    name: string
    dial_code: string
    code: string
    flag: string
}
