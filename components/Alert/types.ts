/*=============================================== Alert types ===============================================*/

import React from "react"

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

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    color?: ColorsAlertsTypes
    isModal?: boolean
}
