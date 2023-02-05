/*=============================================== Alert types ===============================================*/

import React from "react"

const ColorsAlerts = {
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
    white: "white",
    gray: "gray",
    black: "black",
} as const

export type ColorsAlertsTypes = keyof typeof ColorsAlerts

export interface AlertProps extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: ColorsAlertsTypes
    children?: any
    isModal?: boolean
    as?: React.ElementType
}
