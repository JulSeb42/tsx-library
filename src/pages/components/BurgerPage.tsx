/*=============================================== BurgerPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Burger, Flexbox } from "../../lib"

const BurgerPage = () => {
    const [isPrimaryOpen, setIsPrimaryOpen] = useState(false)
    const [isSecondaryOpen, setIsSecondaryOpen] = useState(false)
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const [isDangerOpen, setIsDangerOpen] = useState(false)
    const [isWarningOpen, setIsWarningOpen] = useState(false)
    const [isWhiteOpen, setIsWhiteOpen] = useState(false)

    return (
        <Page title="Burger">
            <Flexbox gap="s">
                <Burger
                    color="primary"
                    isOpen={isPrimaryOpen}
                    onClick={() => setIsPrimaryOpen(!isPrimaryOpen)}
                />
                <Burger
                    color="secondary"
                    isOpen={isSecondaryOpen}
                    onClick={() => setIsSecondaryOpen(!isSecondaryOpen)}
                />
                <Burger
                    color="success"
                    isOpen={isSuccessOpen}
                    onClick={() => setIsSuccessOpen(!isSuccessOpen)}
                />
                <Burger
                    color="danger"
                    isOpen={isDangerOpen}
                    onClick={() => setIsDangerOpen(!isDangerOpen)}
                />
                <Burger
                    color="warning"
                    isOpen={isWarningOpen}
                    onClick={() => setIsWarningOpen(!isWarningOpen)}
                />
                <Burger
                    color="white"
                    isOpen={isWhiteOpen}
                    onClick={() => setIsWhiteOpen(!isWhiteOpen)}
                />
            </Flexbox>
        </Page>
    )
}

export default BurgerPage
