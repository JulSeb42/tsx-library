/*=============================================== BreadcrumbsPage ===============================================*/

import { Page } from "../../components"
import { Breadcrumbs } from "../../lib"
import type { BreadcrumbsItemProps } from "../../lib/types"

const BreadcrumbsPage = () => {
    const items: BreadcrumbsItemProps[] = [
        {
            text: "Link",
            href: "#",
        },
        {
            text: "Link",
            href: "#",
        },
        {
            text: "Link",
            href: "#",
        },
        {
            text: "Active",
        },
    ]

    return (
        <Page title="Breadcrumbs">
            <Breadcrumbs
                items={items}
                separator="slash"
                linkColor="secondary"
                color="secondary"
            />
            <Breadcrumbs items={items} separator="icon" />
        </Page>
    )
}

export default BreadcrumbsPage
