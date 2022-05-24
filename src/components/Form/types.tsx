// Imports
import React from "react"

export interface props extends React.HTMLAttributes<HTMLFormElement> {
    btnPrimary?: string
    btnCancel?: string
    btnReset?: string | boolean
    colorPrimary?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
    colorHoverPrimary?: string
    colorActivePrimary?: string
    iconLeftPrimary?: string
    iconRightPrimary?: string
    loading?: boolean
    colorCancel?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
    colorHoverCancel?: string
    colorActiveCancel?: string
    iconLeftCancel?: string
    iconRightCancel?: string
    textBtnCancel?: string
    colorReset?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
    colorHoverReset?: string
    colorActiveReset?: string
    iconLeftReset?: string
    iconRightReset?: string
    textBtnReset?: string
    onClickReset?: (event: React.MouseEvent<HTMLElement>) => void
}
