/*=============================================== InputContainer ===============================================*/

import React from "react"

import Text from "../Text"
import Icon from "../Icon"

import * as Styles from "./styles"
import { ExtendedInputContainerProps } from "./types"

const InputContainer = ({
    id,
    label,
    helper,
    helperBottom,
    children,
    counter,
    maxLength,
    value,
    accentColor = "primary",
}: ExtendedInputContainerProps) => (
    <Styles.StyledInputContainer>
        {label && (
            <Styles.Label $color={accentColor} htmlFor={id}>
                {label}
            </Styles.Label>
        )}

        {helper && <Text>{helper}</Text>}

        {children}

        {helperBottom && (
            <Styles.HelperBottom tag="small">
                {typeof helperBottom === "object" && helperBottom.icon && (
                    <Styles.IconContainer>
                        <Icon
                            src={helperBottom.icon}
                            size={14}
                            color={helperBottom.iconColor || "primary"}
                        />
                    </Styles.IconContainer>
                )}

                {typeof helperBottom === "object"
                    ? helperBottom.text
                    : helperBottom}
            </Styles.HelperBottom>
        )}

        {typeof value === "string" && counter && (
            <Text tag="small" color="gray">
                <Text tag="em">
                    {value.length}
                    {maxLength ? ` / ${maxLength}` : ""}
                </Text>
            </Text>
        )}
    </Styles.StyledInputContainer>
)

export default InputContainer
