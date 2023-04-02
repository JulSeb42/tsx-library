/*=============================================== Alert types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

enum ColorsAlerts {
    primary,
    secondary,
    success,
    danger,
    warning,
    white,
    gray,
    black,
}

export type ColorsAlertsTypes = keyof typeof ColorsAlerts

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    color?: ColorsAlertsTypes
    isModal?: boolean
}
