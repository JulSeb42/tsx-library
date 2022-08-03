/*=============================================== Helmet ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import { Helmet as Container } from "react-helmet"

/*==================== Component ====================*/

const Helmet = ({
    title,
    children,
    favicon,
    description,
    keywords,
    author,
    type,
    cover,
    siteName,
    language,
}: Props) => (
    <Container>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={cover} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={language} />

        <html lang={language} />

        {children}
    </Container>
)

export default Helmet

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLHeadElement> {
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
