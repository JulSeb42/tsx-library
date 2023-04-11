/*=============================================== DropdownPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { DropdownContainer, Dropdown, Button, DropdownItem } from "../../lib"
import type { DropdownItemProps } from "../../lib/types"

const DropdownPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSecondOpen, setIsSecondOpen] = useState(true)

    const items: DropdownItemProps[] = [
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

                <Dropdown
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    items={items}
                    accentColor="success"
                />
            </DropdownContainer>

            <DropdownContainer>
                <Button onClick={() => setIsSecondOpen(!isSecondOpen)}>
                    Open dropdown
                </Button>

                <Dropdown isOpen={isSecondOpen} setIsOpen={setIsSecondOpen}>
                    <DropdownItem text="Link" to="/" />

                    <DropdownItem
                        text="Button"
                        onClick={() => alert("Clicked")}
                        padding={{
                            left: "xl",
                            right: "s",
                            topBottom: "xs",
                        }}
                        icon="chevron-left"
                        gap="xs"
                        color="secondary"
                    />
                </Dropdown>
            </DropdownContainer>
        </Page>
    )
}

export default DropdownPage
