/*=============================================== Input components ===============================================*/

import React from "react"

import { Icon } from "../../"
import CheckCircleIcon from "../../icons/CheckCircleIcon"
import CloseCircleIcon from "../../icons/CloseCircleIcon"

import * as Styles from "./styles"
import { InputBaseMixin } from "./styles"

import {
    RightContainerProps,
    IconComponentProps,
    ValidationComponentProps,
} from "./types"

const RightContainer = ({
    disabled,
    children,
    variant = "rounded",
}: RightContainerProps) => (
    <Styles.RightContainer $disabled={disabled} $variant={variant}>
        {children}
    </Styles.RightContainer>
)

const IconComponent = ({
    icon,
    disabled,
    accentColor = "primary",
    validation,
    size = 24,
    variant = "rounded",
}: IconComponentProps) => (
    <Styles.IconContainer
        $color={
            disabled
                ? "gray"
                : validation === "not-passed"
                ? "danger"
                : accentColor
        }
        $variant={variant}
    >
        <Icon src={icon} size={size} />
    </Styles.IconContainer>
)

const ValidationComponent = ({ validation }: ValidationComponentProps) => {
    const getValidationStatus =
        typeof validation === "object" ? validation?.status : validation

    return getValidationStatus === "passed" ? (
        typeof validation === "object" && validation.iconPassed ? (
            <Icon src={validation.iconPassed} size={16} color="success" />
        ) : (
            <CheckCircleIcon size={16} color="success" />
        )
    ) : getValidationStatus === "not-passed" ? (
        typeof validation === "object" && validation.iconNotPassed ? (
            <Icon src={validation.iconNotPassed} size={16} color="danger" />
        ) : (
            <CloseCircleIcon size={16} color="danger" />
        )
    ) : (
        <></>
    )
}

export { RightContainer, InputBaseMixin, IconComponent, ValidationComponent }