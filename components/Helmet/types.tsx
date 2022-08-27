/*=============================================== Helmet types ===============================================*/

import React from "react"

export interface HelmetProps extends React.HTMLAttributes<HTMLHeadElement> {
    title: string
    favicon?: string
    description?: string
    keywords?: any
    author?: string
    type?: string
    cover?: string
    siteName?: string
    language?: string
    children?: React.ReactNode
}
