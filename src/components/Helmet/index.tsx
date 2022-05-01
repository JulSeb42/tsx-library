// Packages
import React from "react"
import { Helmet as HelmetMeta } from "react-helmet"

// Types
interface props {
    title: string
    favicon?: string
    description?: string
    keywords?: any
    author?: string
    type?: string
    cover?: string
    siteName?: string
    language?: string
    children?: any
}

const Helmet: React.FC<props> = props => {
    return (
        <HelmetMeta>
            <title>{props.title}</title>
            <link rel="icon" href={props.favicon} />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="author" content={props.author} />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content={props.type} />
            <meta property="og:image" content={props.cover} />
            <meta property="og:site_name" content={props.siteName} />
            <meta property="og:locale" content={props.language} />

            {props.children}
        </HelmetMeta>
    )
}

export default Helmet
