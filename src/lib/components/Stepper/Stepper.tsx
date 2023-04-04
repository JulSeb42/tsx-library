/*=============================================== Stepper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { Icon, uuid } from "../../"
import { CheckIcon } from "../../icons"

import * as Styles from "./styles"
import type { StepperProps, StepProps } from "./types"

export const Step = forwardRef(
    (
        {
            as,
            direction,
            accentColor,
            isActive,
            iconActive,
            number,
            href,
            children,
            to,
            ...rest
        }: StepProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        return (
            <Styles.Item as={as} $direction={direction} ref={ref} {...rest}>
                <Styles.Number $accentColor={accentColor} $isActive={isActive}>
                    {isActive ? (
                        iconActive ? (
                            typeof iconActive === "string" ? (
                                <Icon src={iconActive} size={16} />
                            ) : (
                                iconActive
                            )
                        ) : (
                            <CheckIcon size={16} />
                        )
                    ) : (
                        number
                    )}
                </Styles.Number>

                <Styles.StyledText
                    as={href ? "a" : to ? Link : "small"}
                    $isLink={!!href || !!to}
                    href={href}
                    to={to}
                    $accentColor={accentColor}
                >
                    {children}
                </Styles.StyledText>
            </Styles.Item>
        )
    }
)

export const Stepper = forwardRef(
    (
        {
            as,
            steps,
            children,
            active = 0,
            direction = "row",
            iconActive,
            accentColor = "primary",
            ...rest
        }: StepperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledStepper
            ref={ref}
            as={as}
            $direction={direction}
            $accentColor={accentColor}
            {...rest}
        >
            {steps
                ? steps.map((step, i) =>
                      step.to ? (
                          <Step
                              direction={direction}
                              accentColor={accentColor}
                              isActive={active >= i + 1}
                              iconActive={iconActive}
                              number={i + 1}
                              to={step.to}
                              key={uuid()}
                          >
                              {step.text}
                          </Step>
                      ) : step.href ? (
                          <Step
                              direction={direction}
                              accentColor={accentColor}
                              isActive={active >= i + 1}
                              iconActive={iconActive}
                              number={i + 1}
                              href={step.href}
                              key={uuid()}
                          >
                              {step.text}
                          </Step>
                      ) : (
                          <Step
                              direction={direction}
                              accentColor={accentColor}
                              isActive={active >= i + 1}
                              iconActive={iconActive}
                              number={i + 1}
                              key={uuid()}
                          >
                              {step.text}
                          </Step>
                      )
                  )
                : children}
        </Styles.StyledStepper>
    )
)
