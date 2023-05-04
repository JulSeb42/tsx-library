/*=============================================== Component types ===============================================*/

import type {
    ButtonHTMLAttributes,
    ChangeEvent,
    ForwardedRef,
    HTMLAttributes,
    ReactNode,
} from "react"

import type {
    ButtonLinkDisabledTypes,
    ButtonLinkTypesRequire,
    ColorsShortTypes,
    LinkTypes,
    LinkTypesBlank,
    typeValues,
} from "./"

/*==================== Accordion item ====================*/

export type AccordionItemProps = {
    title: string
    content: string | ReactNode
    isOpen?: boolean
}

/*==================== Breadcrumbs item ====================*/

export type BreadcrumbsItemProps = LinkTypes & {
    text: string
}

/*==================== Message ====================*/

export type MessageProps = {
    type: "received" | "sent"
    text: string
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

const themeNames = {
    light: "light",
    dark: "dark",
} as const

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
              color?: ColorsShortTypes
          }
    date?: never
}

type ListGroupBadge2 = ListGroupPropsBase & {
    badge?:
        | true
        | {
              icon?: never
              number?: number
              color?: ColorsShortTypes
          }
    date?: never
}

type ListGroupBadge3 = ListGroupPropsBase & {
    badge?: never
    date?: string | Date
}

export type ListGroupItemProps =
    | ListGroupBadge1
    | ListGroupBadge2
    | ListGroupBadge3

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

/*==================== Timepicker ====================*/

export type TimepickerHoursTypes = keyof typeof typeValues.times

export type TimepickerHalfHoursTypes = keyof typeof typeValues.halfTimes

export type TimepickerQuarterHoursTypes = keyof typeof typeValues.quarterTimes

export type TimepickerAllTimesTypes = keyof typeof typeValues.allTimes
