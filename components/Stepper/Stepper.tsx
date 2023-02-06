/*=============================================== Stepper component ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import { Icon, uuid } from "../../"
import CheckIcon from "../../icons/CheckIcon"

import * as Styles from "./styles"
import { StepperProps } from "./types"

const Stepper = forwardRef(
    (
        {
            as,
            steps,
            active = 0,
            direction = "row",
            iconActive,
            accentColor = "primary",
            ...rest
        }: StepperProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledStepper
            ref={ref}
            as={as}
            $direction={direction}
            $accentColor={accentColor}
            {...rest}
        >
            {steps.map((step, i) => (
                <Styles.Item $direction={direction} key={uuid()}>
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
                            i + 1
                        )}
                    </Styles.Number>

                    <Styles.StyledText
                        as={step.to ? Link : "small"}
                        to={step.to}
                        $accentColor={accentColor}
                    >
                        {step.text}
                    </Styles.StyledText>
                </Styles.Item>
            ))}
        </Styles.StyledStepper>
    )
)

export default Stepper
