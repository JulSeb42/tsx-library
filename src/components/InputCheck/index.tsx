// Packages
import React from "react"

// Components
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container, Label, Input, Checkbox, Radio, Toggle } from "./styles"

const InputCheck: React.FC<props> = ({
    disabled,
    selector,
    toggle,
    label = "label",
    justify,
    type = "checkbox",
    icon,
    name,
    id,
    defaultChecked,
    ...props
}) => {
    return selector ? (
        <Container justify={justify} disabled={disabled} as="span">
            <Input
                type={type}
                id={id}
                defaultChecked={defaultChecked}
                name={name}
                disabled={disabled}
                {...props}
            />

            <Label
                disabled={disabled}
                defaultChecked={defaultChecked}
                selector={selector}
                className="selector"
                htmlFor={id}
            >
                {label}
            </Label>
        </Container>
    ) : toggle ? (
        <Container justify={justify} disabled={disabled}>
            <Input
                type={type}
                id={id}
                defaultChecked={defaultChecked}
                name={name}
                disabled={disabled}
                {...props}
            />

            <Toggle className="toggle" htmlFor={id} disabled={disabled} />

            <Label disabled={disabled} selector={selector} htmlFor={id}>
                {label}
            </Label>
        </Container>
    ) : (
        <Container justify={justify} disabled={disabled} htmlFor={id}>
            <Input
                type={type}
                id={id}
                defaultChecked={defaultChecked}
                name={name}
                disabled={disabled}
                {...props}
            />

            {type === "checkbox" && (
                <Checkbox className="checkbox" htmlFor={id} disabled={disabled}>
                    {icon ? (
                        <Icon src={icon} size={14} />
                    ) : (
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http:www.w3.org/2000/svg"
                            className="icon"
                        >
                            <path
                                d="M5.83334 9.09183L3.91242 7.17092L3.08759 7.99575L5.83334 10.7415L11.4958 5.07908L10.6709 4.25425L5.83334 9.09183Z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </Checkbox>
            )}

            {type === "radio" && (
                <Radio className="radio" htmlFor={id} disabled={disabled} />
            )}

            {label && (
                <Label disabled={disabled} htmlFor={id}>
                    {label}
                </Label>
            )}
        </Container>
    )
}

export default InputCheck
