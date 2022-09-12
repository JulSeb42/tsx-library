/*=============================================== Input components ===============================================*/

import React from "react"

import Icon from "../Icon"
import CheckCircleIcon from "../../icons/CheckCircleIcon"
import CloseCircleIcon from "../../icons/CloseCircleIcon"

import * as Styles from "./styles"
import { InputBaseMixin } from "./styles"

import {
    RightContainerProps,
    IconComponentProps,
    ValidationComponentProps,
} from "./types"

const RightContainer = ({ disabled, children }: RightContainerProps) => (
    <Styles.RightContainer $disabled={disabled}>
        {children}
    </Styles.RightContainer>
)

const IconComponent = ({
    icon,
    disabled,
    accentColor = "primary",
    validation,
}: IconComponentProps) => (
    <Styles.IconContainer
        $color={
            disabled
                ? "gray"
                : validation === "not-passed"
                ? "danger"
                : accentColor
        }
    >
        <Icon src={icon} size={24} />
    </Styles.IconContainer>
)

const ValidationComponent = ({ validation }: ValidationComponentProps) =>
    validation.status === "passed" ? (
        validation.iconPassed ? (
            <Icon src={validation.iconPassed} size={16} color="success" />
        ) : (
            <CheckCircleIcon size={16} color="success" />
        )
    ) : validation.iconNotPassed ? (
        <Icon src={validation.iconNotPassed} size={16} color="danger" />
    ) : (
        <CloseCircleIcon size={16} color="danger" />
    )

export { RightContainer, InputBaseMixin, IconComponent, ValidationComponent }
