/*=============================================== InputImage component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Icon } from "../../"
import { ImageIcon, EditIcon } from "../../icons"
import { InputContainer } from "../InputContainer"

import {
    StyledInputImage,
    StyledEmptyContainer,
    StyledHoverContainer,
    Label,
    Img,
    Input,
} from "./styles"
import type { InputImageProps } from "./types"

const InputImage = forwardRef(
    (
        {
            id,
            img,
            inputSize,
            iconSize = 48,
            validation,
            icons,
            disabled,
            label,
            helper,
            helperBottom,
            className,
            ...rest
        }: InputImageProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const iconColor =
            validation === "not-passed"
                ? "danger"
                : disabled
                ? "gray"
                : "primary"

        const emptyContainer = () => (
            <StyledEmptyContainer
                data-validation={validation}
                className="input-image-empty-container"
            >
                {icons?.empty ? (
                    typeof icons?.empty === "string" ? (
                        <Icon
                            src={icons.empty}
                            color={iconColor}
                            size={iconSize}
                            className="input-image-icon-empty"
                        />
                    ) : (
                        icons?.empty
                    )
                ) : (
                    <ImageIcon
                        size={iconSize}
                        color={iconColor}
                        className="input-image-icon-empty"
                    />
                )}
            </StyledEmptyContainer>
        )

        const hoverContainer = () => (
            <StyledHoverContainer>
                {icons?.hover ? (
                    typeof icons?.hover === "string" ? (
                        <Icon
                            src={icons.hover}
                            size={iconSize - 8}
                            color={iconColor}
                            className="input-image-icon-hover"
                        />
                    ) : (
                        icons?.hover
                    )
                ) : (
                    <EditIcon
                        size={iconSize - 8}
                        color={iconColor}
                        className="input-image-icon-hover"
                    />
                )}
            </StyledHoverContainer>
        )

        const inputFn = () => (
            <StyledInputImage
                className={classNames(
                    "input-image-container",
                    !label && !helper && !helperBottom && className
                )}
            >
                <Label
                    htmlFor={id}
                    className={classNames(
                        { disabled: disabled },
                        "input-image-label"
                    )}
                    data-size={inputSize}
                >
                    {img === "" ? (
                        emptyContainer()
                    ) : (
                        <Img
                            src={img}
                            alt="Image input"
                            width="100%"
                            height="100%"
                            fit="cover"
                            className="input-image-image"
                        />
                    )}

                    {hoverContainer()}
                </Label>

                <Input
                    type="file"
                    id={id}
                    disabled={disabled}
                    ref={ref}
                    className="input-image-input"
                    {...rest}
                />
            </StyledInputImage>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                className={className}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default InputImage
