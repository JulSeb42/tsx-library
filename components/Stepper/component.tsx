/*=============================================== Stepper ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import CheckIcon from "../../icons/CheckIcon"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { StepperProps } from "./types"

const Stepper = ({ steps, active, options, ...props }: StepperProps) => (
    <Styles.StyledStepper $direction={options?.direction || "row"} {...props}>
        {steps.map((step, i) => (
            <Styles.Item $direction={options?.direction || "row"} key={uuid()}>
                <Styles.Number $isActive={active >= i ? true : false}>
                    {active >= i + 1 ? (
                        options?.iconActive ? (
                            <Icon src={options?.iconActive} size={16} />
                        ) : (
                            <CheckIcon size={16} />
                        )
                    ) : (
                        i
                    )}
                </Styles.Number>

                <Styles.Text
                    tag="small"
                    as={step.to ? Link : "small"}
                    to={step.to}
                >
                    {step.text}
                </Styles.Text>
            </Styles.Item>
        ))}
    </Styles.StyledStepper>
)

export default Stepper
