/*=============================================== InputContainer ===============================================*/

import React from "react"

import Text from "../Text"
import Icon from "../Icon"

import * as Styles from "./styles"
import { InputContainerProps } from "./types"

const InputContainer = ({
    label,
    helper,
    helperBottom,
    counter,
    maxLength,
    value,
    children,
    id,
}: InputContainerProps) => (
    <Styles.StyledInputContainer>
        {label && <Styles.Label htmlFor={id}>{label}</Styles.Label>}

        {helper && <Text>{helper}</Text>}

        {children}

        {helperBottom && (
            <Styles.HelperBottom tag="small">
                {typeof helperBottom === "object" && helperBottom.icon && (
                    <Styles.IconContainer>
                        <Icon
                            src={helperBottom.icon}
                            size={14}
                            color={helperBottom.iconColor}
                        />
                    </Styles.IconContainer>
                )}

                {typeof helperBottom === "object"
                    ? helperBottom.text
                    : helperBottom}
            </Styles.HelperBottom>
        )}

        {counter && typeof value === "string" && (
            <Text tag="small" color="gray-500">
                {value.length}
                {maxLength ? ` / ${maxLength}` : ""}
            </Text>
        )}
    </Styles.StyledInputContainer>
)

export default InputContainer
