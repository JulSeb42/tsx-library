// Packages
import React from "react"

// Components
import * as Font from "../Font"
import Variables from "../Variables"
import Icon from "../Icon"

// Types
import { titleProps, props } from "./types"

// Styles
import { Container, Close, TitleContainer, Title } from "./styles"

const TitleFunction: React.FC<titleProps> = ({ icon, iconColor, title }) => {
    return icon ? (
        <Title>
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
                        : iconColor
                }
            />

            <Font.H5>{title}</Font.H5>
        </Title>
    ) : (
        <Font.H5>{title}</Font.H5>
    )
}

const Toast: React.FC<props> = ({
    close,
    icon,
    iconColor,
    customIconClose,
    title = "Title",
    children = "Content",
    ...props
}) => {
    return (
        <Container gap={Variables.Spacers.XS} {...props}>
            {close ? (
                <TitleContainer>
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
                </TitleContainer>
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
