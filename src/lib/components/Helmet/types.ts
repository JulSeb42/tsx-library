/*=============================================== Helmet types ===============================================*/

import type { HelmetProps as HelmetTypes } from "react-helmet"

export interface HelmetProps extends HelmetTypes {
    title: string
    favicon?: string
    description?: string
    keywords?: any
    author?: string
    type?: string
    cover?: string
    siteName?: string
    language?: string
}
