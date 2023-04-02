/*=============================================== ButtonGroupPage ===============================================*/

import { Page } from "../../components"
import { ButtonGroup } from "../../lib"
import type { ButtonGroupProps } from "../../lib/types"

const ButtonGroupPage = () => {
    const buttons: ButtonGroupProps[] = [
        {
            // text: "Button",
            iconOnly: "arrow-left",
            onClick: () => console.log("Clicked"),
        },
        {
            text: "Button",
            onClick: () => console.log("Clicked"),
        },
        {
            text: "Button",
            onClick: () => console.log("Clicked"),
        },
        {
            text: "Link",
            href: "http://google.com",
            blank: true,
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
