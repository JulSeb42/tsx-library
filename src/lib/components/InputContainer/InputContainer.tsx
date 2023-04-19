/*=============================================== InputContainer ===============================================*/

import React from "react"
import classNames from "classnames"

import { Text, Icon } from "../../"

import {
    StyledInputContainer,
    Label,
    HelperBottomContainer,
    IconContainer,
    Counter,
} from "./styles"
import type { InputContainerProps } from "./types"

const InputContainer = ({
    id,
    label,
    helper,
    helperBottom,
    children,
    counter,
    maxLength,
    value,
    className,
}: InputContainerProps) => {
    const helperBottomFn = () => (
        <Text tag="small" className="helper-bottom">
            {typeof helperBottom === "object"
                ? helperBottom.text
                : helperBottom}
        </Text>
    )

    return (
        <StyledInputContainer
            className={classNames("input-container", className)}
        >
            {label && (
                <Label htmlFor={id} className="label">
                    {label}
                </Label>
            )}

            {helper && <Text className="helper">{helper}</Text>}

            {children}

            {helperBottom &&
                ((typeof helperBottom === "object" && helperBottom.text) ||
                    typeof helperBottom === "string") &&
                (typeof helperBottom === "object" && helperBottom.icon ? (
                    <HelperBottomContainer className="helper-bottom-container">
                        <IconContainer className="helper-bottom-icon-container">
                            <Icon
                                src={helperBottom.icon}
                                size={14}
                                color={helperBottom.iconColor || "primary"}
                                className="helper-bottom-icon"
                            />
                        </IconContainer>

                        {helperBottomFn()}
                    </HelperBottomContainer>
                ) : (
                    helperBottomFn()
                ))}

            {typeof value === "string" && counter && (
                <Counter className="input-counter">
                    {value.toString().length}
                    {maxLength ? ` / ${maxLength}` : ""}
                </Counter>
            )}
        </StyledInputContainer>
    )
}

export default InputContainer
