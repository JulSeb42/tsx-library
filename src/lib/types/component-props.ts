/*=============================================== Component types ===============================================*/

import type {
    ReactNode,
    ChangeEvent,
    HTMLAttributes,
    ButtonHTMLAttributes,
    ForwardedRef,
} from "react"

import type {
    LinkTypes,
    ButtonLinkTypesRequire,
    LinkTypesBlank,
    PaddingTypes,
    SpacersTypes,
    ColorsShortTypes,
    ButtonLinkDisabledTypes,
} from "./"

/*==================== Accordion item ====================*/

export type AccordionItemProps = {
    title: string
    isOpen?: boolean
    content: string | ReactNode
}

/*==================== Breadcrumbs item ====================*/

export type BreadcrumbsItemProps = LinkTypes & {
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

export type StepProps = LinkTypesBlank & {
    text: string
}

/*==================== Dropdown item ====================*/

export type DropdownItemProps = ButtonLinkTypesRequire & {
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

export type FooterItemProps = ButtonLinkTypesRequire & {
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
    ButtonLinkTypesRequire & {
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

type ListGroupPropsBase = ButtonLinkDisabledTypes & {
    text: string
    subtext?: string
    ref?: ForwardedRef<HTMLLIElement>
}

type ListGroupBadge1 = ListGroupPropsBase & {
    badge?:
        | true
        | {
              icon?: string | JSX.Element
              number?: never
          }
}

type ListGroupBadge2 = ListGroupPropsBase & {
    badge?:
        | true
        | {
              icon?: never
              number?: number
          }
}

type ListGroupBadge = ListGroupBadge1 | ListGroupBadge2

type ListGroupPropsContent1 = ListGroupBadge & {
    badgeColor?: ColorsShortTypes
    date?: never
}

type ListGroupPropsContent2 = ListGroupBadge & {
    badge?: never
    badgeColor?: never
    date?: string | Date
}

export type ListGroupItemProps = ListGroupPropsContent1 | ListGroupPropsContent2

/*==================== Icon menu ====================*/

export type IconMenuItemProps = ButtonLinkTypesRequire & {
    icon: string
    iconSize?: number
    label: string
}

/*==================== Country ====================*/

export type InputPhoneCountryType = {
    name: string
    dial_code: string
    code: string
    flag: string
}
