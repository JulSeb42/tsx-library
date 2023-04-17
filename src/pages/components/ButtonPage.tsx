/*=============================================== ButtonPage ===============================================*/

import React from "react"
import { Page } from "../../components"
import { Button, Flexbox } from "../../lib"

const ButtonPage = () => {
    return (
        <Page title="Button">
            <Flexbox flexDirection="column" gap="xs">
                <Flexbox gap="s" alignItems="flex-start">
                    <Button
                        variant="plain"
                        color="primary"
                        onClick={() => alert("Clicked")}
                        size="small"
                    >
                        Button
                    </Button>
                    <Button variant="plain" color="secondary">
                        Button
                    </Button>
                    <Button variant="plain" color="success">
                        Button
                    </Button>
                    <Button variant="plain" color="danger">
                        Button
                    </Button>
                    <Button variant="plain" color="warning">
                        Button
                    </Button>
                    <Button variant="plain" color="white">
                        Button
                    </Button>
                    <Button variant="plain" color="font">
                        Button
                    </Button>
                    <Button variant="plain" color="background">
                        Button
                    </Button>
                    <Button variant="plain" color="primary" disabled>
                        Button
                    </Button>
                </Flexbox>

                <Flexbox gap="s">
                    <Button
                        variant="plain"
                        color="primary"
                        href="http://google.com"
                        blank
                    >
                        Button
                    </Button>
                    <Button variant="plain" color="secondary" to="/">
                        Button
                    </Button>
                    <Button variant="plain" color="success" href="#">
                        Button
                    </Button>
                    <Button variant="plain" color="danger" href="#">
                        Button
                    </Button>
                    <Button variant="plain" color="warning" href="#">
                        Button
                    </Button>
                    <Button variant="plain" color="white" href="#">
                        Button
                    </Button>
                    <Button variant="plain" color="font" href="#">
                        Button
                    </Button>
                    <Button variant="plain" color="background" href="#">
                        Button
                    </Button>
                </Flexbox>
            </Flexbox>

            <Flexbox gap="s">
                <Button variant="transparent" color="primary">
                    Button
                </Button>
                <Button variant="transparent" color="secondary">
                    Button
                </Button>
                <Button variant="transparent" color="success">
                    Button
                </Button>
                <Button variant="transparent" color="danger">
                    Button
                </Button>
                <Button variant="transparent" color="warning">
                    Button
                </Button>
                <Button variant="transparent" color="white">
                    Button
                </Button>
                <Button variant="transparent" color="font">
                    Button
                </Button>
                <Button variant="transparent" color="background">
                    Button
                </Button>
                <Button variant="transparent" color="primary" disabled>
                    Button
                </Button>
            </Flexbox>

            <Flexbox gap="s">
                <Button variant="transparent" color="primary" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="secondary" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="success" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="danger" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="warning" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="white" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="font" href="#">
                    Button
                </Button>
                <Button variant="transparent" color="background" href="#">
                    Button
                </Button>
            </Flexbox>

            <Flexbox gap="s">
                <Button variant="outline" color="primary">
                    Button
                </Button>
                <Button variant="outline" color="secondary">
                    Button
                </Button>
                <Button variant="outline" color="success">
                    Button
                </Button>
                <Button variant="outline" color="danger">
                    Button
                </Button>
                <Button variant="outline" color="warning">
                    Button
                </Button>
                <Button variant="outline" color="white">
                    Button
                </Button>
                <Button variant="outline" color="font">
                    Button
                </Button>
                <Button variant="outline" color="background">
                    Button
                </Button>
                <Button variant="outline" color="primary" disabled>
                    Button
                </Button>
            </Flexbox>

            <Flexbox gap="s">
                <Button variant="outline" color="primary" href="#">
                    Button
                </Button>
                <Button variant="outline" color="secondary" href="#">
                    Button
                </Button>
                <Button variant="outline" color="success" href="#">
                    Button
                </Button>
                <Button variant="outline" color="danger" href="#">
                    Button
                </Button>
                <Button variant="outline" color="warning" href="#">
                    Button
                </Button>
                <Button variant="outline" color="white" href="#">
                    Button
                </Button>
                <Button variant="outline" color="font" href="#">
                    Button
                </Button>
                <Button variant="outline" color="background" href="#">
                    Button
                </Button>
            </Flexbox>

            <Flexbox gap="s">
                <Button variant="ghost" color="primary">
                    Button
                </Button>
                <Button variant="ghost" color="secondary">
                    Button
                </Button>
                <Button variant="ghost" color="success">
                    Button
                </Button>
                <Button variant="ghost" color="danger">
                    Button
                </Button>
                <Button variant="ghost" color="warning">
                    Button
                </Button>
                <Button variant="ghost" color="white">
                    Button
                </Button>
                <Button variant="ghost" color="font">
                    Button
                </Button>
                <Button variant="ghost" color="background">
                    Button
                </Button>
                <Button variant="ghost" color="primary" disabled>
                    Button
                </Button>
            </Flexbox>

            <Flexbox gap="s">
                <Button variant="ghost" color="primary" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="secondary" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="success" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="danger" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="warning" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="white" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="font" href="#">
                    Button
                </Button>
                <Button variant="ghost" color="background" href="#">
                    Button
                </Button>
            </Flexbox>

            <Flexbox gap="s">
                <Button
                    variant="plain"
                    color="primary"
                    icons={{ left: "mail" }}
                >
                    Button
                </Button>
                <Button
                    variant="transparent"
                    color="secondary"
                    icons={{ right: "chevron-down" }}
                >
                    Button
                </Button>
                <Button
                    variant="outline"
                    color="primary"
                    icons={{ left: "mail" }}
                    isLoading
                >
                    Button
                </Button>
            </Flexbox>
        </Page>
    )
}

export default ButtonPage
