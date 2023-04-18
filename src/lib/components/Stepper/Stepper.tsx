/*=============================================== Stepper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { Icon, uuid, Text } from "../../"
import { CheckIcon } from "../../icons"

import * as Styles from "./styles"
import type { StepperProps, StepProps } from "./types"

export const Step = forwardRef(
    (
        {
            as,
            direction = "row",
            isActive,
            iconActive,
            iconSize = 16,
            number,
            href,
            children,
            to,
            blank,
            className,
            ...rest
        }: StepProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        return (
            <Styles.Item
                as={as}
                ref={ref}
                className={classNames("step", className)}
                {...rest}
            >
                <Styles.Number
                    className={classNames({ active: isActive }, "step-number")}
                >
                    {isActive ? (
                        iconActive ? (
                            typeof iconActive === "string" ? (
                                <Icon
                                    src={iconActive}
                                    size={iconSize}
                                    className="step-icon-active"
                                />
                            ) : (
                                iconActive
                            )
                        ) : (
                            <CheckIcon size={16} className="step-icon-active" />
                        )
                    ) : (
                        number
                    )}
                </Styles.Number>

                <Text tag="small" className="step-text">
                    {to ? (
                        <Link
                            to={to}
                            target={blank ? "_blank" : undefined}
                            rel={blank ? "noreferrer noopener" : undefined}
                            className="step-link"
                        >
                            {children}
                        </Link>
                    ) : href ? (
                        <a
                            href={href}
                            target={blank ? "_blank" : undefined}
                            rel={blank ? "noreferrer noopener" : undefined}
                            className="step-link"
                        >
                            {children}
                        </a>
                    ) : (
                        children
                    )}
                </Text>
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
            iconSize,
            className,
            ...rest
        }: StepperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const stepProps = {
            direction,
            iconActive,
            iconSize,
        }

        return (
            <Styles.StyledStepper
                ref={ref}
                as={as}
                className={className}
                data-direction={direction}
                {...rest}
            >
                {steps
                    ? steps.map((step, i) =>
                          step.to ? (
                              <Step
                                  {...stepProps}
                                  isActive={active >= i + 1}
                                  number={i + 1}
                                  to={step.to}
                                  blank={step.blank}
                                  key={uuid()}
                              >
                                  {step.text}
                              </Step>
                          ) : step.href ? (
                              <Step
                                  {...stepProps}
                                  isActive={active >= i + 1}
                                  number={i + 1}
                                  href={step.href}
                                  blank={step.blank}
                                  key={uuid()}
                              >
                                  {step.text}
                              </Step>
                          ) : (
                              <Step
                                  {...stepProps}
                                  isActive={active >= i + 1}
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
    }
)
