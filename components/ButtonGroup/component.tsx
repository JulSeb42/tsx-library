/*=============================================== Button group ===============================================*/

import React from "react"

import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { ButtonGroupProps } from "./types"

const ButtonGroup = ({
    buttons,
    variant,
    color = "primary",
    ...props
}: ButtonGroupProps) => {
    return (
        <Styles.StyledButtonGroup
            $hasBorders={variant === "transparent" && true}
            $borders={color}
            {...props}
        >
            {buttons.map(
                ({ text, iconLeft, iconRight, onClick, to, iconOnly }, i) => (
                    <React.Fragment key={uuid()}>
                        {iconOnly ? (
                            <Styles.StyledButton
                                to={to ? to : undefined}
                                onClick={onClick ? onClick : undefined}
                                icons={{ only: iconOnly }}
                                variant={
                                    variant === "transparent" ? "text" : "plain"
                                }
                                color={color}
                            />
                        ) : (
                            <Styles.StyledButton
                                to={to ? to : undefined}
                                onClick={onClick ? onClick : undefined}
                                icons={{
                                    left: iconLeft,
                                    right: iconRight,
                                }}
                                variant={
                                    variant === "transparent" ? "text" : "plain"
                                }
                                color={color}
                            >
                                {text}
                            </Styles.StyledButton>
                        )}

                        {variant === "transparent" &&
                            i !== buttons.length - 1 && (
                                <Styles.Separator $color={color} />
                            )}
                    </React.Fragment>
                )
            )}
        </Styles.StyledButtonGroup>
    )
}

export default ButtonGroup
