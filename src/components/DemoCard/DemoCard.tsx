/*=============================================== DemoCard component ===============================================*/

import React from "react"
import { Text } from "../../lib"

import * as Styles from "./styles"
import type { DemoCardProps } from "./types"

const DemoCard = ({ shadow, spacer, radius }: DemoCardProps) => {
    const { name, variable, css, value } = shadow || spacer || radius

    return (
        <Styles.StyledDemoCard>
            <Styles.Square
                $shadow={shadow ? css : undefined}
                $radius={radius ? css : undefined}
                $spacer={spacer ? css : undefined}
            />

            <Styles.Content>
                <Text tag="h4">{name}</Text>

                <Text>
                    <Text tag="strong">Variable: </Text>
                    {variable}
                </Text>

                <Text>
                    <Text tag="strong">CSS: </Text>
                    {css}
                </Text>

                <Text>
                    <Text tag="strong">Value: </Text>
                    {value}
                </Text>
            </Styles.Content>
        </Styles.StyledDemoCard>
    )
}

export default DemoCard
