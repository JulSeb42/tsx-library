/*=============================================== Form types ===============================================*/

import type { HTMLAttributes } from "react"

import type { ButtonLinkTypesRequire } from "../../types"

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
    buttonPrimary?:
        | string
        | {
              text: string
              iconLeft?: string | JSX.Element
              iconRight?: string | JSX.Element
          }
    isLoading?: boolean
    disabled?: boolean
    buttonSecondary?: ButtonLinkTypesRequire & {
        text?: string
        iconLeft?: string
        iconRight?: string
        to?: string | "prev"
    }
}
