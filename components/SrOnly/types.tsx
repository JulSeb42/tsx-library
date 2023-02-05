/*=============================================== SrOnly types ===============================================*/

import React from "react"

export interface SrOnlyProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any
    as?: React.ElementType
}
