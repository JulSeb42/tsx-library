/*=============================================== ListGroupPage ===============================================*/

import React from "react"
import { Page } from "../../components"
import { ListGroup } from "../../lib"
import type { ListGroupItemProps } from "../../lib/types"

const ListGroupPage = () => {
    const items: ListGroupItemProps[] = [
        {
            text: "Item",
        },
        {
            text: "Text",
            subtext: "Subtext",
        },
        {
            text: "Item",
            badge: 350,
            badgeColor: "danger",
        },
        {
            text: "Item",
            badge: "star",
            badgeColor: "success",
        },
        {
            text: "Item",
            badge: true,
            badgeColor: "warning",
        },
        {
            text: "Router link",
            date: "2022-09-07",
            subtext: "Subtext",
            to: "/",
            blank: true,
        },
        {
            text: "Item",
            date: "2022-09-07",
            subtext: "Subtext",
            href: "#",
        },
        {
            text: "Item",
            date: "2022-09-07",
            subtext: "Subtext",
            onClick: () => console.log("Clicked!"),
            color: "secondary",
        },
        {
            text: "Item",
            date: "2022-09-07",
            onClick: () => console.log("Clicked!"),
            disabled: true,
        },
    ]

    return (
        <Page title="ListGroup">
            <ListGroup items={items} />

            <ListGroup items={items} showNumbers maxHeight={100} />
        </Page>
    )
}

export default ListGroupPage
