// Imports
import React from "react"

import * as Font from "../Font"
import Flexbox from "../Flexbox"
import Icon from "../Icon"
import Variables from "../Variables"

import { containerProps, titleProps } from "./types"

import { Container, Close } from "./styles"

const TitleFunction: React.FC<titleProps> = ({ icon, iconColor, title }) => {
    return icon ? (
        <Flexbox alignItems="center" gap="xxs">
            <Icon
                src={icon}
                size={16}
                color={
                    iconColor === "primary"
                        ? Variables.Colors.Primary500
                        : iconColor === "secondary"
                        ? Variables.Colors.Secondary500
                        : iconColor === "success"
                        ? Variables.Colors.Success500
                        : iconColor === "danger"
                        ? Variables.Colors.Danger500
                        : iconColor === "warning"
                        ? Variables.Colors.Warning500
                        : iconColor === "black"
                        ? Variables.Colors.Black
                        : iconColor === "gray"
                        ? Variables.Colors.Gray500
                        : iconColor
                }
            />

            <Font.H5>{title}</Font.H5>
        </Flexbox>
    ) : (
        <Font.H5>{title}</Font.H5>
    )
}

const Toast: React.FC<containerProps> = ({
    padding = Variables.Spacers.M,
    close,
    icon,
    iconColor = "primary",
    customIconClose,
    radius = "m",
    shadow = "s",
    gap = "xs",
    title = "Title",
    children = "Content",
}) => {
    return (
        <Container gap={gap} padding={padding} radius={radius} shadow={shadow}>
            {close ? (
                <Flexbox
                    alignItems="center"
                    justifyContent="space-between"
                    gap="xxs"
                >
                    <TitleFunction
                        title={title}
                        icon={icon}
                        iconColor={iconColor}
                    />

                    <Close onClick={close}>
                        {customIconClose ? (
                            <Icon src={customIconClose} size={24} />
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                    </Close>
                </Flexbox>
            ) : (
                <TitleFunction
                    title={title}
                    icon={icon}
                    iconColor={iconColor}
                />
            )}

            {children && <Font.P>{children}</Font.P>}
        </Container>
    )
}

export default Toast
