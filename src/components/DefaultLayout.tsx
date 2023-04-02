/*=============================================== DefaultLayout ===============================================*/

import React from "react"
import { Helmet } from "react-helmet"

import { siteData } from "../data"

export const DefaultLayout = ({ title, children }: Props) => {
    return (
        <>
            <Helmet>
                <title>
                    {title} | {siteData.name}
                </title>
                <link rel="icon" href={`${siteData.favicon}`} />
            </Helmet>

            {children}
        </>
    )
}

interface Props {
    title: string
    children?: any
}
