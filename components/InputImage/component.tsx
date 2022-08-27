/*=============================================== InputImage ===============================================*/

import React, { forwardRef } from "react"

import Variables from "../../Variables"
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
            options,
            icons,
            value,
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
                                : "primary"
                        }
                        size={48}
                    />
                ) : (
                    <ImageIcon
                        size={48}
                        color={
                            validation === "not-passed"
                                ? Variables.Colors.Danger500
                                : disabled
                                ? Variables.Colors.Gray500
                                : Variables.Colors.Primary500
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
                            validation === "not-passed" ? "danger" : "primary"
                        }
                    />
                ) : (
                    <EditIcon
                        size={32}
                        color={
                            validation === "not-passed"
                                ? Variables.Colors.Danger500
                                : Variables.Colors.Primary500
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
                >
                    {img.src === "" ? (
                        emptyContainer()
                    ) : (
                        <Styles.Img
                            src={img.src}
                            alt={img.alt || "Image"}
                            width="100%"
                            height="100%"
                            options={{ fit: "cover" }}
                        />
                    )}

                    {hoverContainer()}
                </Styles.Label>

                <Styles.Input
                    type="file"
                    id={id}
                    disabled={disabled}
                    value={value}
                    ref={ref}
                    {...props}
                />
            </Styles.StyledInputImage>
        )

        return options ? (
            <InputContainer
                id={id}
                label={options.label}
                helper={options.helper}
                helperBottom={options.helperBottom}
            >
                {inputFunction()}
            </InputContainer>
        ) : (
            inputFunction()
        )
    }
)

export default InputImage
