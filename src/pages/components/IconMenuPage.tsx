/*=============================================== IconMenuPage ===============================================*/

import React from "react"
import { Page } from "../../components"
import { IconMenu } from "../../lib"
import type { IconMenuItemProps } from "../../lib/types"

const IconMenuPage = () => {
    const items: IconMenuItemProps[] = [
        {
            icon: "edit",
            href: "/",
            label: "Button",
        },
        {
            icon: "check",
            to: "/",
            label: "Button",
        },
        {
            icon: "show",
            onClick: () => console.log("Clicked"),
            label: "Button",
        },
    ]

    return (
        <Page title="IconMenu">
            <IconMenu
                items={items}
                direction="down"
                icon="plus"
                color="success"
            />
        </Page>
    )
}

export default IconMenuPage
