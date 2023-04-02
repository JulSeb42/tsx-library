/*=============================================== ColorCard component ===============================================*/

import React from "react"
import { Text } from "../../lib"

import * as Styles from "./styles"
import type { ColorCardProps } from "./types"

const ColorCard = ({
    color: { name, variable, css, hex, rgb },
}: ColorCardProps) => {
    return (
        <Styles.StyledColorCard>
            <Styles.Square $background={css} />

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
                    <Text tag="strong">Hex: </Text>
                    {hex}
                </Text>
                <Text>
                    <Text tag="strong">Rgb: </Text>
                    {rgb}
                </Text>
            </Styles.Content>
        </Styles.StyledColorCard>
    )
}

export default ColorCard
