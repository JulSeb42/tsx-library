/*=============================================== InputImage ===============================================*/

import React, { forwardRef } from "react"

import InputContainer from "../InputContainer"
import Icon from "../Icon"
import ImageIcon from "../../icons/ImageIcon"
import EditIcon from "../../icons/EditIcon"

import * as Styles from "./styles"
import { InputImageProps } from "./types"

const InputImage = forwardRef(
    (
        {
            id,
            disabled,
            validation,
            width = 64,
            height = 64,
            img,
            icons,
            label,
            helper,
            helperBottom,
            accentColor,
            borderRadius = "m",
            ...props
        }: InputImageProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const emptyContainer = () => (
            <Styles.StyledEmptyContainer $validation={validation}>
                {icons?.empty ? (
                    <Icon
                        src={icons.empty}
                        color={
                            validation === "not-passed"
                                ? "danger"
                                : disabled
                                ? "gray"
                                : accentColor
                                ? accentColor
                                : "primary"
                        }
                        size={48}
                    />
                ) : (
                    <ImageIcon
                        size={48}
                        color={
                            validation === "not-passed"
                                ? "danger"
                                : disabled
                                ? "gray"
                                : accentColor
                                ? accentColor
                                : "primary"
                        }
                    />
                )}
            </Styles.StyledEmptyContainer>
        )

        const hoverContainer = () => (
            <Styles.StyledHoverContainer>
                {icons?.hover ? (
                    <Icon
                        src={icons.hover}
                        size={32}
                        color={
                            validation === "not-passed"
                                ? "danger"
                                : accentColor
                                ? accentColor
                                : "primary"
                        }
                    />
                ) : (
                    <EditIcon
                        size={32}
                        color={
                            validation === "not-passed"
                                ? "danger"
                                : accentColor
                                ? accentColor
                                : "primary"
                        }
                    />
                )}
            </Styles.StyledHoverContainer>
        )

        const inputFunction = () => (
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
                    {...props}
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
                {inputFunction()}
            </InputContainer>
        ) : (
            inputFunction()
        )
    }
)

export default InputImage
