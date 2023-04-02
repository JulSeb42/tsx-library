/*=============================================== DropdownPage ===============================================*/

import { useState } from "react"
import { Link } from "react-router-dom"

import { Page } from "../../components"
import { DropdownContainer, Dropdown, Button, uuid } from "../../lib"

const DropdownPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const items = [
        {
            text: "Link",
            to: "/",
        },
        {
            text: "Button",
            onClick: () => alert("Clicked"),
        },
    ]

    return (
        <Page title="Dropdown">
            <DropdownContainer>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    Open dropdown
                </Button>

                <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
                    {items.map(item =>
                        item.to ? (
                            <Link to={item.to} key={uuid()}>
                                {item.text}
                            </Link>
                        ) : (
                            <button onClick={item.onClick} key={uuid()}>
                                {item.text}
                            </button>
                        )
                    )}
                </Dropdown>
            </DropdownContainer>
        </Page>
    )
}

export default DropdownPage
