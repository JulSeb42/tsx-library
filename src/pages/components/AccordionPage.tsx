/*=============================================== AccordionPage ===============================================*/

import { Page } from "../../components"
import { Accordion } from "../../lib"
import type { AccordionItemProps } from "../../lib/types"

const AccordionPage = () => {
    const items: AccordionItemProps[] = [
        {
            title: "Item",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
            isOpen: true,
        },
        {
            title: "Item",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
        },
        {
            title: "Item",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id culpa nam, facere necessitatibus, doloremque provident eveniet suscipit magni, recusandae consequuntur totam eaque error sunt quasi! Dolor culpa consectetur aliquam.",
        },
    ]

    return (
        <Page title="Accordion">
            <Accordion items={items} variant="basic" />
            <Accordion items={items} variant="rounded" />
        </Page>
    )
}

export default AccordionPage
