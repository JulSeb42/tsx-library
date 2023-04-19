/*=============================================== Input components ===============================================*/

import React from "react"
import { Icon } from "../../"
import { CheckCircleIcon, CloseCircleIcon } from "../../icons"
import classNames from "classnames"

import { InputBaseMixin, StyledRightContainer, IconContainer } from "./styles"

import type {
    RightContainerProps,
    IconComponentProps,
    ValidationComponentProps,
} from "./types"

const RightContainer = ({
    disabled,
    children,
    variant = "rounded",
    className,
}: RightContainerProps) => (
    <StyledRightContainer
        data-variant={variant}
        className={classNames(
            { disabled: disabled },
            "input-right-container",
            className
        )}
    >
        {children}
    </StyledRightContainer>
)

const IconComponent = ({
    icon,
    disabled,
    validation,
    size = 24,
    variant = "rounded",
    backgroundColor,
    className,
}: IconComponentProps) => (
    <IconContainer
        data-variant={variant}
        data-background={backgroundColor}
        data-validation={validation}
        className={classNames(
            { disabled: disabled },
            "input-icon-container",
            className
        )}
    >
        {typeof icon === "string" ? (
            <Icon src={icon} size={size} className="input-icon" />
        ) : (
            icon
        )}
    </IconContainer>
)

const ValidationComponent = ({ validation }: ValidationComponentProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    if (getValidationStatus === "passed") {
        if (typeof validation === "object" && validation.iconPassed) {
            return (
                <Icon
                    src={validation.iconPassed}
                    size={16}
                    color="success"
                    className="validation-icon icon-success"
                />
            )
        }

        return (
            <CheckCircleIcon
                size={16}
                color="success"
                className="validation-icon icon-success"
            />
        )
    }

    if (getValidationStatus === "not-passed") {
        if (typeof validation === "object" && validation.iconNotPassed) {
            return (
                <Icon
                    src={validation.iconNotPassed}
                    size={16}
                    color="danger"
                    className="validation-icon icon-danger"
                />
            )
        }

        return (
            <CloseCircleIcon
                size={16}
                color="danger"
                className="validation-icon icon-danger"
            />
        )
    }

    return null
}

export { RightContainer, InputBaseMixin, IconComponent, ValidationComponent }
