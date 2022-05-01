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

const Button: React.FC<props> = props => {
    return (
        <Container
            as={props.to ? Link : "button"}
            to={props.to}
            btnStyle={props.btnStyle || "plain"}
            color={props.color || "primary"}
            {...props}
        >
            {!props.loading && props.iconLeft && (
                <Icon name={props.iconLeft} size={16} className="icon-left" />
            )}

            {props.loading && (
                <Loader
                    size={16}
                    backgroundColor={
                        props.btnStyle === "plain"
                            ? Variables.Colors.Gray100
                            : Variables.Colors.White
                    }
                    color="currentColor"
                    marginRight={Variables.Spacers.XS}
                />
            )}

            {props.children}

            {props.iconRight && (
                <Icon name={props.iconRight} size={16} className="icon-right" />
            )}
        </Container>
    )
}

export default Button
