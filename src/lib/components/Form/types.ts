/*=============================================== Form types ===============================================*/

import type { HTMLAttributes } from "react"

import type { ColorsHoverTypes, ButtonLinkTypesRequire } from "../../types"

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
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
    buttonSecondary?: ButtonLinkTypesRequire & {
        text?: "prev" | string | undefined
        iconLeft?: string
        iconRight?: string
    }
}
