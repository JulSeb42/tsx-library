/*=============================================== Footer separator demo ===============================================*/

import React from "react"

import { DefaultLayout } from "../../components"
import { Footer } from "../../lib"
import type { FooterItemProps } from "../../lib/types"

const FooterSeparatorDemo = () => {
    const footerLinks: FooterItemProps[] = [
        {
            content: "Link",
            href: "#",
        },
        {
            content: "Router Link",
            to: "/",
        },
        {
            content: "Button",
            onClick: () => console.log("Clicked!"),
        },
        {
            content: "Button",
            onClick: () => console.log("Clicked!"),
        },
    ]

    return (
        <DefaultLayout title="Footer separator">
            <Footer
                logo={{ text: "Logo" }}
                separator
                items={footerLinks}
                accentColor="secondary"
                direction="vertical"
            />
        </DefaultLayout>
    )
}

export default FooterSeparatorDemo
