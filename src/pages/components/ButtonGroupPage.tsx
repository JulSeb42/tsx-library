/*=============================================== ButtonGroupPage ===============================================*/

import React from "react"
import { Page } from "../../components"
import { ButtonGroup } from "../../lib"
import type { ButtonGroupProps } from "../../lib/types"

const ButtonGroupPage = () => {
    const buttons: ButtonGroupProps[] = [
        {
            // text: "Button",
            iconOnly: "arrow-left",
            onClick: () => alert("Clicked"),
        },
        {
            text: "Button",
            onClick: () => alert("Clicked"),
        },
        {
            text: "Button",
            onClick: () => alert("Clicked"),
        },
        {
            text: "Link",
            href: "http://google.com",
            blank: true,
        },
        {
            text: "Router Link",
            to: "/",
        },
        {
            iconOnly: "arrow-right",
            to: "/",
        },
    ]

    return (
        <Page title="ButtonGroup">
            <ButtonGroup
                buttons={buttons}
                color="secondary"
                buttonsSize="small"
            />

            <ButtonGroup buttons={buttons} variant="transparent" />
        </Page>
    )
}

export default ButtonGroupPage
