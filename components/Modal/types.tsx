/*=============================================== Modal types ===============================================*/

import React from "react"

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any
    isOpen: boolean
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClose?: string
    labelClose?: string
}
