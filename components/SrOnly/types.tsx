/*=============================================== SrOnly types ===============================================*/

import React from "react"

export interface SrOnlyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string | React.ReactNode | React.ReactNode[]
    as?: any
}
