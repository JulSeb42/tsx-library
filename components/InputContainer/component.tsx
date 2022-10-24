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
}: ExtendedInputContainerProps) => {
    const helperBottomFunc = () => (
        <Styles.HelperBottom
            $style={
                typeof helperBottom === "object"
                    ? helperBottom.style
                    : "default"
            }
            color={
                typeof helperBottom === "object" ? helperBottom.color : "font"
            }
        >
            {typeof helperBottom === "object"
                ? helperBottom.text
                : helperBottom}
        </Styles.HelperBottom>
    )

    return (
        <Styles.StyledInputContainer>
            {label && (
                <Styles.Label $color={accentColor} htmlFor={id}>
                    {label}
                </Styles.Label>
            )}

            {helper && <Text>{helper}</Text>}

            {children}

            {helperBottom &&
                ((typeof helperBottom === "object" && helperBottom.text) ||
                    typeof helperBottom === "string") &&
                (typeof helperBottom === "object" && helperBottom.icon ? (
                    <Styles.HelperBottomContainer>
                        <Styles.IconContainer>
                            <Icon
                                src={helperBottom.icon}
                                size={14}
                                color={helperBottom.iconColor || "primary"}
                            />
                        </Styles.IconContainer>

                        {helperBottomFunc()}
                    </Styles.HelperBottomContainer>
                ) : (
                    helperBottomFunc()
                ))}

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
}

export default InputContainer
