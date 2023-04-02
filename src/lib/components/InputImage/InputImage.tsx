/*=============================================== InputImage component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon } from "../../"
import { ImageIcon, EditIcon } from "../../icons"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import type { InputImageProps } from "./types"

const InputImage = forwardRef(
    (
        {
            disabled,
            validation,
            width = 64,
            height = 64,
            iconSize = 48,
            img,
            icons,
            label,
            helper,
            helperBottom,
            accentColor = "primary",
            borderRadius = "m",
            id,
            ...rest
        }: InputImageProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const iconColor =
            validation === "not-passed"
                ? "danger"
                : disabled
                ? "gray"
                : accentColor

        const emptyContainer = () => (
            <Styles.StyledEmptyContainer $validation={validation}>
                {icons?.empty ? (
                    typeof icons?.empty === "string" ? (
                        <Icon
                            src={icons.empty}
                            color={iconColor}
                            size={iconSize}
                        />
                    ) : (
                        icons?.empty
                    )
                ) : (
                    <ImageIcon size={iconSize} color={iconColor} />
                )}
            </Styles.StyledEmptyContainer>
        )

        const hoverContainer = () => (
            <Styles.StyledHoverContainer>
                {icons?.hover ? (
                    typeof icons?.hover === "string" ? (
                        <Icon
                            src={icons.hover}
                            size={iconSize - 8}
                            color={iconColor}
                        />
                    ) : (
                        icons?.hover
                    )
                ) : (
                    <EditIcon size={iconSize - 8} color={iconColor} />
                )}
            </Styles.StyledHoverContainer>
        )

        const inputFn = () => (
            <Styles.StyledInputImage>
                <Styles.Label
                    htmlFor={id}
                    $disabled={disabled}
                    $width={width}
                    $height={height}
                    $radius={borderRadius}
                >
                    {img === "" ? (
                        emptyContainer()
                    ) : (
                        <Styles.Img
                            src={img}
                            alt="Image input"
                            width="100%"
                            height="100%"
                            fit="cover"
                        />
                    )}

                    {hoverContainer()}
                </Styles.Label>

                <Styles.Input
                    type="file"
                    id={id}
                    disabled={disabled}
                    ref={ref}
                    {...rest}
                />
            </Styles.StyledInputImage>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default InputImage
