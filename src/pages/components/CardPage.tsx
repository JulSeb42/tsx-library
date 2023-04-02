/*=============================================== CardPage ===============================================*/

import React from "react"
import { Page } from "../../components"
import { Card, Text, Image, Grid, Flexbox, Button } from "../../lib"

const CardPage = () => {
    return (
        <Page title="Card">
            <Card borderWidth={1}>
                <Text tag="h4">Hello World</Text>
            </Card>

            <Card
                borderStyle="dashed"
                borderWidth={2}
                borderColor="gray-500"
                onClick={() => alert("Hello")}
                cursor="pointer"
                padding="xs"
            >
                <Text tag="h4">Hello World</Text>
            </Card>

            <Card
                href="/"
                isRouterLink
                borderRadius="xxl"
                padding={{
                    topBottom: "xxl",
                    leftRight: "xs",
                }}
                borderWidth={4}
            >
                <Text>To</Text>
            </Card>

            <Card padding={0} borderWidth={1} width={400} shadow="xs">
                <Image
                    src="https://images.unsplash.com/photo-1644722126641-d01298483d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Img"
                    height={150}
                    fit="cover"
                />

                <Grid padding="xs">
                    <Text tag="h4">Title</Text>
                    <Text>Hello</Text>
                    <Flexbox justifyContent="flex-end">
                        <Button>Button</Button>
                    </Flexbox>
                </Grid>
            </Card>
        </Page>
    )
}

export default CardPage
