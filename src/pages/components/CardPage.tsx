/*=============================================== CardPage ===============================================*/

import React from "react"
import { Page } from "../../components"
import { Card, Text, Image, Grid, Flexbox, Button } from "../../lib"

const CardPage = () => {
    return (
        <Page title="Card">
            <Card
                border={{
                    width: 1,
                }}
            >
                <Text tag="h4">Hello World</Text>
            </Card>

            <Card
                border={{
                    style: "dashed",
                }}
                onClick={() => alert("Hello")}
                padding="xs"
            >
                <Text tag="h4">Hello World</Text>
            </Card>

            <Card
                to="/"
                borderRadius="xxl"
                padding={{
                    topBottom: "xxl",
                    leftRight: "xs",
                }}
                border={{
                    width: 4,
                }}
            >
                <Text>To</Text>
            </Card>

            <Card
                padding={0}
                border={{
                    color: "gray-200",
                }}
                maxWidth={400}
                flexDirection="column"
            >
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
