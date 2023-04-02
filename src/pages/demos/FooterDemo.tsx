/*=============================================== Footer demo ===============================================*/

import React from "react"

import { DefaultLayout } from "../../components"
import { Footer } from "../../lib"
import type { FooterItemProps } from "../../lib/types"

const FooterDemo = () => {
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
        <DefaultLayout title="Footer">
            <Footer
                logo={{
                    img: "/images/logo-fajny-css.svg",
                    width: 100,
                    height: 32,
                }}
                items={footerLinks}
            />
        </DefaultLayout>
    )
}

export default FooterDemo
