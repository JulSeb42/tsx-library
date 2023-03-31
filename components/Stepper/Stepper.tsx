/*=============================================== Stepper component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

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
            text,
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
                    as={href ? "a" : "small"}
                    $isLink={!!href}
                    href={href}
                    $accentColor={accentColor}
                >
                    {text}
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
                ? steps.map((step, i) => (
                      <Step
                          direction={direction}
                          accentColor={accentColor}
                          isActive={active >= i + 1}
                          iconActive={iconActive}
                          number={i + 1}
                          href={step.href}
                          text={step.text}
                          key={uuid()}
                      />
                  ))
                : children}
        </Styles.StyledStepper>
    )
)
