// Packages
import { ReactNode } from "react"

// Types
export interface props {
    title: string
    favicon?: string
    description?: string
    keywords?: any
    author?: string
    type?: string
    cover?: string
    siteName?: string
    language?: string
    children?: ReactNode
}
