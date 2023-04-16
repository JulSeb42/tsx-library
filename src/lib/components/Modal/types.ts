/*=============================================== Modal types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

interface ModalPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    disableEsc?: boolean
}

interface ModalPropsBehaviour1 extends ModalPropsBase {
    showCloseButton?: false
    iconClose?: never
    iconCloseSize?: never
    labelClose?: never
}

interface ModalPropsBehaviour2 extends ModalPropsBase {
    showCloseButton?: true
    iconClose?: string | JSX.Element
    iconCloseSize?: number
    labelClose?: string
}

export type ModalProps = ModalPropsBehaviour1 | ModalPropsBehaviour2
