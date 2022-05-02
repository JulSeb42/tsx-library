// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import Variables from "../Variables"
import Loader from "../Loader"
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Button: React.FC<props> = ({
    to,
    btnStyle = "plain",
    color = "primary",
    loading,
    iconLeft,
    iconRight,
    children,
    ...props
}) => {
    return (
        <Container
            as={to ? Link : "button"}
            to={to}
            btnStyle={btnStyle}
            color={color}
            {...props}
        >
            {!loading && iconLeft && (
                <Icon src={iconLeft} size={16} className="icon-left" />
            )}

            {loading && (
                <Loader
                    size={16}
                    backgroundColor={
                        btnStyle === "plain"
                            ? Variables.Colors.Gray100
                            : Variables.Colors.White
                    }
                    color="currentColor"
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
