// Imports
import React from "react"
import { Link } from "react-router-dom"

import Variables from "../Variables"
import Loader from "../Loader"
import Icon from "../Icon"

import { props } from "./types"

import { Container } from "./styles"

const Button: React.FC<props> = ({
    to,
    children,
    color = "primary",
    btnStyle = "plain",
    loading,
    iconLeft,
    iconRight,
    disabled,
    justify = "start",
    type,
    noPadding,
    colorHover,
    colorActive,
    ...props
}) => {
    return (
        <Container
            as={to ? Link : "button"}
            to={to}
            color={color}
            btnStyle={btnStyle}
            disabled={disabled}
            justify={justify}
            type={type}
            colorHover={colorHover}
            colorActive={colorActive}
            noPadding={noPadding}
            {...props}
        >
            {!loading && iconLeft && (
                <Icon src={iconLeft} size={16} className="icon-left" />
            )}

            {loading && (
                <Loader
                    size={16}
                    background={
                        btnStyle === "plain"
                            ? Variables.Colors.Gray100
                            : "white"
                    }
                    color="current"
                    marginRight={Variables.Spacers.XS}
                />
            )}

            {children}

            {iconRight && (
                <Icon src={iconRight} size={16} className="icon-right" />
            )}
        </Container>
    )
}

export default Button
