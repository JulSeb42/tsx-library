/*=============================================== IconMenuPage ===============================================*/

import { Page } from "../../components"
import { IconMenu } from "../../lib"
import type { IconMenuItemProps } from "../../lib/types"

const IconMenuPage = () => {
    const items: IconMenuItemProps[] = [
        {
            icon: "edit",
            href: "#",
            label: "Button",
        },
        {
            icon: "check",
            href: "#",
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
                direction="right"
                icon="plus"
                color="secondary"
                shadow={{
                    default: "s",
                    hover: "l",
                    active: "m",
                }}
                position={{
                    position: "fixed",
                    bottom: 48,
                    right: 48,
                }}
            />
        </Page>
    )
}

export default IconMenuPage
