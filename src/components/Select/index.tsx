// Imports
import React from "react"

import InputContainer from "../InputContainer"

import { props } from "./types"

import { Container, Selected, List, SelectItem } from "./styles"

const Select: React.FC<props> = ({
    label,
    helper,
    validation,
    helperBottom,
    validationText,
    value,
    disabled,
    onClickSelect,
    isOpen,
    selected,
    index,
    id,
    children,
    ...props
}) => {
    return label || helper || validation || helperBottom ? (
        <InputContainer
            label={label}
            helper={helper}
            validation={validation}
            validationText={validationText}
            id={id}
            value={value}
            helperBottom={helperBottom}
        >
            <Container {...props}>
                <Selected
                    onClick={!disabled && onClickSelect}
                    isOpen={isOpen}
                    disabled={disabled}
                    arrow={children ? true : false}
                    noSelect={!children && true}
                >
                    {selected}
                </Selected>

                {children && (
                    <List isOpen={isOpen} index={index}>
                        {children}
                    </List>
                )}
            </Container>
        </InputContainer>
    ) : (
        <Container {...props}>
            <Selected
                onClick={!disabled && onClickSelect}
                isOpen={isOpen}
                disabled={disabled}
                arrow={children ? true : false}
                noSelect={!children && true}
            >
                {selected}
            </Selected>

            {children && (
                <List isOpen={isOpen} index={index}>
                    {children}
                </List>
            )}
        </Container>
    )
}

export { Select, SelectItem }
