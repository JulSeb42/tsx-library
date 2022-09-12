/*=============================================== Stepper ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import CheckIcon from "../../icons/CheckIcon"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { StepperProps } from "./types"

const Stepper = ({
    steps,
    active,
    direction,
    iconActive,
    accentColor = "primary",
    ...props
}: StepperProps) => (
    <Styles.StyledStepper
        $direction={direction || "row"}
        $accentColor={accentColor}
        {...props}
    >
        {steps.map((step, i) => (
            <Styles.Item $direction={direction || "row"} key={uuid()}>
                <Styles.Number
                    $accentColor={accentColor}
                    $isActive={active >= i ? true : false}
                >
                    {active >= i + 1 ? (
                        iconActive ? (
                            <Icon src={iconActive} size={16} />
                        ) : (
                            <CheckIcon size={16} />
                        )
                    ) : (
                        i
                    )}
                </Styles.Number>

                <Styles.Text
                    as={step.to ? Link : "small"}
                    to={step.to}
                    $accentColor={accentColor}
                >
                    {step.text}
                </Styles.Text>
            </Styles.Item>
        ))}
    </Styles.StyledStepper>
)

export default Stepper
