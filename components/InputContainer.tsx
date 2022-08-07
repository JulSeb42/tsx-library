/*=============================================== InputContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Text from "./Text"

/*==================== Component ====================*/

const InputContainer = ({ label, helper, helperBottom, counter, maxLength, value, children, id }: Props) => (
    <Container>
        {label && <Label htmlFor={id}>{label}</Label>}

        {helper && <Text>{helper}</Text>}

        {children}

        {helperBottom && <Text tag="small">{helperBottom}</Text>}

        {counter && typeof value === "string" && (
            <Text tag="small" color="gray-500">
                {value.length}
                {maxLength ? ` / ${maxLength}` : ""}
            </Text>
        )}
    </Container>
)

export default InputContainer

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    helper?: string
    helperBottom?: string
    counter?: boolean
    maxLength?: number
    value?: any
    id: string
}

/*==================== Styles ====================*/

const Container = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
`

const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Black};
`
