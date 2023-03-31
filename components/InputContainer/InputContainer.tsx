/*=============================================== InputContainer ===============================================*/

import { Text, Icon } from "../../"

import * as Styles from "./styles"
import type { InputContainerProps } from "./types"

const InputContainer = ({
    id,
    label,
    helper,
    helperBottom,
    children,
    counter,
    maxLength,
    value,
    accentColor = "primary",
}: InputContainerProps) => {
    const helperBottomFn = () => (
        <Styles.HelperBottom
            $style={
                typeof helperBottom === "object"
                    ? helperBottom.style
                    : "default"
            }
            color={
                typeof helperBottom === "object" ? helperBottom.color : "font"
            }
        >
            {typeof helperBottom === "object"
                ? helperBottom.text
                : helperBottom}
        </Styles.HelperBottom>
    )

    return (
        <Styles.StyledInputContainer>
            {label && (
                <Styles.Label $color={accentColor} htmlFor={id}>
                    {label}
                </Styles.Label>
            )}

            {helper && <Text>{helper}</Text>}

            {children}

            {helperBottom &&
                ((typeof helperBottom === "object" && helperBottom.text) ||
                    typeof helperBottom === "string") &&
                (typeof helperBottom === "object" && helperBottom.icon ? (
                    <Styles.HelperBottomContainer>
                        <Styles.IconContainer>
                            {typeof helperBottom.icon === "string" ? (
                                <Icon
                                    src={helperBottom.icon}
                                    size={helperBottom.iconSize || 14}
                                    color={helperBottom.iconColor || "primary"}
                                />
                            ) : (
                                helperBottom.icon
                            )}
                        </Styles.IconContainer>

                        {helperBottomFn()}
                    </Styles.HelperBottomContainer>
                ) : (
                    helperBottomFn()
                ))}

            {typeof value === "string" && counter && (
                <Styles.Counter>
                    {value.toString().length}
                    {maxLength ? ` / ${maxLength}` : ""}
                </Styles.Counter>
            )}
        </Styles.StyledInputContainer>
    )
}

export default InputContainer
