/*=============================================== InputImage component ===============================================*/

import React, { forwardRef } from "react"

import { Icon } from "../../"
import { InputContainer } from "../InputContainer"
import ImageIcon from "../../icons/ImageIcon"
import EditIcon from "../../icons/EditIcon"

import * as Styles from "./styles"
import { InputImageProps } from "./types"

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
        ref?: React.ForwardedRef<HTMLInputElement>
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
                    <Icon src={icons.empty} color={iconColor} size={iconSize} />
                ) : (
                    <ImageIcon size={iconSize} color={iconColor} />
                )}
            </Styles.StyledEmptyContainer>
        )

        const hoverContainer = () => (
            <Styles.StyledHoverContainer>
                {icons?.hover ? (
                    <Icon
                        src={icons.hover}
                        size={iconSize - 8}
                        color={iconColor}
                    />
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
                    {img.src === "" ? (
                        emptyContainer()
                    ) : (
                        <Styles.Img
                            src={img.src}
                            alt={img.alt || "Image"}
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
