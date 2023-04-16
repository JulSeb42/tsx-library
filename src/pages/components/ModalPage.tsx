/*=============================================== ModalPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Modal, Text, Image, Alert, Button, Flexbox } from "../../lib"

const ModalPage = () => {
    const [isFirstOpen, setIsFirstOpen] = useState(false)
    const [isSecondOpen, setIsSecondOpen] = useState(false)
    const [isThirdOpen, setIsThirdOpen] = useState(false)
    const [isFourthOpen, setIsFourthOpen] = useState(false)

    return (
        <Page title="Modal">
            <Flexbox
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap="l"
            >
                <Button onClick={() => setIsFirstOpen(!isFirstOpen)}>
                    Open modal
                </Button>

                <Modal
                    isOpen={isFirstOpen}
                    setIsOpen={setIsFirstOpen}
                    onClick={() => setIsFirstOpen(false)}
                    disableEsc
                >
                    <Image
                        src="/images/image-card.jpg"
                        alt="Modal"
                        width="100%"
                        height="100%"
                        fit="contain"
                    />
                </Modal>

                <Button onClick={() => setIsSecondOpen(true)}>
                    Open modal
                </Button>

                <Modal
                    isOpen={isSecondOpen}
                    setIsOpen={setIsSecondOpen}
                    showCloseButton
                    iconClose="close-circle"
                >
                    <Image
                        src="/images/image-card.jpg"
                        alt="Modal"
                        width="100%"
                        height="100%"
                        fit="contain"
                    />
                </Modal>

                <Button onClick={() => setIsThirdOpen(true)}>Open modal</Button>

                <Modal
                    isOpen={isThirdOpen}
                    setIsOpen={setIsThirdOpen}
                    showCloseButton
                >
                    <Image
                        src="/images/image-card.jpg"
                        alt="Modal"
                        width="100%"
                        height="100%"
                        fit="contain"
                    />
                </Modal>

                <Button onClick={() => setIsFourthOpen(true)}>
                    Open modal
                </Button>

                <Modal isOpen={isFourthOpen} setIsOpen={setIsFourthOpen}>
                    <Alert color="danger" maxWidth={400}>
                        <Text>Modal content</Text>

                        <Flexbox
                            flexDirection="row"
                            alignItems="center"
                            gap="xs"
                        >
                            <Button color="danger">Button</Button>
                            <Button
                                variant="transparent"
                                onClick={() => setIsFourthOpen(false)}
                            >
                                Close
                            </Button>
                        </Flexbox>
                    </Alert>
                </Modal>
            </Flexbox>
        </Page>
    )
}

export default ModalPage
