/*=============================================== Form types ===============================================*/

import type { HTMLAttributes, MouseEvent } from "react"

import type { ColorsHoverTypes, SpacersTypes } from "../../types"

interface BaseFormProps extends HTMLAttributes<HTMLFormElement> {
    buttonPrimary?:
        | string
        | {
              text: string
              iconLeft?: string | JSX.Element
              iconRight?: string | JSX.Element
          }
    accentColor?: ColorsHoverTypes
    isLoading?: boolean
    disabled?: boolean
    gap?: SpacersTypes
    maxWidth?: string | number
}

interface ButtonSecondary1 extends BaseFormProps {
    buttonSecondary?: {
        text?: "prev" | string | undefined
        iconLeft?: string
        iconRight?: string
        href: string | undefined
        isRouterLink?: boolean
        onClick?: never
    }
}

interface ButtonSecondary2 extends BaseFormProps {
    buttonSecondary?: {
        text?: string | undefined
        iconLeft?: string
        iconRight?: string
        href?: never
        isRouterLink?: never
        onClick: (e: MouseEvent<HTMLButtonElement>) => void | undefined
    }
}

export type FormProps = ButtonSecondary1 | ButtonSecondary2
