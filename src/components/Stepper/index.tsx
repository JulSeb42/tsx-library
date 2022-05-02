// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import * as Font from "../Font"
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
import { Container, Step, Number, Text } from "./styles"

const Stepper: React.FC<props> = ({ steps, active }) => {
    return (
        <Container justify="space-between">
            {steps.map((step, i) => (
                <Step
                    key={i}
                    as="span"
                    direction="column"
                    align="center"
                    justify="center"
                    gap={Variables.Spacers.XXS}
                >
                    <Number
                        size={24}
                        color={
                            active >= i + 1
                                ? "primary"
                                : Variables.Colors.Primary300
                        }
                        icon={active > i + 1 ? "check" : ""}
                    >
                        {(active < i + 1 || active === i + 1) && i + 1}
                    </Number>

                    <Text as={step.to ? Link : Font.Small} to={step.to}>
                        {step.text}
                    </Text>
                </Step>
            ))}
        </Container>
    )
}

export default Stepper
