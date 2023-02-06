/*=============================================== Modal types ===============================================*/

import React from "react"

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    isOpen: boolean
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClose?: string
    labelClose?: string
}
